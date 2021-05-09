import useStyles from "./style";
import {IconButton, Paper, Popover, Typography} from "@material-ui/core";
import {Report, ViewDay} from "@material-ui/icons";
import {SyntheticEvent, useState} from "react";
import clsx from "clsx";
import InstallAppTaskCard from "../../../../components/InstallAppTaskCard";
import useTaskModel from "../../../../model/task";
import {useInterval} from "ahooks";
import task from "../../../../model/task";

export interface TaskPopupPropsType {
    className?:any
}

const TaskPopup = ({className}: TaskPopupPropsType) => {
    const classes = useStyles()
    const taskModel = useTaskModel()
    useInterval(() => {
       taskModel.refresh()
    },2000)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event:SyntheticEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <IconButton onClick={handleClick} className={clsx(className,classes.root)}>
                <ViewDay />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
               <Paper className={classes.content}>
                   {
                       taskModel.tasks.length > 0 && taskModel.tasks.map(it => {
                           return (
                               <InstallAppTaskCard className={classes.item} task={it}/>
                           )
                       })
                   }
                   {
                       taskModel.tasks.length === 0 &&
                           <div className={classes.empty}>
                               <Report className={classes.icon}/>
                               <Typography variant={"subtitle1"}>
                                   No task
                               </Typography>
                           </div>
                   }
               </Paper>
            </Popover>
        </>
    )
}

export default TaskPopup;
