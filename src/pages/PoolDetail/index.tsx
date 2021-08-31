import useStyles from "./style";
import {Grid, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import usePoolDetailModel from "./model";
import {useParams} from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import filesize from "filesize";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface PoolDetailPagePropsType {

}

const PoolDetailPage = ({}: PoolDetailPagePropsType) => {
    const {name}: any = useParams();
    const classes = useStyles()
    const model = usePoolDetailModel()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        model.refresh(name)
    },[])
    return (
        <div className={classes.root}>
            <PageHead title={model.pool?.name ?? "Pool"} controller={pageHeadController} />
            <div className={classes.content}>
                <Grid container spacing={4}>
                    <Grid xs={2} item>
                        <InfoCard label={"Size"} value={filesize(model.pool?.tree.size ?? 0)} valueSize={18} />
                    </Grid>
                    <Grid xs={2} item>
                        <InfoCard label={"Used"} value={filesize(model.pool?.tree.alloc ?? 0)} valueSize={18} />
                    </Grid>
                    <Grid xs={2} item>
                        <InfoCard label={"Free"} value={filesize(model.pool?.tree.free ?? 0)} valueSize={18} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PoolDetailPage;
