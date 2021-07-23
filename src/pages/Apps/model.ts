import {createModel} from "hox";
import {useState} from "react";
import {
    App,
    fetchApps,
    installApp,
    removeAutoStart,
    setAutoStart,
    startApp,
    stopApp,
    unInstallAPP
} from "../../api/apps";
import {useInterval} from "ahooks";

const AppsPageModel = () => {
    const [appList,setAppList] = useState<App[]>([])
    const loadApp = async () => {
        const response = await fetchApps()
        if (response) {
            setAppList(response.apps)
        }
    }

    const start = async (appId:string) => {
        await startApp(appId)
    }
    const stop = async (appId:string) => {
        await stopApp(appId)
    }
    const addToAutoStart = async (appId:string) => {
        await setAutoStart(appId)
    }
    const removeFromAutoStart = async (appId:string) => {
        await removeAutoStart(appId)
    }
    const uninstall = async (id:string) => {
        await unInstallAPP(id)
    }
    return {
        appList,loadApp,start,stop,addToAutoStart,removeAutoStart,uninstall
    }
}
const useAppsPageModel = createModel(AppsPageModel)
export default useAppsPageModel
