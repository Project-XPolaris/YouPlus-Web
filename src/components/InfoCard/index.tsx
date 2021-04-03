import {ReactElement} from "react";
import useStyles from "./style";
import {Paper} from "@material-ui/core";
import clsx from "clsx";

export interface InfoCardPropsType {
    label:string
    value:any
    bottom?:any
    className?:any
}

const InfoCard = ({label,value,bottom,className}: InfoCardPropsType): ReactElement => {
    const classes = useStyles();
    return (
        <Paper className={clsx(classes.root,className)}>
            <div className={classes.label}>
                {label}
            </div>
            <div className={classes.value}>
                {value}
            </div>
            <div className={classes.bottom}>
                {bottom}
            </div>
        </Paper>
    )
}

export default InfoCard
