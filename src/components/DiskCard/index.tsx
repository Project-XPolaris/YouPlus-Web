import {Avatar, ButtonBase, Card, Paper} from "@material-ui/core";
import {ReactElement} from "react";
import useStyles from "./style";
import DiskIcon from "../Icons/DiskIcon";
import clsx from "clsx";
import {Disk} from "../../api/disks";

export interface DiskCardPropsType {
    className?:string
    disk:Disk
}

const DiskCard = ({className,disk}: DiskCardPropsType): ReactElement => {
    const classes = useStyles()
    return (

        <Paper className={clsx(className,)}>
            <ButtonBase className={classes.root}>
                <div className={classes.info}>
                    <div>
                        { disk.name }
                    </div>
                    <div className={classes.model}>
                        { disk.model }
                    </div>
                </div>
                <Avatar className={classes.avatar}>
                    <DiskIcon />
                </Avatar>
            </ButtonBase>

        </Paper>
    )
}

export default DiskCard
