import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import useStyles from "./style";
import clsx from "clsx";
import DiskSelectField from "../DiskSelectField";
import useDisksModel from "../../pages/Disks/model";
import {Disk} from "../../api/disks";

export interface CreateZFSPoolDialogPropsType {
    open?: boolean
    onOk?:(form : CreateZFSPoolForm) => void
    onClose?:() => void
}
export interface CreateZFSPoolForm {
    name :string
    disks:string[]
}
const CreateZFSPoolDialog = ({onClose,onOk,open = false}: CreateZFSPoolDialogPropsType) => {
    const classes = useStyles()
    const diskModel = useDisksModel()
    const [disks,setDisks] = useState<Disk[]>([])
    const [name,setName] = useState<string | undefined>()
    const onDialogOk = () => {
        if (name === undefined || disks.length === 0) {
            return
        }
        if (onOk) {
            onOk({
                name,
                disks:disks.map(it => it.name)
            })
        }
    }
    return (
        <Dialog open={open} maxWidth={"lg"} onClose={onClose}>
            <DialogTitle>
                Create new pool
            </DialogTitle>
            <DialogContent className={classes.content}>
                <TextField variant={"outlined"} label={"Pool name"} fullWidth onChange={(e) => setName(e.target.value)}/>
                <div className={clsx(classes.field,classes.fieldArea)}>
                    <Typography variant={"caption"}>
                        disks
                    </Typography>
                    <DiskSelectField disks={diskModel.disks} onChange={(d) => setDisks(d)}/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onDialogOk}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateZFSPoolDialog;
