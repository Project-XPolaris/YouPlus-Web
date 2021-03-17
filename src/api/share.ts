import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {UserListResponse} from "./users";
export interface  ShareFolder {
    part_name:string
    part:string
}
export interface FetchShareFoldersResponse {
    folders:ShareFolder[]
}
export const getShareList = async ():Promise<FetchShareFoldersResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.share)
}

export const createNewShare = async (data:any):Promise<void> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.share,{
        data
    })
}
