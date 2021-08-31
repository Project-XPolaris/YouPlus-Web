import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {ReactElement, useEffect, useState} from "react";
import useStyles from "./style";
import UploadStep from "./setp/upload";
import InstallPackInfoStep from "./setp/confirm";
import {AppPackInfo, installApp, uploadAppPack} from "../../api/apps";
import {useInstallAppForm} from "./hook";
import {useSnackbar} from "notistack";

export interface InstallAppDialogPropsType {
    open?: boolean
    onClose: () => void
    onOk: () => void
}

const InstallAppDialog = ({onOk, onClose, open = false}: InstallAppDialogPropsType): ReactElement => {
    const classes = useStyles()
    const [file, setFile] = useState<File | undefined>()
    const [stepIndex, setStepIndex] = useState<number>(0)
    const [isUpload,setIsUpload] = useState(false)
    const [packInfo,setPackInfo] = useState<AppPackInfo | undefined>()
    const installForm = useInstallAppForm()
    const { enqueueSnackbar } = useSnackbar()
    const uploadFile = async () => {
        if (!file) {
            return
        }
        setIsUpload(true)
        const result  = await uploadAppPack(file)
        setIsUpload(false)
        setPackInfo(result)
        setStepIndex(stepIndex + 1)
        installForm.clear()
    }
    const onFinish = async () => {
        if (!packInfo) {
            return
        }
        for (let installArg of packInfo.args) {
            if (installArg.require && installForm.getArgValue(installArg.key) === undefined) {
                enqueueSnackbar(`install arg [${installArg.name}] is require`,{variant:"error"})
                return
            }
        }
        const args:any[] = []
        installForm.args.forEach(arg => {
            const packArg = packInfo.args.find(it => it.key === arg.key)
            if (!packArg) {
                return
            }
            args.push({
                key:arg.key,
                value:arg.value,
                source:packArg.source
            })
        })
        await installApp(packInfo.id,{
            args
        })
        enqueueSnackbar("add install app task success",{
            variant: "success"
        })
        onOk()
    }
    useEffect(() => {
        uploadFile()
    },[file])
    const renderContent = () => {
        if (stepIndex == 0) {
            return (
                <UploadStep
                    onFileChange={(file) => {
                        setFile(file)
                    }}
                    filename={file?.name}
                    isUpload={isUpload}
                />
            )
        }
        if (stepIndex == 1) {
            return (
                <InstallPackInfoStep packInfo={packInfo} form={installForm}/>
            )
        }
    }
    const getTitleText = () => {
        switch (stepIndex) {
            case 0:
                return "Install App > Upload"
            case 1:
                return "Install App > Confirm"
        }
        return "Install App"
    }
    const isNextDisable = () => {
        if (stepIndex == 2) {
            return true
        }
        // if (!packInfo && stepIndex == 0) {
        //     return true
        // }
        return false
    }
    return (
        <Dialog open={open} onClose={onClose} maxWidth={"xl"}>
            <DialogTitle>
                {getTitleText()}
            </DialogTitle>
            <DialogContent className={classes.content}>
                {renderContent()}
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button
                    disabled={stepIndex == 0}
                    onClick={() => {
                        setStepIndex(stepIndex - 1)
                    }}
                >
                    Previous
                </Button>
                <Button
                    disabled={isNextDisable()}
                    onClick={() => {
                        if (stepIndex == 1) {
                            onFinish()
                            return
                        }
                        setStepIndex(stepIndex + 1)
                    }}
                >
                    {stepIndex == 1 ? "Install" : "Next" }
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default InstallAppDialog
