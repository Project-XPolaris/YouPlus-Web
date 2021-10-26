import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export interface Log {
    application: string
    instance: string
    scope: string
    message: string
    time: string
    extra: any
    level: number
}
export interface LogList {
    count:number
    page:number
    pageSize:number
    result:Log[]
}
export  interface LogApplication {
    name:string
}
export interface LogApplicationList {
    count:number
    page:number
    pageSize:number
    result:Log[]
}

export const fetchLogs = async ({page = 1,pageSize = 20,order = '-time',level}:{page?:number,pageSize?:number,order?:string,level?:string[]}):Promise<LogList> => {
    return apiRequest.get(ApplicationConfig.apiPaths.log,{
        params:{
            pageSize,
            page,
            order,
            level
        }
    })
}
export const fetchApplications = async ({page = 1,pageSize = 20,search}:{page?:number,pageSize?:number,search?:string}):Promise<LogList> => {
    return apiRequest.get(ApplicationConfig.apiPaths.log,{
        params:{
            pageSize,
            page,
            search
        }
    })
}
