import {createModel} from "hox";
import {useState} from "react";
import {DiskInfo, fetchDiskInfo} from "../../api/disks";

const DiskDetailModel = () => {
    const [name,setName] = useState<string>()
    const [info,setInfo] = useState<DiskInfo>()
    const loadInfo = async (name:string | undefined) => {
        if (!name) {
            return
        }
        const result = await fetchDiskInfo(name)
        setInfo(result)
    }
    return {
        name,setName,info,loadInfo
    }
}
const useDiskDetailModel = createModel(DiskDetailModel)
export default useDiskDetailModel
