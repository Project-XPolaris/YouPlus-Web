import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export type AppStatus = "Stop" | "Running"
export type App = {
    id: string
    name: string
    pid: number
    type:string,
    status: AppStatus
    auto_start: boolean
}
export type FetchAppsResponse = {
    apps: App[]
}

export interface AppPackArg {
    name: string
    desc: string
    key: string
    type: string
    source:string
    require: boolean
}

export interface AppPackInfo {
    appName: string;
    id: number;
    name: string;
    type: string;
    args: AppPackArg[]
}

export const fetchApps = async (): Promise<FetchAppsResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.apps, {})
}
export const startApp = async (appId: string) => {
    return await apiRequest.post(
        ApplicationConfig.apiPaths.runApp,
        {
            params: {
                id: appId
            }
        })
}
export const stopApp = async (appId: string) => {
    return await apiRequest.post(ApplicationConfig.apiPaths.stopApp, {params: {id: appId}})
}

export const setAutoStart = (id: string) => {
    return apiRequest.post(ApplicationConfig.apiPaths.autostart, {data: {id}})
}
export const removeAutoStart = (id: string) => {
    return apiRequest.delete(ApplicationConfig.apiPaths.autostart, {data: {id}})
}

export const unInstallAPP = (id: string) => {
    return apiRequest.post(ApplicationConfig.apiPaths.uninstallApp, {params: {id: id}})
}
export const installApp = (
    id: number,
    {
       args
    }:{
        args?: { key: string, value: string, source: string }[]
    }) => {
    return apiRequest.post(ApplicationConfig.apiPaths.installApp, {
        params: {id},
        data:{
            args
        }
    })
}

export const uploadAppPack = (file: File): Promise<BaseResponse & AppPackInfo> => {
    const form = new FormData()
    form.append("file", file)
    return apiRequest.post(ApplicationConfig.apiPaths.uploadApp, {
        data: form
    })
}
