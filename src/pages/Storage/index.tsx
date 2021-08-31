import React, {useEffect, useState} from "react";
import ListPage from "../../components/ListPage";
import useStorageModel from "./model";
import {
    Avatar, Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {Add, Archive, Delete} from "@material-ui/icons";
import useStyles from "./style";
import ListItemDialog from "../../components/ListItemDialog";
import {Storage} from "../../api/storage";
import useLayoutModel from "../../model/layout";
import {useSnackbar} from "notistack";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface StoragePagePropsType {

}

const StoragePage = ({}: StoragePagePropsType) => {
    const storageModel = useStorageModel()
    const layoutModel = useLayoutModel()
    const classes = useStyles()
    useEffect(() => {
        storageModel.init()
    }, [])
    const {enqueueSnackbar} = useSnackbar();
    const [contextStorage, setContextStorage] = useState<Storage>()
    const switchDeleteConfirmDialog = layoutModel.getDialogSwitchHandler('deleteStorageConfirm')
    const pageHeadController = usePageHeadController({})

    const openDeleteDialog = (storage: Storage) => {
        setContextStorage(storage)
        switchDeleteConfirmDialog()
    }
    return (
        <div>
            <ListItemDialog
                primary={contextStorage?.id ?? "unknown"}
                icon={<Archive/>}
                onClose={switchDeleteConfirmDialog}
                title={"Delete"}
                onOk={async () => {
                    if (contextStorage) {
                        await storageModel.remove(contextStorage?.id)
                        enqueueSnackbar(`storage ${contextStorage?.id} removed`, {variant: "success"})
                    }
                    switchDeleteConfirmDialog()
                }}
                open={layoutModel.getDialogOpen('deleteStorageConfirm')}
                secondary={contextStorage?.type ?? "unknown"}
                text={"Remove action will remove all SHARE FOLDER in this storage!"}
            />
            <PageHead
                title={"Storage"}
                controller={pageHeadController}
            />
            <List className={classes.list}>
                {
                    storageModel.storages.map(storage => {
                        return (
                            <ListItem key={storage.id} button>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Archive/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={storage.id} secondary={storage.type}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => openDeleteDialog(storage)}>
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default StoragePage;
