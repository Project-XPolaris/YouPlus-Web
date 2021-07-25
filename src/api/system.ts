import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export interface Sysinfo {
    version: string;
    timestamp: string;
}

export interface Node {
    hostname: string;
    machineid: string;
    timezone: string;
}

export interface Os {
    name: string;
    vendor: string;
    version: string;
    release: string;
    architecture: string;
}

export interface Kernel {
    release: string;
    version: string;
    architecture: string;
}

export interface Product {
    name: string;
    vendor: string;
    version: string;
    serial: string;
}

export interface Board {
    name: string;
    vendor: string;
    version: string;
    serial: string;
    assettag: string;
}

export interface Chassis {
    type: number;
    vendor: string;
    version: string;
    serial: string;
    assettag: string;
}

export interface Bios {
    vendor: string;
    version: string;
    date: string;
}

export interface Cpu {
    vendor: string;
    model: string;
    speed: number;
    cache: number;
    cpus: number;
    cores: number;
    threads: number;
}

export interface Memory {
    type: string;
    speed: number;
    size: number;
}

export interface Storage {
    name: string;
    model: string;
    serial: string;
    size: number;
    driver: string;
    vendor: string;
}

export interface Network {
    name: string;
    driver: string;
    macaddress: string;
    port: string;
    speed: number;
}

export interface SystemInfo {
    sysinfo: Sysinfo;
    node: Node;
    os: Os;
    kernel: Kernel;
    product: Product;
    board: Board;
    chassis: Chassis;
    bios: Bios;
    cpu: Cpu;
    memory: Memory;
    storage: Storage[];
    network: Network[];
}

export const fetchSystemInfo = async () : Promise<SystemInfo> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.systemInfo)
}

export interface CpuStat {
    idle: number;
    total: number;
    user: number;
    system: number;
    iowait: number;
}

export interface MemoryStat {
    total: number;
    free: number;
    used: number;
    cache: number;
}

export interface SystemMonitor {
    monitor:{
        cpu: CpuStat;
        memory: MemoryStat;
    }
}

export const fetchSystemMonitor = async ():Promise<BaseResponse & SystemMonitor> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.systemMonitor)
}

export interface DeviceInfo {
    appCount: number;
    diskCount: number;
    shareFolderCount: number;
    storageCount: number;
    userCount: number;
    zfsCount: number;

}
export const fetchDeviceInfo = async ():Promise<BaseResponse & DeviceInfo> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.deviceInfo)
}
