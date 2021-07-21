import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export const shutdownDevice = async ():Promise<BaseResponse> => {
    return apiRequest.post(ApplicationConfig.apiPaths.shutdown)
}
export const rebootDevice = async ():Promise<BaseResponse> => {
    return apiRequest.post(ApplicationConfig.apiPaths.reboot)
}
