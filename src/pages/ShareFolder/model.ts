import {getUserList} from "../../api/users";
import {useEffect, useState} from "react";
import {createModel} from "hox";
import {createNewShare, getShareList, ShareFolder} from "../../api/share";

const ShareFoldersModel = () => {
    const [folders, setFolders] = useState<ShareFolder[]>([])
    const initData = async () => {
        const response = await getShareList()
        setFolders(response.folders)
    }
    const createShare = async (data:any) => {
        await createNewShare(data)
        await initData()
    }
    useEffect(() => {
        initData()
    }, [])
    return {
        folders,createShare
    }
}
const useShareFoldersModel = createModel(ShareFoldersModel)
export default useShareFoldersModel
