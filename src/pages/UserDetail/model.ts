import {createModel} from 'hox'
import {useEffect, useState} from "react";
import {fetchUserShareFolder, UserShareFolder} from "../../api/users";

const UserDetailModel = () => {
    const [username,setUsername] = useState<string>()
    const [userShareFolder,setUserShareFolder] = useState<UserShareFolder[]>([])
    const refreshShareFolders = async (username:string) => {
        if (!username) {
            return;
        }
        const response = await fetchUserShareFolder(username)
        setUserShareFolder(response.folders)
    }

    return {
        username,setUsername,userShareFolder,refreshShareFolders
    }
}
const useUserDetailModel = createModel(UserDetailModel)
export default useUserDetailModel
