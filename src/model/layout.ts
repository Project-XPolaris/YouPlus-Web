import {createModel} from "hox";
import {useState} from "react";
import {useConfirmDialog} from "../hooks/ConfirmDialog";

export type DialogKey =
    "newUser"
    | "newShare"
    | "newZFSPool"
    | 'deleteStorageConfirm'
    | 'poolAsStorageDialog'
    | "changePassword"
    | "newgroup"
    | "group/addUser"
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
    const confirmDialogController = useConfirmDialog()
    return {
        switchDialog,
        getDialogSwitchHandler,
        getDialogOpen,
        showConfirmDialog: confirmDialogController.openDialog,
        confirmDialogController: confirmDialogController
    }
}
const useLayoutModel = createModel(LayoutModel)
export default useLayoutModel
