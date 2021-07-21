import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Step,
    StepLabel,
    Stepper
} from "@material-ui/core";
import useStyles from "./style";
import ShareInfoStep, {InfoForm} from "./step/info";
import StorageStep from "./step/storage";
import {Part} from "../../api/disks";
import UsersStep, {UsersForm} from "./step/users";
import CompleteStep from "./step/complete";
import {useForm} from "./hook";
import {Storage} from "../../api/storage";

export interface NewShareDialogPropsType {
    onCreateShare: (data: any) => void
}

const steps = [
    "info", "storage", "users", "complete"
]
const NewShareDialog = ({onCreateShare, ...other}: NewShareDialogPropsType & DialogProps) => {
    const [index, setIndex] = useState<number>(0)
    const [selectStorage, setSelectStorage] = useState<Storage | undefined>()
    const usersFormController = useForm<UsersForm>({
        folderPublic: true
    })
    const infoForm = useForm<InfoForm>({})
    const classes = useStyles()
    const renderStepContent = () => {
        switch (index) {
            case 0:
                return <ShareInfoStep controller={infoForm}/>
            case 1:
                return <StorageStep selectedStorage={selectStorage} onSelect={(part) => setSelectStorage(part)}/>
            case 2:
                return <UsersStep controller={usersFormController}/>
            case 3:
                return <CompleteStep
                    name={infoForm.form.name}
                    access={usersFormController.form.folderPublic ? "Allow guest" : "Not allow guest"}
                    storage={selectStorage?.id}
                    validateUsers={
                        (usersFormController.form.readUsers ?? []).join(",")
                    }
                    writeUsers={
                        (usersFormController.form.writeUsers ?? []).join(",")
                    }
                />
            default:
                return (<></>)
        }
    }
    const validate = () => {
        if (
            infoForm.form.name === undefined ||
            selectStorage == undefined
        ) {
            return false
        }
        return true
    }
    const onCreate = () => {
        if (!validate()) {
            return
        }
        const data = {
            name: infoForm.form.name,
            public: usersFormController.form.folderPublic,
            readUsers: usersFormController.form.readUsers ?? [],
            writeUsers: usersFormController.form.writeUsers ?? [],
            storageId: selectStorage?.id
        }
        onCreateShare(data)

    }
    return (
        <Dialog {...other} maxWidth={"xl"}>
            <DialogTitle>
                New Share
                <Stepper activeStep={index} className={classes.stepper}>
                    {
                        steps.map((label, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            )
                        })
                    }
                </Stepper>
            </DialogTitle>
            <DialogContent className={classes.content}>

                <div className={classes.stepContent}>
                    {renderStepContent()}
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={index < 1}
                    onClick={() => setIndex(index - 1)}
                >Previous</Button>
                {
                    index === steps.length - 1 && <Button onClick={() => onCreate()}>Create</Button>
                }
                {
                    index !== steps.length - 1 && <Button
                        onClick={() => setIndex(index + 1)}
                    >
                        Next
                    </Button>
                }
            </DialogActions>
        </Dialog>
    )
}

export default NewShareDialog;
