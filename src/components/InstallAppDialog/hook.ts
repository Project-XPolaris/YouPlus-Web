import {useState} from "react";

export interface InstallArg {
    key: string
    value: string | number
}

export interface AppInstallForm {
    updateArg: (key: string, value: number | string) => void
    getArgValue: (key: string) => number | string | undefined
    clear: () => void
    args:InstallArg[]
}

export const useInstallAppForm = () : AppInstallForm => {
    const [args, setArgs] = useState<InstallArg[]>([])
    const updateArg = (key: string, value: number | string) => {
        for (let idx = 0; idx < args.length; idx++) {
            if (args[idx].key === key) {
                args[idx].value = value
                return
            }
        }
        setArgs([...args,{
            key, value
        }])
    }
    const clear = () => {
        setArgs([])
    }
    const getArgValue = (key: string): number | string | undefined => {
        return args.find(it => it.key === key)?.value
    }
    return {
        updateArg,getArgValue,clear,args
    }
}