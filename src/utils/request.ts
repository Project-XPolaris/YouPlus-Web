import { extend } from 'umi-request'
import { ApplicationConfig } from '../config'

const apiRequest = extend({
  timeout: 2000,
  credentials: 'omit'
})
apiRequest.interceptors.request.use((url,options) => {
  const token = localStorage.getItem("token")
  const apiUrl = localStorage.getItem("apiUrl")
  console.log(url)
  console.log(apiUrl)
  if (apiUrl) {
    url  = apiUrl + url
  }
  console.log(url)
  // console.log(url)
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
