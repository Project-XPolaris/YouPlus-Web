import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export interface PathItem {
    name:string
    type:string
    path:string
}
export const fetchDirContent = async (target:string):Promise<PathItem[]> => {
    // @ts-ignore
    return apiRequest.get(ApplicationConfig.apiPaths.readDir,{
        params: {target}
    })
}