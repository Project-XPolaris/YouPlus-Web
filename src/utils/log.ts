export const getLogLevelText = (level:number):string => {
    switch (level){
        case 1:
            return 'debug'
        case 2:
            return 'info'
        case 3:
            return 'waring'
        case 4:
            return 'error'
        case 5:
            return 'fatal'
        default:
            return String(level)
    }
}
