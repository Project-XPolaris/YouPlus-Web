import React, {ReactElement} from "react";
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper
} from "@material-ui/core";
import {Delete, People, Person} from "@material-ui/icons";
import useStyles from "./style";

export interface UserAndGroupListCardPropsType {
    users?: { uid: string, name: string }[]
    groups?: { gid: string, name: string }[]
    title?: string
    actions?: ReactElement
    onRemoveUser: (name: string) => void
    onRemoveGroup: (name: string) => void
    className?: any
}

const UserAndGroupListCard = ({
                                  className,
                                  onRemoveUser,
                                  onRemoveGroup,
                                  actions,
                                  users = [],
                                  groups = [],
                                  title = "users and group"
                              }: UserAndGroupListCardPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Paper className={className}>
            <div className={classes.userListHeader}>
                <div className={classes.usersListTitle}>
                    {title}
                </div>
                {actions}
            </div>
            <List className={classes.userList} dense>
                {
                    groups.map(it => {
                        return (
                            <ListItem key={it.gid} className={classes.userListItem}>
                                <ListItemAvatar>
                                    <Avatar className={classes.itemIcon}>
                                        <People/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.name} secondary={it.gid}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => onRemoveGroup(it.name)} size={"small"}>
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
                {
                    users.map(it => {
                        return (
                            <ListItem key={it.uid} className={classes.userListItem}>
                                <ListItemAvatar>
                                    <Avatar className={classes.itemIcon}>
                                        <Person/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.name} secondary={it.uid}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => onRemoveUser(it.name)} size={"small"}>
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

export default UserAndGroupListCard
