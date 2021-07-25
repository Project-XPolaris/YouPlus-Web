import {createModel} from "hox";
import {useInterval} from "ahooks";
import {useState} from "react";
import {
    DeviceInfo,
    fetchDeviceInfo,
    fetchSystemInfo,
    fetchSystemMonitor,
    SystemInfo,
    SystemMonitor
} from "../../api/system";
import {fetchDisks} from "../../api/disks";
import {fetchStorageList} from "../../api/storage";
import {getShareList} from "../../api/share";
import {getUserList} from "../../api/users";

const DashboardModel = () => {
    const [systemInfo,setSystemInfo] = useState<SystemInfo | undefined>()
    const [systemMonitor,setSystemMonitor] = useState<SystemMonitor | undefined>()
    const [deviceInfo,setDeviceInfo] = useState<DeviceInfo | undefined>()

    const initData = async () => {
        const info = await fetchDeviceInfo()
        setDeviceInfo(info)
    }
    const refreshSystemInfo = async () => {
        const response = await fetchSystemInfo()
        setSystemInfo(response)
    }
    const refreshMonitorData = async () => {
        const info = await fetchSystemMonitor()
        setSystemMonitor(info)
    }
    return {
        systemInfo,initData,refreshSystemInfo,systemMonitor,refreshMonitorData,deviceInfo
    }
}
const useDashboardModel = createModel(DashboardModel)
export default useDashboardModel
