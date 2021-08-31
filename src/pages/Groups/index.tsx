import React, {ReactElement, useEffect} from "react";
import ListPage from "../../components/ListPage";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Add, Group} from "@material-ui/icons";
import useUserGroupsModel from "./model";
import NewGroupDialog from "../../components/NewGroupDialog";
import useLayoutModel from "../../model/layout";
import useStyles from "./style";
import {useHistory} from "react-router-dom";
import {usePageHeadController} from "../../components/PageHead/hook";
import PageHead from "../../components/PageHead";

export interface GroupsPagePropsType {

}

const GroupsPage = ({}: GroupsPagePropsType): ReactElement => {
    const classes = useStyles()
    const model = useUserGroupsModel()
    const layoutModel = useLayoutModel()
    const history = useHistory()
    useEffect(() => {
        model.fetchData()
    }, [])
    const pageHeadController = usePageHeadController({})
    return (
        <div>
            <NewGroupDialog
                onOk={(name) => {
                    model.create(name)
                    layoutModel.switchDialog("newgroup")
                }}
                onCancel={() => layoutModel.switchDialog("newgroup")}
                open={layoutModel.getDialogOpen("newgroup")}
            />
            <PageHead
                title={"Groups"}
                controller={pageHeadController}
                actions={
                    <>
                        <Button startIcon={<Add/>} variant={"text"}
                                onClick={() => layoutModel.switchDialog("newgroup")}>
                            New user group
                        </Button>
                    </>
                }

            />
            <List>
                {
                    model.groups.map(group => {
                        return (
                            <ListItem key={group.gid} button onClick={() => {
                                history.push(`/group/${group.name}/info`)
                            }}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Group/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={group.name} secondary={group.type}/>
                            </ListItem>
                        )
                    })

                }
            </List>


        </div>
    )
}

export default GroupsPage
