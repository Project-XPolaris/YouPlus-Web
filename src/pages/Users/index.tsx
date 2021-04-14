import React, {useEffect} from "react";
import useStyles from "./style";
import {
    Avatar,
    Button, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Menu,
    MenuItem,
    Typography
} from "@material-ui/core";
import useUsersModel from "./model";
import {Add, Delete, MoreVert, Person} from "@material-ui/icons";
import useLayoutModel from "../../model/layout";
import NewUserDialog from "../../components/NewUserDialog";
import {useContextMenu} from "../../hooks/ContextMenu";

export interface UsersPagePropsType {

}
const UsersPage = ({}: UsersPagePropsType) => {
    const classes = useStyles()
    const usersModel = useUsersModel()
    const layoutModel = useLayoutModel()
    const userContextMenu = useContextMenu<string>()
    const onSwitchNewUserDialog = layoutModel.getDialogSwitchHandler("newUser")
    useEffect(() => {
        usersModel.initData()
    }, [])
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
            <Menu
                open={userContextMenu.isOpen}
                anchorEl={userContextMenu.anchor}
                onClose={() => userContextMenu.close()}
            >
                <MenuItem onClick={async () => {
                    if (userContextMenu.data) {
                        userContextMenu.close()
                        await usersModel.remove(userContextMenu.data)

                    }
                }}>
                    <Delete/> Remove user
                </MenuItem>
            </Menu>
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
                            <ListItem key={it}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it} />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={(e) => userContextMenu.open(it,e.target)}>
                                        <MoreVert />
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

export default UsersPage;
