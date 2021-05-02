import {ReactElement} from "react";
import {Paper} from "@material-ui/core";
import useStyles from "./style";
import DiskIcon from "../Icons/DiskIcon";

export interface ImageInfoCardPropsType {
    icon?:any
    text:string
}

const ImageInfoCard = ({icon,text}: ImageInfoCardPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            {icon}
            <div className={classes.text}>
                {text}
            </div>
        </Paper>
    )
}

export default ImageInfoCard
