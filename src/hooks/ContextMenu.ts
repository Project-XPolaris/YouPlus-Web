import {useState} from "react";

export interface ContextMenuController<T> {
    isOpen: boolean
    data: T | undefined
    open: (data: T, anchor: any) => void
    close: () => void
    anchor?: any
}

interface ContextData<T> {
    anchor?: any
    data?: T
}

export const useContextMenu = <T>(initData?: T): ContextMenuController<T> => {
    const [context, setContext] = useState<ContextData<T>>({
        data: initData,
    })
    const open = (data: T, anchor: any) => {
        setContext({
            data, anchor
        })
    }
    const close = () => {
        setContext({
            ...context,
            anchor: undefined
        })
    }
    return {
        isOpen: Boolean(context.anchor),
        data: context.data,
        anchor: context.anchor,
        open,
        close
    }
}
