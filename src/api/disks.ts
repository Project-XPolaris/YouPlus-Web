import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export interface DiskAttr {
    id: number;
    name: string;
    worst: number;
    threshold: number;
    value: number;
}

export interface DiskInfo {
    modelFamily: string;
    modelName: string;
    serialNumber: string;
    status: boolean;
    attrs: DiskAttr[];
}
export interface FetchDisksResponse {
    disks: Disk[]
}

export interface Part {
    name: string
    fs_type: string
}

export interface Disk {
    name: string
    model: string
    size: number
    parts?: Part[]
}

export const fetchDisks = async (): Promise<FetchDisksResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.disks)
}
export const fetchParts = async (): Promise<Part[]> => {
    const response = await fetchDisks()
    let result: Part[] = []
    if (!response.disks) {
        return []
    }
    response.disks.forEach(disk => {
        if (disk.parts) {
            disk.parts.forEach(part => {
                result.push(part)
            })
        }
    })
    return result
}
export const fetchDiskInfo = async (name:string):Promise<DiskInfo> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.diskInfo,{
        params:{
            name
        }
    })
}
