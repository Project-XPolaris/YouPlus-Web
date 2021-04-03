import {createModel} from "hox";
import {useState} from "react";

export type DialogKey = "newUser" | "newShare" | "newZFSPool" | 'deleteStorageConfirm' | 'poolAsStorageDialog' | "changePassword"
const LayoutModel = () => {
    const [dialogs, setDialogs] = useState<{ [key: string]: boolean }>({})

    const getDialogOpen = (dialogKey: DialogKey) => {
        return Boolean(dialogs[dialogKey])
    }
    const switchDialog = (dialogKey: DialogKey) => {
        setDialogs({
            ...dialogs,
            [dialogKey]: !getDialogOpen(dialogKey)
        })
    }
    const getDialogSwitchHandler = (dialogKey: DialogKey) => {
        return () => switchDialog(dialogKey)
    }
    return {
        switchDialog, getDialogSwitchHandler,getDialogOpen
    }
}
const useLayoutModel = createModel(LayoutModel)
export default useLayoutModel
