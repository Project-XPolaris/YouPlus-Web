import {ReactElement, useEffect} from "react";
import useStyles from "./style";
import InfoCard from "../../components/InfoCard";
import {Grid} from "@material-ui/core";
import useDashboardModel from "./model";
import ImageInfoCard from "../../components/ImageInfoCard";
import DiskIcon from "../../components/Icons/DiskIcon";
import useDisksModel from "../Disks/model";
import StorageIcon from "../../components/Icons/StorageIcon";
import ShareFolderIcon from "../../components/Icons/ShareFolderIcon";
import UserIcon from "../../components/Icons/UserIcon";
import {useInterval} from "ahooks";

export interface DashboardPagePropsType {

}

const DashboardPage = ({}: DashboardPagePropsType): ReactElement => {
    const classes = useStyles()
    const model = useDashboardModel()
    useInterval(() => {
        model.refreshSystemInfo()
    },4000)
    useEffect(() => {
        model.initData()
        model.refreshSystemInfo()
    },[])
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                    <ImageInfoCard icon={<DiskIcon width={64} height={64}/>} text={`${model.diskCount} Disks`}/>
                </Grid>
                <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                    <ImageInfoCard icon={<StorageIcon width={64} height={64}/>} text={`${model.storageCount} Storage`}/>
                </Grid>
                <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                    <ImageInfoCard icon={<ShareFolderIcon width={64} height={64}/>} text={`${model.shareFolderCount} Share folders`}/>
                </Grid>
                <Grid item xs={6} sm={3} md={4} lg={2} xl={2}>
                    <ImageInfoCard icon={<UserIcon width={64} height={64}/>} text={`${model.userCount} Users`}/>
                </Grid>
            </Grid>
            <div className={classes.sectionTitle}>
                Server info
            </div>
            {
                model.systemInfo &&
                <Grid container spacing={2}>
                    <Grid item>
                        <InfoCard label={"Hostname"} value={model.systemInfo.node.hostname} valueSize={20} />
                    </Grid>
                    <Grid item>
                        <InfoCard label={"OS"} value={model.systemInfo.os.name} valueSize={20} />
                    </Grid>
                    <Grid item>
                        <InfoCard label={"Board"} value={model.systemInfo.board.vendor} valueSize={20}/>
                    </Grid>
                    <Grid item>
                        <InfoCard label={"CPU"} value={model.systemInfo.cpu.model} valueSize={20}/>
                    </Grid>
                    <Grid item>
                        <InfoCard label={"Memory"} value={`${model.systemInfo.memory.size}MB`} valueSize={20}/>
                    </Grid>
                </Grid>
            }

        </div>
    )
}

export default DashboardPage
