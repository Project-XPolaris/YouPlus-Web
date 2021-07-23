export const ApplicationConfig = {
  apiPaths: {
    apps: '/apps',
    uninstallApp: '/apps/uninstall',
    uploadApp: '/apps/upload',
    installApp: '/apps/install',
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
    tasks: '/tasks',
    shutdown:"/os/shutdown",
    reboot:"/os/reboot",
    userShare:"/user/share"
  }
}
