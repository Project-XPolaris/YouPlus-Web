import React from 'react'
import useStyles from "./style";
import {Divider, Grid, Paper, Typography} from "@material-ui/core";
import clsx from "clsx";
import {Pie, RingProgress} from '@ant-design/charts';
import {CpuStat} from "../../../../api/system";

export interface CpuMonitorCardPropsType {
    className?: string
    cpu: CpuStat
}

const CpuMonitorCard = ({className, cpu}: CpuMonitorCardPropsType) => {
    const classes = useStyles()
    const getUsage = () => {
        if (cpu.total == 0) {
            return 0
        }
        return (cpu.user + cpu.system + cpu.iowait) / cpu.total
    }
    var config = {
        height: 160,
        width: 160,
        autoFit: false,
        percent: getUsage(),
        color: ['#00701a', '#E8EDF3'],
    };
    return (
        <Paper className={clsx(classes.root, className)}>
            <div className={classes.header}>
                <Typography variant={"subtitle1"}>
                    CPU
                </Typography>
            </div>
            <Divider/>
            <Grid container className={classes.content}>
                <Grid item className={classes.chart} xs={12} sm={12} md={12} lg={4} xl={4}>
                    <RingProgress {...config} />
                </Grid>
                <Grid item className={classes.chart} xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Pie
                        innerRadius={0.8}
                        width={160}
                        height={160}
                        angleField={'value'}
                        colorField={'label'}
                        data={[
                            {
                                label: "system",
                                value: cpu.system
                            },
                            {
                                label: "user",
                                value: cpu.user
                            },
                            {
                                label: "iowait",
                                value: cpu.iowait
                            }
                        ]}
                    />
                </Grid>
                <Grid className={classes.info} xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            Idle
                        </div>
                        <div className={classes.value}>
                            {cpu.idle}
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            Total
                        </div>
                        <div className={classes.value}>
                            {cpu.total}
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            User
                        </div>
                        <div className={classes.value}>
                            {cpu.user}
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.label}>
                            System
                        </div>
                        <div className={classes.value}>
                            {cpu.system}
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default CpuMonitorCard;
