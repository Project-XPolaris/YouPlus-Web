import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export type TaskType = "InstallApp" | "Uninstall APP"

export interface BaseTask<T> {
    id: string;
    status: string;
    errorMessage: string;
    type: TaskType;
    extra: T
    created:string
    updated:string
}

export interface InstallAppTaskExtra {
    output: string
    appName: string
}

export interface UninstallAppExtra {
    output: string
    appName: string
}

export type Task = BaseTask<InstallAppTaskExtra | UninstallAppExtra>
export const fetchTaskList = async (): Promise<{ tasks: Task[] }> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.tasks)
}
