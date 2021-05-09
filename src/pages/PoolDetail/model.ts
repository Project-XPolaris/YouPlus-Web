import {createModel} from "hox";
import {fetchZFSPools, ZFSPool} from "../../api/zfs";
import {useState} from "react";

const PoolDetailModel = () => {
    const [pool,setPool] = useState<ZFSPool | undefined>()
    const refresh = async (name:string) => {
        const response = await fetchZFSPools()
        const pool = response.pools.find(it => it.name === name)
        if (pool) {
            setPool(pool)
        }
    }
    return {
        refresh,pool
    }
}
const usePoolDetailModel = createModel(PoolDetailModel)
export default usePoolDetailModel
