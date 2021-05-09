import {extend, ResponseError} from 'umi-request'
import { ApplicationConfig } from '../config'
const errorHandler = (error:ResponseError) => {
  console.log(error)
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    return { status:error.response.status,data:error.data }
  } else {
    console.log(error.message);
  }
  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
};
const apiRequest = extend({
  timeout: 2000,
  credentials: 'omit',
  errorHandler
})
apiRequest.interceptors.request.use((url,options) => {
  const token = localStorage.getItem("token")
  const apiUrl = localStorage.getItem("apiUrl")
  if (apiUrl) {
    url  = apiUrl + url
  }
  if (token) {
    options.headers = {
      ...options.headers,
      "Authorization" :`Bearer ${token}`
    }
  }
  return {
    url,options
  }
})
export default apiRequest
