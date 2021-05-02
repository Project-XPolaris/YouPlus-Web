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
        setAppList(response.apps)
    }
    useInterval(() => {
        loadApp();
    },1000)
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
    const install = async (file:File) => {
        await installApp(file)
    }
    return {
        appList,loadApp,start,stop,addToAutoStart,removeAutoStart,uninstall,install
    }
}
const useAppsPageModel = createModel(AppsPageModel)
export default useAppsPageModel
