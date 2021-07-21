import {createModel} from "hox";
import {useEffect, useState} from "react";
import {fetchStorageList, Storage, removeStorage, createStorage} from "../../api/storage";

const StorageModel = () => {
    const [storages, setStorages] = useState<Storage[]>([])
    const init = async () => {
        const response = await fetchStorageList()
        if (response) {
            setStorages(response.storages)

        }
    }
    const remove = async (id: string) => {
        await removeStorage(id)
        await init()
    }
    const addStorage = async (source:string,type:string) => {
        await createStorage({source,type})
        await init()
    }

    return {
        storages, remove, addStorage,init
    }
}
const useStorageModel = createModel(StorageModel)
export default useStorageModel
