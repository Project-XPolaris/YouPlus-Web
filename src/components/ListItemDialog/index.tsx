import React, {ReactElement} from "react";
import {
    Avatar, Button, Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@material-ui/core";
import {Dns} from "@material-ui/icons";
import useStyles from "./style";

export interface ListItemDialogPropsType {
    open?: boolean
    primary: string
    secondary?: string
    icon: ReactElement,
    onClose: () => void
    title: string
    onOk: () => void
    okText?: string,
    text?:string
}

const ListItemDialog = ({
                            primary,
                            icon,
                            secondary,
                            onOk,
                            onClose,
                            title,
    text,
                            okText = "OK",
                            open = false
                        }: ListItemDialogPropsType) => {
    const classes = useStyles()
    return (
        <Dialog open={open} maxWidth={"xl"} onClose={onClose}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent className={classes.deleteDialogContent}>
                <DialogContentText>
                    {text}
                </DialogContentText>
                <ListItem className={classes.deleteDialogItem}>
                    <ListItemAvatar>
                        <Avatar>
                            {icon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary}/>
                </ListItem>
            </DialogContent>
            <DialogActions>
                <Button color={"secondary"} onClick={onClose}>
                    Cancel
                </Button>
                <Button color={"secondary"} onClick={onOk}>
                    {okText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ListItemDialog;
