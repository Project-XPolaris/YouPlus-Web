export const getSwitchText = (value:boolean | undefined) => {
    if (value === undefined) {
        return "-"
    }
    if (value) {
        return "yes"
    }else{
        return "no"
    }
}
