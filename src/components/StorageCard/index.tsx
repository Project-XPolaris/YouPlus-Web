import useStyles from "./style";
import {ReactElement} from "react";
import {Paper} from "@material-ui/core";
import {Archive} from "@material-ui/icons";
import clsx from "clsx";

export interface StorageCardPropsType {
    className?:any
}

const StorageCard = ({className}: StorageCardPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Paper className={clsx(classes.root,className)}>
            <div className={classes.label}>
                Storage
            </div>
            <Archive />
            <div className={classes.name}>
                Storage name
            </div>
        </Paper>
    )
}

export default StorageCard
