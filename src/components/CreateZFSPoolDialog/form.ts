import {useState} from "react";
import {Disk} from "../../api/disks";
import {Vdev} from "../../api/zfs";

export interface CreateZPoolForm {
    name: string | undefined
    setName: (name: string) => void
    advanceMode:boolean
    setAdvanceMode:(value:boolean) => void
    pickupDisk:Array<Disk>,
    setPickupDisk:(disks:Array<Disk>) => void
    vdevTree?:Vdev
    setVDevTree:(vdev:Vdev) => void

}

export const useCreateZPoolForm = (): CreateZPoolForm => {
    const [name, setName] = useState<string>()
    const [advanceMode,setAdvanceMode] = useState<boolean>(false)
    const [pickupDisk,setPickupDisk] = useState<Array<Disk>>([])
    const [vdevTree, setVDevTree] = useState<Vdev>()
    return {
        name, setName,advanceMode,setAdvanceMode,pickupDisk,setPickupDisk,vdevTree,setVDevTree
    }
}
