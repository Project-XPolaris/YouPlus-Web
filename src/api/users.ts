import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export interface UserListResponse {
    users : string[]
}
export const getUserList = async ():Promise<UserListResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.users)
}
export const createUser = async (username:string,password:string):Promise<void> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.users,{
        data:{
            username,password
        }
    })
}

export const removeUser = async (username:string):Promise<void> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.users,{
        params:{
            username
        }
    })
}
