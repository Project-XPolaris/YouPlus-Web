import useStyles from "./style";
import {Divider, Grid, Paper, Typography} from "@material-ui/core";
import clsx from "clsx";
import {RingProgress} from "@ant-design/charts";
import React from "react";
import {Memory, MemoryStat} from "../../../../api/system";
import filesize from "filesize";

export interface MemoryMonitorCardPropsType {
    className?:string
    memory:MemoryStat
}

const MemoryMonitorCard = ({ className,memory }: MemoryMonitorCardPropsType) => {
    const classes = useStyles()
    var config = {
        height: 160,
        width: 160,
        autoFit: false,
        percent: (memory.used) / memory.total,
        color: ['#00701a', '#E8EDF3'],
    };
    return (
        <Paper className={clsx(classes.root,className)}>
            <div className={classes.header}>
                <Typography variant={"subtitle1"}>
                    Memory
                </Typography>
            </div>
            <Divider />
            <Grid container className={classes.content}>
                <Grid item className={classes.chart} xs={12} sm={12} md={12} lg={6} xl={6}>
                    <RingProgress {...config} />
                </Grid>
                <Grid item className={classes.info} xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            Total
                        </div>
                        <div className={classes.value}>
                            { filesize(memory.total) }
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            Free
                        </div>
                        <div className={classes.value}>
                            { filesize(memory.free) }
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            Used
                        </div>
                        <div className={classes.value}>
                            { filesize(memory.used) }
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            System
                        </div>
                        <div className={classes.value}>
                            { filesize(memory.cache) }
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default MemoryMonitorCard;
