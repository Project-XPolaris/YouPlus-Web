import {ReactElement} from "react";
import useStyles from "./style";
import {IconButton, Paper} from "@material-ui/core";
import clsx from "clsx";
import {Edit} from "@material-ui/icons";

export interface InfoCardPropsType {
    label:string
    value:any
    bottom?:any
    className?:any
    valueSize?:number,
    onEdit?:() => void
}

const InfoCard = ({onEdit,label,value,bottom,className,valueSize}: InfoCardPropsType): ReactElement => {
    const classes = useStyles();
    return (
        <Paper className={clsx(classes.root,className)}>
            <div className={classes.label}>
                {label}
            </div>
            <div className={classes.value} style={{fontSize:valueSize}}>
                {value} { onEdit &&  <IconButton size={"small"} onClick={onEdit}><Edit /></IconButton>}
            </div>
            <div className={classes.bottom}>
                {bottom}
            </div>
        </Paper>
    )
}

export default InfoCard
