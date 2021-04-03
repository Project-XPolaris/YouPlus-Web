import {createModel} from "hox";
import {fetchDisks, fetchParts, Part} from "../../api/disks";
import {useEffect, useState} from "react";
const targetFS = ["ext4","ntfs"]
const PartsPageModel = () => {
    const [parts, setParts] = useState<Part[]>([])
    const initData = async () => {
        let result: Part[] = await fetchParts()
        if (!result) {
            return
        }
        result = result.filter(part => {
            return targetFS.find(it => it === part.fs_type) !== undefined
        })
        setParts(result)
    }
    return {
        parts,initData
    }
}
const usePartsPageModel = createModel(PartsPageModel)
export default usePartsPageModel
