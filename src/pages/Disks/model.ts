import {createModel} from "hox";
import {useEffect, useState} from "react";
import {Disk, fetchDisks} from "../../api/disks";

const DisksModel = () => {
    const [disks,setDisks] = useState<Disk[]>([])
    const initData = async () => {
        const response = await fetchDisks()
        if (response) {
            setDisks(response.disks.sort((a, b) => a.name.localeCompare(b.name)))

        }
    }

    return {
        disks,initData
    }
}
const useDisksModel = createModel(DisksModel)
export default useDisksModel
