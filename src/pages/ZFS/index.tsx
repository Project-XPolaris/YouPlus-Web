import React, {useEffect, useState} from "react";
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem
} from "@material-ui/core";
import useZFSModel from "./model";
import {Add, Delete, Dns, MoreVert} from "@material-ui/icons";
import ListPage from "../../components/ListPage";
import CreateZFSPoolDialog from "../../components/CreateZFSPoolDialog";
import useStyles from "./style";
import useLayoutModel from "../../model/layout";
import ListItemDialog from "../../components/ListItemDialog";
import {ZFSPool} from "../../api/zfs";
import useStorageModel from "../Storage/model";
import {useSnackbar} from "notistack";
import {useHistory} from "react-router-dom";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface ZFSPagePropsType {

}

const ZFSPage = ({}: ZFSPagePropsType) => {
    const zfsModel = useZFSModel()
    const layoutModel = useLayoutModel()
    const storageModel = useStorageModel()
    const history = useHistory()
    const classes = useStyles()
    useEffect(() => {
        zfsModel.refresh()
    },[])
    const [moreMenuEl, setMoreMenuEl] = React.useState(null);
    const createPoolDialogSwitchHandler = layoutModel.getDialogSwitchHandler("newZFSPool")
    const [contextPool, setContextPool] = useState<ZFSPool>()
    const [deleteConfirmDialog, setDeleteConfirmDialog] = useState<{
        name: string,
        open: boolean
    }>({name: "", open: false})
    const {enqueueSnackbar} = useSnackbar();
    const pageHeadController = usePageHeadController({})
    const openDeleteConfirm = (name: string) => {
        setDeleteConfirmDialog({
            name,
            open: true
        })
    }
    const closeDeleteConfirm = () => {
        setDeleteConfirmDialog({
            ...deleteConfirmDialog,
            open: false
        })
    }
    const onRemoveHandler = async () => {
        if (deleteConfirmDialog?.name) {
            await zfsModel.removePool(deleteConfirmDialog.name)
            enqueueSnackbar("delete success", {variant: 'success'})
            closeDeleteConfirm()
        }
    }
    const handleMoreMenuClick = (event: any) => {
        setMoreMenuEl(event.currentTarget);
    };
    const handleMoreMenuClose = () => {
        setMoreMenuEl(null);
    };
    const asStorageSwitchHandler = layoutModel.getDialogSwitchHandler('poolAsStorageDialog')
    return (
        <div className={classes.root}>
            <PageHead title={"Pools"} controller={pageHeadController} actions={
                <>
                    <Button
                        className={classes.headAction}
                        variant={"text"}
                        color={'secondary'}
                        startIcon={<Add/>}
                        onClick={createPoolDialogSwitchHandler}
                    >New pool</Button>
                </>
            } />
            <div className={classes.content}>
                <Menu
                    anchorEl={moreMenuEl}
                    keepMounted
                    open={Boolean(moreMenuEl)}
                    onClose={handleMoreMenuClose}
                >
                    <MenuItem onClick={() => {
                        asStorageSwitchHandler()
                        handleMoreMenuClose()
                    }}>Use as storage</MenuItem>

                </Menu>
                <ListItemDialog
                    primary={contextPool?.name ?? "unknown"}
                    icon={<Dns/>}
                    onClose={asStorageSwitchHandler}
                    title={"As storage"}
                    onOk={async () => {
                        await storageModel.addStorage(`/${contextPool?.name}`, "ZFSPool")
                        asStorageSwitchHandler()
                        enqueueSnackbar("storage created", {
                            variant: 'success'
                        })
                    }}
                    text={"Use this pool to create new storage"}
                    open={layoutModel.getDialogOpen('poolAsStorageDialog')}
                />
                <CreateZFSPoolDialog
                    open={layoutModel.getDialogOpen("newZFSPool")}
                    onClose={createPoolDialogSwitchHandler}
                    onOk={async () => {
                        enqueueSnackbar("create pool success", {
                            variant: 'success'
                        })
                        createPoolDialogSwitchHandler()
                        await zfsModel.refresh()
                    }}
                />
                <Dialog open={Boolean(deleteConfirmDialog.open)} maxWidth={"xl"}>
                    <DialogTitle>
                        Remove
                    </DialogTitle>
                    <DialogContent className={classes.deleteDialogContent}>
                        <DialogContentText>
                            ALL DATA in pool will deleted,please confirm!
                        </DialogContentText>
                        <ListItem className={classes.deleteDialogItem}>
                            <ListItemAvatar>
                                <Avatar>
                                    <Dns/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={deleteConfirmDialog.name}/>
                        </ListItem>
                    </DialogContent>
                    <DialogActions>
                        <Button color={"secondary"} onClick={closeDeleteConfirm}>
                            Cancel
                        </Button>
                        <Button color={"secondary"} onClick={onRemoveHandler}>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
                <List className={classes.list}>
                    {
                        zfsModel.pools.map(pool => {
                            return (
                                <ListItem key={pool.name} button onClick={() => history.push(`/pool/${pool.name}/info`)}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <Dns/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={pool.name}/>
                                    <ListItemSecondaryAction>

                                        <IconButton>
                                            <Delete onClick={() => openDeleteConfirm(pool.name)}/>
                                        </IconButton>
                                        <IconButton onClick={(e) => {
                                            setContextPool(pool)
                                            handleMoreMenuClick(e)
                                        }}>
                                            <MoreVert/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })
                    }

                </List>
            </div>
        </div>
    )
}

export default ZFSPage;
