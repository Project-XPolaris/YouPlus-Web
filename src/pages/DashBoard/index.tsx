import {ReactElement} from "react";
import useStyles from "./style";
import InfoCard from "../../components/InfoCard";
import {Grid} from "@material-ui/core";
import useDashboardModel from "./model";

export interface DashboardPagePropsType {

}

const DashboardPage = ({}: DashboardPagePropsType): ReactElement => {
    const classes = useStyles()
    const model = useDashboardModel()
    return (
        <div className={classes.root}>
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
