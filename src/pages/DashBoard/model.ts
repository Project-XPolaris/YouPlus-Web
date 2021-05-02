import {createModel} from "hox";
import {useInterval} from "ahooks";
import {useState} from "react";
import {fetchSystemInfo, SystemInfo} from "../../api/style";
import {fetchDisks} from "../../api/disks";
import {fetchStorageList} from "../../api/storage";
import {getShareList} from "../../api/share";
import {getUserList} from "../../api/users";

const DashboardModel = () => {
    const [systemInfo,setSystemInfo] = useState<SystemInfo | undefined>()
    const [diskCount,setDiskCount] = useState<number>(0)
    const [storageCount,setStorageCount] = useState<number>(0)
    const [shareFolderCount,setShareFolderCount] = useState<number>(0)
    const [userCount,setUserCount] = useState<number>(0)
    const initData = async () => {
        const diskResponse = await fetchDisks()
        setDiskCount(diskResponse.disks.length)
        const storageResponse = await fetchStorageList()
        setStorageCount(storageResponse.storages.length)
        const shareFolderResponse = await getShareList()
        setShareFolderCount(shareFolderResponse.folders.length)
        const userListResponse = await getUserList()
        setUserCount(userListResponse.users.length)
    }
    useInterval(async () => {
        const response = await fetchSystemInfo()
        setSystemInfo(response)
    },4000)
    return {
        systemInfo,initData,diskCount,storageCount,shareFolderCount,userCount
    }
}
const useDashboardModel = createModel(DashboardModel)
export default useDashboardModel
