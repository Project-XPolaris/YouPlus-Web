import {ReactElement, useEffect, useState} from "react";
import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Person} from "@material-ui/icons";
import {fetchGroupList} from "../../api/users";
import useStyles from "./style";

export interface UserGroupSelectDialogPropsType {
    open?: boolean
    onCancel: () => void
    onOk: (name: string) => void,
    except?:string[]
}

const UserGroupSelectDialog = ({onOk,onCancel, open = false,except = []}: UserGroupSelectDialogPropsType): ReactElement => {
    const classes = useStyles()
    const [groupList,setGroupList] = useState<string[]>([])
    useEffect(() => {
        if (open) {
            fetchGroupList().then(response => {
                setGroupList(response.groups.map(it => it.name))
            })
        }
    },[open])
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>Pick up a user</DialogTitle>
                <List>
                    {
                        groupList.filter(it => except.find(exc => exc === it) === undefined).map((it, idx) => {
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

export default UserGroupSelectDialog
