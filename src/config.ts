export const ApplicationConfig = {
  apiPaths: {
    apps: '/apps',
    runApp: '/app/run',
    stopApp: '/app/stop',
    autostart:'/autoStartApps',
    users:"/users",
    groups:"/groups",
    group:"/group/:name",
    groupUsers:"/group/:name/users",
    disks:"/disks",
    share:"/share",
    shareUpdate:"/share/update",
    zfs:"/zpool",
    storage: '/storage',
    login: '/admin/auth',
    accountPassword: '/account/password',
    systemInfo: '/system/info',
  }
}
