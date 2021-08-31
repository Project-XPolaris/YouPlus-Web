import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Typography} from "@material-ui/core";
import React, {useState} from "react";
import useStyles from "./style";
import InfoCard from "../../components/InfoCard";
import {rebootDevice, shutdownDevice} from "../../api/os";
import {showAPIResponseErrorMessage, showGlobalSnackMessage} from "../../utils/message";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface SystemPagePropsType {

}
type ActionTypes = "Reboot" | "Shutdown"
const SystemPage = ({}: SystemPagePropsType) => {
    const classes = useStyles()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [confirmContent, setConfirmContent] = useState<string>()
    const [confirmAction,setConfirmAction] = useState<ActionTypes>()
    const pageHeadController = usePageHeadController({})
    const openConfirmActionDialog = (content:string,action:ActionTypes) => {
        setConfirmContent(content)
        setConfirmAction(action)
        setIsConfirmOpen(true)
    }
    const onConfirmOk = async () => {
        setIsConfirmOpen(false)
        if (!confirmAction) {
            return
        }
        let response;
        switch (confirmAction){
            case "Shutdown":
                response = await shutdownDevice();
                break;
            case "Reboot":
                response = await rebootDevice();
                return;
        }
        if (response) {
            if (response.success) {
                showGlobalSnackMessage(`${confirmAction} success`,{variant:"success"})
            }else{
                showAPIResponseErrorMessage(response)
            }
        }

    }
    return (
        <div>
            <Dialog open={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
                <DialogTitle>
                    Confirm run
                </DialogTitle>
                <DialogContent>
                    { confirmContent }
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsConfirmOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirmOk}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <PageHead
                title={"System"}
                controller={pageHeadController}
            />
            <Grid container>
                <Grid item xs={12} sm={3} md={3} lg={2} xl={2} className={classes.item}>
                    <InfoCard
                        label={"Action"}
                        value={"Shutdown"}
                        valueSize={20}
                        bottom={
                            <>
                                <Button onClick={() => openConfirmActionDialog("Device will shutdown!","Shutdown")}>
                                    Run
                                </Button>
                            </>
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={2} xl={2} className={classes.item}>
                    <InfoCard
                        label={"Action"}
                        value={"Reboot"}
                        valueSize={20}
                        bottom={
                            <>
                                <Button onClick={() => openConfirmActionDialog("Device will reboot!","Reboot")}>
                                    Run
                                </Button>
                            </>
                        }
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default SystemPage;
