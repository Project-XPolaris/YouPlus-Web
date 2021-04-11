import React, {ReactElement} from "react";
import {
    Avatar,
    Button, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper
} from "@material-ui/core";
import {Delete, Person, Remove} from "@material-ui/icons";
import useStyles from "./style";

export interface UserListCardPropsType {
    users?:{uid:string,name:string}[]
    title?:string
    actions?:ReactElement
    onRemove:(name:string) => void
}

const UserListCard = ({onRemove,actions,users = [],title = "users"}: UserListCardPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Paper>
            <div className={classes.userListHeader}>
                <div className={classes.usersListTitle}>
                    { title }
                </div>
                {actions}
            </div>
            <List className={classes.userList} dense>
                {
                    users.map(it => {
                        return (
                            <ListItem key={it.uid}  className={classes.userListItem}>
                                <ListItemAvatar>
                                    <Avatar className={classes.userListIcon}>
                                        <Person/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.name} secondary={it.uid}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => onRemove(it.name)} size={"small"}>
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>

        </Paper>
    )
}

export default UserListCard
