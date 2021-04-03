import {createModel} from "hox";
import {useEffect, useState} from "react";
import {Disk, fetchDisks} from "../../api/disks";

const DisksModel = () => {
    const [disks,setDisks] = useState<Disk[]>([])
    const initData = async () => {
        const response = await fetchDisks()
        setDisks(response.disks)
    }

    return {
        disks,initData
    }
}
const useDisksModel = createModel(DisksModel)
export default useDisksModel
