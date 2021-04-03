import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";
import {BaseResponse} from "./base";

export const changePassword = async (password:string):Promise<BaseResponse> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.accountPassword,{data:{password}})
}
