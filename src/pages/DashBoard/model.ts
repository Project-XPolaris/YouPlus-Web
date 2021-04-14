import {createModel} from "hox";
import {useInterval} from "ahooks";
import {useState} from "react";
import {fetchSystemInfo, SystemInfo} from "../../api/style";

const DashboardModel = () => {
    const [systemInfo,setSystemInfo] = useState<SystemInfo | undefined>()
    useInterval(async () => {
        const response = await fetchSystemInfo()
        setSystemInfo(response)
    },4000)
    return {
        systemInfo
    }
}
const useDashboardModel = createModel(DashboardModel)
export default useDashboardModel
