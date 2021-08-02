import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {DiskInfo} from "./disks";
import {BaseResponse} from "./base";

export interface IPv4 {
    dhcp: boolean;
    address?: any;
}

export interface IPv6 {
    dhcp: boolean;
    address?: any;
}

export interface Configuration {
    autonegotiation: string;
    broadcast: string;
    driver: string;
    driverversion: string;
    duplex: string;
    firmware: string;
    ip: string;
    latency: string;
    link: string;
    multicast: string;
    port: string;
    speed: string;
}

export interface Capabilities {
    pm: string;
    msi: string;
    pciexpress: string;
    msix: string;
    bus_master: string;
    cap_list: string;
    ethernet: boolean;
    physical: string;
    tp: string;
    mii: string;
    autonegotiation: string;
}

export interface HardwareInfo {
    id: string;
    class: string;
    claimed: boolean;
    handle: string;
    description: string;
    product: string;
    vendor: string;
    physid: string;
    businfo: string;
    logicalname: string;
    version: string;
    serial: string;
    units: string;
    size: number;
    capacity: number;
    width: number;
    clock: number;
    configuration: Configuration;
    capabilities: Capabilities;
}

export interface Network {
    name: string;
    IPv4Address: string[];
    IPv6Address: string[];
    IPv4: IPv4;
    IPv6: IPv6;
    hardwareInfo: HardwareInfo;
}
export const fetchNetworkStatus = async ():Promise<{ networks:Network[] } & BaseResponse> => {
    return await apiRequest.get(ApplicationConfig.apiPaths.networkStatus,{

    })
}
