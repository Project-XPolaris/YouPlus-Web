import {ReactElement} from "react";
import {Dialog, DialogTitle, List, ListItem, ListItemText} from "@material-ui/core";
import useStyles from "./style";

export interface SwitchSelectDialogPropsType {
    open?:boolean
    onOk:(value:boolean) => void
    onClose:() => void
}

const SwitchSelectDialog = ({onClose,onOk,open=false}: SwitchSelectDialogPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
               Select
            </DialogTitle>
            <List>
                <ListItem button onClick={() => onOk(true)} className={classes.item} >
                    <ListItemText primary={"Yes"} />
                </ListItem>
                <ListItem button onClick={() => onOk(false)} className={classes.item} >
                    <ListItemText primary={"No"} />
                </ListItem>
            </List>
        </Dialog>
    )
}

export default SwitchSelectDialog
