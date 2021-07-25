import useStyles from "./style";
import {Avatar, ButtonBase, Paper} from "@material-ui/core";
import DiskIcon from "../Icons/DiskIcon";
import clsx from "clsx";
import {ReactElement} from "react";

export interface IconStatCardPropsType {
    className?:string
    label:string
    value:string
    icon:ReactElement
}

const IconStatCard = ({className,label,value,icon}: IconStatCardPropsType) => {
    const classes = useStyles()
    return (

        <Paper className={clsx(className)}>
            <ButtonBase className={classes.root}>
                <div className={classes.info}>
                    <div className={classes.label}>
                        {label}
                    </div>
                    <div className={classes.value}>
                        {value}
                    </div>
                </div>
                <div>
                    <Avatar className={classes.avatar}>
                        { icon }
                    </Avatar>
                </div>
            </ButtonBase>

        </Paper>
    )
}

export default IconStatCard;
