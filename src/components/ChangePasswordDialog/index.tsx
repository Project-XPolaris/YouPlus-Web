import {ReactElement, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import useStyles from "./style";

export interface ChangePasswordDialogPropsType {
    open?: boolean
    onCancel: () => void
    onOk: (password: string) => void
}

const ChangePasswordDialog = ({onOk,onCancel, open = false}: ChangePasswordDialogPropsType): ReactElement => {
    const classes = useStyles();
    const [password,setPassword] = useState<string | undefined>()
    const [repassword,setRePassword] = useState<string | undefined>()

    const onSubmit = () => {
        if (password === repassword && password && password.length > 0) {
            onOk(password)
        }
    };
    return (
        <Dialog open={open} maxWidth="xl" onClose={onCancel}>
            <DialogTitle>
                Change your password
            </DialogTitle>
                <DialogContent>
                    <TextField
                        variant="outlined"
                        fullWidth
                        label={"Password"}
                        className={classes.input}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"/>

                    <TextField
                        variant="outlined"
                        fullWidth
                        label={"RePassword"}
                        className={classes.input}
                        onChange={(e) => setRePassword(e.target.value)}
                        type="password"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit}>
                        Change
                    </Button>
                </DialogActions>
        </Dialog>
    )
}

export default ChangePasswordDialog
