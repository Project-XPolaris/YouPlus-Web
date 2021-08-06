import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {UserGroup, UserListResponse} from "./users";
import {BaseResponse} from "./base";

export interface ShareFolderUser {
    uid: string
    name: string
}

export interface ShareFolder {
    id: number
    name: string
    storage: {
        id: string
    },
    validUsers: ShareFolderUser[],
    invalidUsers: ShareFolderUser[],
    readUsers: ShareFolderUser[],
    writeUsers: ShareFolderUser[],
    validGroups: UserGroup[]
    invalidGroups: UserGroup[]
    readGroups: UserGroup[]
    writeGroups: UserGroup[]
    public: boolean,
    readonly: boolean
    enable: boolean
}

export interface FetchShareFoldersResponse {
    folders: ShareFolder[]
}

export const getShareList = async (): Promise<FetchShareFoldersResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.share)
}

export const createNewShare = async (data: any): Promise<BaseResponse> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.share, {
        data
    })
}

export const removeShare = async (id: number): Promise<BaseResponse> => {
    return await apiRequest.delete(ApplicationConfig.apiPaths.share, {
        params: {
            id
        }
    })
}

export interface ShareUpdateOption {
    readUsers?: string[]
    writeUsers?: string[]
    validUsers?: string[]
    invalidUsers?: string[]
    readGroups?: string[]
    writeGroups?: string[]
    validGroups?: string[]
    invalidGroups?: string[]
    public?: boolean
    readonly?: boolean
    enable?: boolean
}

export const updateShare = async (name: string, option: ShareUpdateOption): Promise<void> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.shareUpdate, {
        data: {
            name,
            ...option
        }
    })
}
