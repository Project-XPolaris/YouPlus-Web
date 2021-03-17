import {createModel} from "hox";
import {useEffect, useState} from "react";
import {createUser, getUserList} from "../../api/users";

const UsersModel = () => {
    const [users, setUsers] = useState<string[]>([])
    const initData = async () => {
        const response = await getUserList()
        console.log(response)
        setUsers(response.users)
    }
    useEffect(() => {
        initData()
    }, [])
    const newUser = async (username:string,password:string) => {
        await createUser(username,password)
        await initData()
    }
    return {
        users,newUser,initData
    }

}
const useUsersModel = createModel(UsersModel)
export default useUsersModel
