import {ReactElement, useEffect, useState} from "react";
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Person} from "@material-ui/icons";
import {getUserList} from "../../api/users";
import useStyles from "./style";

export interface UserSelectDialogPropsType {
    open?: boolean
    onCancel: () => void
    onOk: (username: string) => void,
    except?:string[]
}

const UserSelectDialog = ({onOk,onCancel, open = false,except = []}: UserSelectDialogPropsType): ReactElement => {
    const classes = useStyles()
    const [userList,setUserList] = useState<string[]>([])
    useEffect(() => {
        if (open) {
            getUserList().then(response => {
                setUserList(response.users)
            })
        }
    },[open])
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>Pick up a user</DialogTitle>
                <List >
                    {
                        userList.filter(it => except.find(exc => exc === it) === undefined).map((it, idx) => {
                            return (
                                <ListItem key={idx} button onClick={() => onOk(it)} className={classes.item}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.icon}>
                                            <Person/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={it} />
                                </ListItem>
                            )
                        })
                    }
                    <ListItem>

                    </ListItem>
                </List>

        </Dialog>
    )
}

export default UserSelectDialog
