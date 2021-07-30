import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import useStyles from "./style";
import {Disk, fetchDisks} from "../../api/disks";
import {CreateZPoolForm, useCreateZPoolForm} from "./form";
import PoolInfoStep from "./step/info";
import PoolSimpleEditStep from "./step/simple";
import PoolEditStep from "./step/editor";
import PoolConfirm from "./step/confirm";
import {createZFSPool} from "../../api/zfs";

export interface CreateZFSPoolDialogPropsType {
    open?: boolean
    onOk: () => void
    onClose?: () => void
}


const MAX_STEP = 3;
const StepName = [
    "Info", "Edit", "Confirm"
]
const CreateZFSPoolDialog = ({onClose, onOk, open = false}: CreateZFSPoolDialogPropsType) => {
    const classes = useStyles()
    const form = useCreateZPoolForm()
    const [disks, setDisks] = useState<Disk[]>([])
    const [stepIndex, setStepIndex] = useState<number>(0)

    const loadDisks = async () => {
        const response = await fetchDisks()
        if (response) {
            setDisks(response.disks)
        }
    }
    useEffect(() => {
        if (open) {
            loadDisks()
        }
    }, [open])
    const onDialogOk = () => {

    }
    const onFinish = async () => {
        if (!form.name || !form.vdevTree) {
            return
        }
        const response = await createZFSPool({
            name:form.name,
            conf:form.vdevTree
        })
        onOk()
    }
    const onNextClick = () => {
        if (stepIndex === MAX_STEP - 1) {
            onFinish()
            return;
        }
        if (stepIndex > MAX_STEP - 1) {
            return
        }
        if (stepIndex == 1) {
            if (!form.advanceMode) {
                form.setVDevTree({
                    type: "disk",
                    devices: form.pickupDisk.map(disk => {
                        return {
                            path: `/dev/${disk.name}`,
                            type: "disk"
                        }
                    })
                })
            }
        }
        setStepIndex(stepIndex + 1)
    }
    const onPreviousClick = () => {
        if (stepIndex == 0) {
            return
        }
        setStepIndex(stepIndex - 1)
    }
    const isNextEnable = () => {
        if (stepIndex === 0 && !form.name) {
            return false
        }
        return stepIndex < MAX_STEP
    }
    const isPreviousEnable = () => {
        return stepIndex !== 0
    }
    const getTitle = () => {
        return `Create new pool > ${StepName[stepIndex]}`
    }
    const renderStep = () => {
        switch (stepIndex) {
            case 0:
                return (
                    <PoolInfoStep form={form} className={classes.stepView}/>
                )
            case 1:
                if (form.advanceMode) {
                    return <PoolEditStep className={classes.stepView}/>
                } else {
                    return <PoolSimpleEditStep form={form} disks={disks} className={classes.stepView}/>
                }
            case 2:
                return (
                    <PoolConfirm  form={form}/>
                )
        }
    }
    return (
        <Dialog
            open={open}
            maxWidth='xl'
            onClose={onClose}
        >
            <DialogTitle>
                {getTitle()}
            </DialogTitle>
            <DialogContent className={classes.content}>
                {renderStep()}
            </DialogContent>
            <DialogActions className={classes.action}>
                <Button
                    disabled={!isPreviousEnable()}
                    onClick={onPreviousClick}
                >Previous</Button>
                <Button
                    disabled={!isNextEnable()}
                    onClick={onNextClick}
                >{stepIndex === MAX_STEP - 1 ? "Finish" : "Next"}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateZFSPoolDialog;
