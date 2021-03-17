import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export type AppStatus = "Stop" | "Running"
export type App = {
    id: string
    name: string
    pid: number
    status: AppStatus
    auto_start: boolean
}
export type FetchAppsResponse = {
    apps: App[]
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
export const removeAutoStart = (id:string) => {
    return apiRequest.delete(ApplicationConfig.apiPaths.autostart, {data: {id}})
}
