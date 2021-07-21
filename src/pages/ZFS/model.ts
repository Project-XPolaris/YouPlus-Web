import {createModel} from "hox";
import {useEffect, useState} from "react";
import {createZFSPool, fetchZFSPools, removeZFSPool, ZFSPool} from "../../api/zfs";
import {showAPIResponseErrorMessage, showGlobalSnackMessage} from "../../utils/message";

const ZFSModel = () => {
    const [pools,setPools] = useState<ZFSPool[]>([])
    const refresh = async() => {
        const response = await fetchZFSPools()
        if (response) {
            setPools(response.pools)
        }
    }
    const removePool = async (name:string) => {
        const response = await removeZFSPool(name)
        if (response.success) {
            showGlobalSnackMessage("remove zfs pool success",{variant:"success"})
        }else{
            showAPIResponseErrorMessage(response)
        }
        await refresh()
    }
    const createPool = async (data:any) => {
        await createZFSPool(data)
        await refresh()
    }
    return {
        pools,removePool,createPool,refresh
    }
}
const useZFSModel = createModel(ZFSModel)
export default useZFSModel
