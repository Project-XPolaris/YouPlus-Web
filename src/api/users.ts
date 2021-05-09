import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";
import {useClickAway} from "ahooks";

export type UserGroupType = "admin" | "normal"

export interface UserGroup {
    name: string
    type: UserGroupType
    gid: string
}

export interface UserListResponse {
    users: string[]
}

export type UserGroupDetail = UserGroup & {
    users: {
        name: string
        uid: string
    }[]
}
export const getUserList = async (): Promise<UserListResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.users)
}
export const createUser = async (username: string, password: string): Promise<BaseResponse> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.users, {
        data: {
            username, password
        }
    })
}

export const removeUser = async (username: string): Promise<BaseResponse> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.users, {
        params: {
            username
        }
    })
}
export const fetchGroupList = async (): Promise<{ groups: UserGroup[] }> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.groups)
}
export const createGroup = async (name: string): Promise<UserGroup> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.groups, {data: {name}})
}
export const fetchGroupDetail = async (name: string): Promise<UserGroupDetail> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.group.replace(":name", name))
}
export const removeGroup = async (name: string): Promise<UserGroupDetail> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.groups,{params:{name}})
}
export const addUserToUserGroup = async (name: string, users: string[]): Promise<BaseResponse> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.groupUsers.replace(":name", name), {data: {users}})
}

export const removeUserFromUserGroup = async (name: string, users: string[]): Promise<BaseResponse> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.groupUsers.replace(":name", name), {data: {users}})
}
