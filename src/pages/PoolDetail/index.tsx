import useStyles from "./style";
import {Grid, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import usePoolDetailModel from "./model";
import {useParams} from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import filesize from "filesize";

export interface PoolDetailPagePropsType {

}

const PoolDetailPage = ({}: PoolDetailPagePropsType) => {
    const {name}: any = useParams();
    const classes = useStyles()
    const model = usePoolDetailModel()
    useEffect(() => {
        model.refresh(name)
    },[])
    return (
        <div className={classes.root}>
            <Typography variant={"h4"} className={classes.title}>
                { model.pool?.name }
            </Typography>
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
    )
}

export default PoolDetailPage;
