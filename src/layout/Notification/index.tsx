import {useEffect} from "react";
import {DefaultNotificationManager} from "../../ws";
import {useSnackbar} from "notistack";

export interface NotificationPropsType {

}

const Notification = ({}: NotificationPropsType) => {
    const { enqueueSnackbar } = useSnackbar()
    useEffect(() => {
        DefaultNotificationManager.addListener("InstallError", (event) => {
            enqueueSnackbar(`${event.data.extra.appName} install error: ${event.data.errorMessage}`,{ variant:"error"  })
        })
        DefaultNotificationManager.addListener("InstallDone", (event) => {
            enqueueSnackbar(`${event.data.extra.appName} install success`,{ variant:"success"  })
        })
        DefaultNotificationManager.addListener("UninstallDone", (event) => {
            enqueueSnackbar(`${event.data.extra.appName} uninstall success`,{ variant:"success"  })
        })
        DefaultNotificationManager.addListener("UninstallError", (event) => {
            enqueueSnackbar(`${event.data.extra.appName} uninstall error: ${event.data.errorMessage}`,{ variant:"success"  })
        })
    },[])
    return (<></>)
}

export default Notification;
