import {BaseResponse} from "./base";
import apiRequest from "../utils/request";
import {ApplicationConfig} from "../config";

export const fetchAuthToken = async (username: string, password: string): Promise<BaseResponse & { token: string }> => {
    return await apiRequest.post(ApplicationConfig.apiPaths.login, {data: {username, password}})
}