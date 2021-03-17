import {BaseResponse} from "./base";
import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export interface Storage {
    id: string
    type: string
}

export const createStorage = (data: { source: string, type: string }): Promise<BaseResponse> => {
    return apiRequest.post(ApplicationConfig.apiPaths.storage, {
        data
    })
}

export const fetchStorageList = async (): Promise<{ storages: Storage[] }> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.storage)
}

export const removeStorage = async (id: string): Promise<BaseResponse> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.storage, {params: {id}})
}
