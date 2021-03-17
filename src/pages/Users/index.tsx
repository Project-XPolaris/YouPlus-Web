import React from "react";
import useStyles from "./style";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import useUsersModel from "./model";
import {Add, Person} from "@material-ui/icons";
import useLayoutModel from "../../model/layout";
import NewUserDialog from "../../components/NewUserDialog";

export interface UsersPagePropsType {

}

const UsersPage = ({}: UsersPagePropsType) => {
    const classes = useStyles()
    const usersModel = useUsersModel()
    const layoutModel = useLayoutModel()
    const onSwitchNewUserDialog = layoutModel.getDialogSwitchHandler("newUser")
    return (
        <div className={classes.root}>
            <NewUserDialog
                open={layoutModel.getDialogOpen("newUser")}
                onClose={onSwitchNewUserDialog}
                onOk={(username, password) => {
                    usersModel.newUser(username,password)
                    onSwitchNewUserDialog()
                }}
            />
            <Typography variant={"h4"} className={classes.title}>
                Users
            </Typography>
            <div className={classes.actions}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Add />}
                    onClick={onSwitchNewUserDialog}
                >
                    New user
                </Button>
            </div>
            <List>
                {
                    usersModel.users.map(it => {
                        return (
                            <ListItem key={it} button>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it} />
                            </ListItem>
                        )
                    })
                }

            </List>
        </div>
    )
}

export default UsersPage;
