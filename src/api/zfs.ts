import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export interface ZFSTree {
    name: string;
    type: string;
    size: number;
    free: number;
    alloc: number;
    path: string;
    devices: ZFSTree[];
    l2Cache: ZFSTree[];
    spares: ZFSTree[];
}

export interface ZFSPool {
    name: string,
    tree: ZFSTree;
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

export type VDevType = "mirror" | "disk" | "raidz"

export interface Vdev {
    type: VDevType
    path?: string
    devices?: Array<Vdev>
    l2?: Array<Vdev>
    spares?: Array<Vdev>
}

export interface CreatePoolBody {
    name: string
    conf: Vdev
}

export const createZFSPool = async (body: CreatePoolBody): Promise<BaseResponse> => {
    return apiRequest.post(ApplicationConfig.apiPaths.zfsConf, {data: body})
}
