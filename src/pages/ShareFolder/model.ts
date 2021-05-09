import {getUserList} from "../../api/users";
import {useEffect, useState} from "react";
import {createModel} from "hox";
import {createNewShare, getShareList, ShareFolder} from "../../api/share";
import {showAPIResponseErrorMessage, showGlobalSnackMessage} from "../../utils/message";

const ShareFoldersModel = () => {
    const [folders, setFolders] = useState<ShareFolder[]>([])
    const initData = async () => {
        const response = await getShareList()
        setFolders(response.folders)
    }
    const createShare = async (data: any) => {
        const response:any = await createNewShare(data)
        if (response.success) {
            showGlobalSnackMessage("create share folder success",{variant:"success"})
        }else{
            showAPIResponseErrorMessage(response)
        }
        await initData()
    }

    return {
        folders, createShare, initData
    }
}
const useShareFoldersModel = createModel(ShareFoldersModel)
export default useShareFoldersModel
