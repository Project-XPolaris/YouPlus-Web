import {createModel} from "hox";
import {useState} from "react";
import {createUser, getUserList, removeUser} from "../../api/users";

const UsersModel = () => {
    const [users, setUsers] = useState<string[]>([])
    const initData = async () => {
        const response = await getUserList()
        console.log(response)
        setUsers(response.users)
    }

    const newUser = async (username:string,password:string) => {
        await createUser(username,password)
        await initData()
    }
    const remove = async (username:string) => {
        await removeUser(username)
        await initData()
    }
    return {
        users,newUser,initData,remove
    }

}
const useUsersModel = createModel(UsersModel)
export default useUsersModel
