import {createModel} from "hox";
import {useEffect, useState} from "react";
import {createZFSPool, fetchZFSPools, removeZFSPool, ZFSPool} from "../../api/zfs";

const ZFSModel = () => {
    const [pools,setPools] = useState<ZFSPool[]>([])
    const refresh = async() => {
        const response = await fetchZFSPools()
        setPools(response.pools)
    }
    useEffect(() => {
        refresh()
    },[])
    const removePool = async (name:string) => {
        await removeZFSPool(name)
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
