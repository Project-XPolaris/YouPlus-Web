import {useEffect, useState} from "react";

export interface ConfirmDialogController {
    message?: string
    open: boolean
    openDialog: (option: ConfirmOption) => void
    onClose: () => void
    onOk?: () => void
    title: string
}

export interface ConfirmOption {
    message: string
    onOk?: () => void
    title?: string
}

export const useConfirmDialog = (): ConfirmDialogController => {
    const [open, setOpen] = useState<boolean>(false)
    const [option, setOption] = useState<ConfirmOption | undefined>()
    const openDialog = (option: ConfirmOption) => {
        setOption(option)
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return {
        message: option?.message,
        open: open,
        openDialog,
        onClose,
        onOk: option?.onOk,
        title: option?.title ?? "Confirm"
    }
}
