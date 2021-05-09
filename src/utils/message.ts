import {OptionsObject, SnackbarMessage} from "notistack";
import {ResponseError} from "umi-request";

export const showGlobalSnackMessage = (message: SnackbarMessage, options?: OptionsObject) => {
    document.dispatchEvent(new CustomEvent<{ message: SnackbarMessage, options?: OptionsObject }>("globalMessage", {
        detail: {
            message,
            options
        }
    }))
}
export const showAPIResponseErrorMessage = (err:any) => {
    console.log(err)
    document.dispatchEvent(new CustomEvent<{ message: SnackbarMessage, options?: OptionsObject }>("globalMessage", {
        detail: {
            message:`${err.data.reason} [${err.status}]`,
            options: {variant: "error"}
        }
    }))
}
