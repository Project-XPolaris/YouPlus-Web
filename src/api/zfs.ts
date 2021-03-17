import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export interface ZFSPool {
    name: string,
    allocated: number,
    size: number,
    free: number
}

export interface FetchZFSPoolResponse {
    pools: ZFSPool[]
}

export const fetchZFSPools = async (): Promise<FetchZFSPoolResponse> => {
    return apiRequest.get(ApplicationConfig.apiPaths.zfs)
}
export const removeZFSPool = async (name: string): Promise<BaseResponse> => {

    return apiRequest.delete(ApplicationConfig.apiPaths.zfs, {params: {name}})
}

export const createZFSPool = async (data:string):Promise<BaseResponse> => {
    return apiRequest.post(ApplicationConfig.apiPaths.zfs, {data})
}
