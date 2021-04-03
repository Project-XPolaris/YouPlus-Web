import React, {useEffect} from "react";
import useStyles from "./style";
import useShareFoldersModel from "./model";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Add, Folder, Person} from "@material-ui/icons";
import NewShareDialog from "../../components/NewShareDialog";
import useLayoutModel from "../../model/layout";
import layout from "../../model/layout";

export interface ShareFolderPropsType {

}

const ShareFolder = ({}: ShareFolderPropsType) => {
    const classes = useStyles()
    const model = useShareFoldersModel()
    useEffect(() => {
        model.initData()
    }, [])
    const layoutModel = useLayoutModel()
    const newShareSwitchHandler = layoutModel.getDialogSwitchHandler("newShare")
    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>
                Folders
            </Typography>
            {
                layoutModel.getDialogOpen("newShare") &&
                <NewShareDialog
                    open={true}
                    onClose={newShareSwitchHandler}
                    onCreateShare={async (data) => {
                        await model.createShare(data)
                        newShareSwitchHandler()
                    }}
                />
            }

            <div className={classes.actions}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Add />}
                    onClick={newShareSwitchHandler}
                >
                    New share folder
                </Button>
            </div>
            <List>
                {
                    model.folders.map(it => {
                        return (
                            <ListItem key={it.part} button>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Folder />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.part} secondary={it.part_name} />
                            </ListItem>
                        )
                    })
                }

            </List>
        </div>
    )
}

export default ShareFolder;
