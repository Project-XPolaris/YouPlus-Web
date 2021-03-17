import {createModel} from "hox";
import {fetchAuthToken} from "../api/auth";
import {ResponseError} from 'umi-request'
import {useLocalStorageState} from "ahooks";

const UserModel = () => {
    const [username, setUsername] = useLocalStorageState<string>('user', 'Null');
    const login = async (username: string, password: string) => {
        try {
            const response = await fetchAuthToken(username, password)
            if (response.success) {
                localStorage.setItem("token", response.token)
                setUsername(username)
                return {success: true}
            }
            return {success: false, message: response.reason}
        }catch (e) {
            const responseError : ResponseError = e
            return {success: false, message: responseError.data.reason}
        }
    }
    const logout = () => {
        localStorage.removeItem("token")
        setUsername("Null")
    }
    return {
        login,username,logout
    }
}
const useUserModel = createModel(UserModel)
export default useUserModel