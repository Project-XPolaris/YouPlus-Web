import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {ChangeEvent, ReactElement, useState} from "react";
import useStyles from "./style";
import styled from "@emotion/styled";

export interface InstallAppDialogPropsType {
    open?: boolean
    onClose: () => void
    onOk: (file: File) => void
}

const Input = styled('input')({
    display: 'none',
});
const InstallAppDialog = ({onOk,onClose, open = false}: InstallAppDialogPropsType): ReactElement => {
    const classes = useStyles()
    const [filename, setFileName] = useState<string | undefined>()
    const [file,setFile] = useState<File | undefined>()
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const file = e.target.files[0]
        setFileName(file.name)
        setFile(file)
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Install App
            </DialogTitle>
            <DialogContent className={classes.content}>
                <div>
                    {
                        filename && <Typography variant={"h6"}>{filename}</Typography>
                    }
                </div>

                <label htmlFor="contained-button-file">
                    <Input accept=".upk" id="contained-button-file" type="file" onChange={onInputChange}/>

                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        if (file) {
                            onOk(file)
                        }
                    }}
                >
                    Install
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default InstallAppDialog
