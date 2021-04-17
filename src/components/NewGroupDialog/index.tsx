import {ReactElement, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import useStyles from "./style";

export interface NewGroupDialogPropsType {
    open?:boolean
    onOk:(name:string) => void
    onCancel:() => void
}

const NewGroupDialog = ({onCancel,onOk,open = true}: NewGroupDialogPropsType): ReactElement => {
    const [name,setName] = useState<string | undefined>()
    const classes = useStyles()
    const onDialogOk = () => {
        if (name) {
            onOk(name)
        }
    }
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>
                New Group
            </DialogTitle>
            <DialogContent>
                <div className={classes.content}>
                    <TextField
                        variant={"outlined"}
                        label={"name"}
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>
                    Cancel
                </Button>
                <Button onClick={onDialogOk}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewGroupDialog
