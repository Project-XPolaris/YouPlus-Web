export const getAppIconUrl = (appId:string) => {
    const baseUrl = localStorage.getItem("apiUrl")
    if (baseUrl === null) {
        return
    }
    return `${baseUrl}/app/icon?id=${appId}`
}