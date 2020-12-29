import {createModel} from "hox";
import {useState} from "react";
import {App, fetchApps, startApp, stopApp} from "../../api/apps";
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
    return {
        appList,loadApp,start,stop
    }
}
const useAppsPageModel = createModel(AppsPageModel)
export default useAppsPageModel
