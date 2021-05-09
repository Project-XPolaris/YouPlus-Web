import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {UserListResponse} from "./users";
import {BaseResponse} from "./base";
export interface  ShareFolder {
    id:number
    name:string
    storage:{
        id:string
    },
    validateUsers:{
        uid:string
        name:string
    }[],
    writeableUsers:{
        uid:string
        name:string
    }[],
    public:string,
    readonly:string
    writable:string
}
export interface FetchShareFoldersResponse {
    folders:ShareFolder[]
}
export const getShareList = async ():Promise<FetchShareFoldersResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.share)
}

export const createNewShare = async (data:any):Promise<BaseResponse> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.share,{
        data
    })
}

export const removeShare = async (id : number):Promise<BaseResponse> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.share,{
        params:{
            id
        }
    })
}
export interface ShareUpdateOption {
    validUsers?:string[]
    writeList?:string[]
    public?:string
    readonly?:string
    writable?:string
}
export const updateShare = async (name:string,option:ShareUpdateOption):Promise<void> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.shareUpdate,{
        data:{
            name,
            ...option
        }
    })
}
