import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import React, {useState} from "react";
import useStyles from "./style";

export interface NewUserDialogPropsType {
    open?:boolean
    onClose:() => void
    onOk:(username:string,password:string) => void
}

const NewUserDialog = ({onOk,onClose,open = false}: NewUserDialogPropsType) => {
    const [inputUsername,setInputUsername] = useState<string | undefined>()
    const [inputPassword,setInputPassword] = useState<string | undefined>()
    const classes = useStyles()
    const onDialogOk = () => {
        if (inputUsername && inputPassword) {
            onOk(inputUsername,inputPassword)
        }
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                New user
            </DialogTitle>
            <DialogContent>
                <div className={classes.content}>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setInputUsername(e.target.value)}
                    className={classes.input}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setInputPassword(e.target.value)}
                    className={classes.input}
                />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" >
                    Cancel
                </Button>
                <Button onClick={onDialogOk} color="primary" autoFocus>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewUserDialog;
