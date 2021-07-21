import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    TextField,
    Typography
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import useStyles from "./style";
import clsx from "clsx";
import DiskSelectField from "../DiskSelectField";
import {Disk, fetchDisks} from "../../api/disks";

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
    const [pickUpDisks,setPickUpDisks] = useState<Disk[]>([])

    const [disks,setDisks] = useState<Disk[]>([])
    const [name,setName] = useState<string | undefined>()
    const loadDisks = async () => {
        const response = await fetchDisks()
        if (response) {
            setPickUpDisks(response.disks)
        }
    }
    useEffect(() => {
        loadDisks()
    },[])
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
                <TextField variant={"outlined"} label={"Pool name"} fullWidth onChange={(e) => setName(e.target.value)} size={"small"}/>
                <Divider className={classes.divider}/>
                <div className={clsx(classes.field,classes.fieldArea)}>
                    <div className={classes.label}>
                        disks
                    </div>
                    <DiskSelectField disks={pickUpDisks} onChange={(d) => setDisks(d)}/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onDialogOk}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateZFSPoolDialog;
