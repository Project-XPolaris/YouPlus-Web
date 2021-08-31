import React, {useEffect} from "react";
import useStyles from "./style";
import useShareFoldersModel from "./model";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Add, Folder, Person} from "@material-ui/icons";
import NewShareDialog from "../../components/NewShareDialog";
import useLayoutModel from "../../model/layout";
import layout from "../../model/layout";
import {useHistory} from "react-router-dom";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface ShareFolderPropsType {

}

const ShareFolder = ({}: ShareFolderPropsType) => {
    const classes = useStyles()
    const model = useShareFoldersModel()
    const history = useHistory()
    useEffect(() => {
        model.initData()
    }, [])
    const layoutModel = useLayoutModel()
    const pageHeadController = usePageHeadController({})
    const newShareSwitchHandler = layoutModel.getDialogSwitchHandler("newShare")
    return (
        <div>
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
            <PageHead
                title={"ShareFolders"}
                controller={pageHeadController}
                actions={
                    <>
                        <Button
                            variant="text"
                            color="secondary"
                            startIcon={<Add />}
                            onClick={newShareSwitchHandler}
                        >
                            New share folder
                        </Button>
                    </>
                }

            />
            <List>
                {
                    model.folders.map(it => {
                        return (
                            <ListItem key={it.name} button onClick={() => history.push(`/folder/${it.name}/info`)}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Folder />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.name}/>
                            </ListItem>
                        )
                    })
                }

            </List>
        </div>
    )
}

export default ShareFolder;
