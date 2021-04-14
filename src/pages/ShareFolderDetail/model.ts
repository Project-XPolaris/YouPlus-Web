import {createModel} from "hox";
import {useState} from "react";
import {getShareList, removeShare, ShareFolder, ShareUpdateOption, updateShare} from "../../api/share";

const ShareFolderDetailModel = () => {
    const [folder, setFolder] = useState<ShareFolder | undefined>(undefined)
    const initData = async (name:string) => {
        const response = await getShareList()
        setFolder(response.folders.find(it =>it.name === name))
    }
    const update = async (option:ShareUpdateOption) => {
        if (folder?.name) {
            await updateShare(folder.name,option)
            await initData(folder.name)
        }
    }
    const remove = async () => {
        if (folder) {
            await removeShare(folder.id)
        }
    }
    return {
        initData,folder,update,remove
    }
}
const useShareFolderDetailModel = createModel(ShareFolderDetailModel)
export default useShareFolderDetailModel
