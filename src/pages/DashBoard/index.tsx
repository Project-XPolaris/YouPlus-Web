import {ReactElement, useEffect} from "react";
import useStyles from "./style";
import {Grid} from "@material-ui/core";
import useDashboardModel from "./model";
import DiskIcon from "../../components/Icons/DiskIcon";
import {useInterval} from "ahooks";
import IconStatCard from "../../components/IconStatCard";
import {Apps, Archive, Dns, Folder, Person} from "@material-ui/icons";
import SystemInfoCard from "./part/SystemInfoCard";
import CpuMonitorCard from "./part/CpuMonitorCard";
import MemoryMonitorCard from "./part/MemoryMonitorCard";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface DashboardPagePropsType {

}

const DashboardPage = ({}: DashboardPagePropsType): ReactElement => {
    const classes = useStyles()
    const model = useDashboardModel()
    const pageHeadController = usePageHeadController({})
    useInterval(() => {
        model.initData()
        model.refreshMonitorData()
    },4000,{immediate:true})
    useEffect(() => {
        model.refreshSystemInfo()
    },[])
    return (
        <div className={classes.root}>
            <PageHead title={"Dashboard"} controller={pageHeadController} />
            <div className={classes.content}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"Disks"}
                            value={`${model.deviceInfo?.diskCount ?? 0} Disks`}
                            icon={<DiskIcon />}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"Storage"}
                            value={`${model.deviceInfo?.storageCount ?? 0} Storage`}
                            icon={<Archive />}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"Share Folder"}
                            value={`${model.deviceInfo?.shareFolderCount ?? 0} Share folders`}
                            icon={<Folder />}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"Users"}
                            value={`${model.deviceInfo?.userCount ?? 0} Users`}
                            icon={<Person />}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"ZFS pool"}
                            value={`${model.deviceInfo?.zfsCount ?? 0} Pool`}
                            icon={<Dns />}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                        <IconStatCard
                            label={"Apps"}
                            value={`${model.deviceInfo?.appCount ?? 0} apps`}
                            icon={<Apps />}
                        />
                    </Grid>
                    {
                        model.systemInfo &&
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                            <SystemInfoCard systemInfo={model.systemInfo} />
                        </Grid>
                    }
                    {
                        model.systemMonitor &&
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <CpuMonitorCard cpu={model.systemMonitor.monitor.cpu} />
                        </Grid>
                    }
                    {
                        model.systemMonitor &&
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MemoryMonitorCard memory={model.systemMonitor.monitor.memory} />
                        </Grid>
                    }
                </Grid>
            </div>

        </div>
    )
}

export default DashboardPage
