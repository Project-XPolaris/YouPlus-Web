import {createModel} from "hox";
import {useState} from "react";
import {createUser, getUserList, removeUser} from "../../api/users";
import {showAPIResponseErrorMessage, showGlobalSnackMessage} from "../../utils/message";

const UsersModel = () => {
    const [users, setUsers] = useState<string[]>([])
    const initData = async () => {
        const response = await getUserList()
        console.log(response)
        setUsers(response.users)
    }

    const newUser = async (username:string,password:string) => {
        const response = await createUser(username,password)
        if (response.success) {
            showGlobalSnackMessage("add user success",{variant:"success"})
        }else{
            showAPIResponseErrorMessage(response)
        }
        await initData()
    }
    const remove = async (username:string) => {
        const response = await removeUser(username)
        if (response.success) {
            showGlobalSnackMessage("remove user success",{variant:"success"})
        }else{
            showAPIResponseErrorMessage(response)
        }
        await initData()
    }
    return {
        users,newUser,initData,remove
    }

}
const useUsersModel = createModel(UsersModel)
export default useUsersModel
