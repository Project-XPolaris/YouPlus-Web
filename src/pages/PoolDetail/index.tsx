import useStyles from "./style";
import {Grid, Paper, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import usePoolDetailModel from "./model";
import {useParams} from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import filesize from "filesize";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";
import {DecompositionTreeGraph} from "@ant-design/charts";
import {TreeGraphData} from "@ant-design/charts/es/graphs/interface";
import {ZFSTree} from "../../api/zfs";
import {useMount} from "ahooks";

export interface PoolDetailPagePropsType {

}


const PoolDetailPage = ({}: PoolDetailPagePropsType) => {
    const {name}: any = useParams();
    const classes = useStyles()
    const model = usePoolDetailModel()
    const pageHeadController = usePageHeadController({})
    useMount(() => {
        model.refresh(name)
    })

    const getTreeData = () => {
        const tree = model.pool?.tree
        if (!tree) {
            return {}
        }
        const generateData = (data: ZFSTree): any => {
            return {
                value: {
                    title: `${data.name} (${data.type})`,
                    items: [
                        {
                            text: 'Total',
                            value: filesize(data.size ?? 0),
                        },
                        {
                            text: 'free',
                            value:  filesize(data.free ?? 0),
                        },
                        {
                            text: 'alloc',
                            value:  filesize(data.alloc ?? 0),
                        },
                    ],
                },
                children: [
                    ...(data.devices ?? []).map(it => generateData(it)),
                    ...(data.l2Cache ?? []).map(it => generateData(it)),
                    ...(data.spares ?? []).map(it => generateData(it)),
                ]
            }
        }
        return generateData(tree)
    }
    const config = {
        data:getTreeData(),
        autoFit:false,
        markerCfg: (cfg: any) => {
            const {children} = cfg;
            return {
                show: children?.length,
            };
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    return (
        <div className={classes.root}>
            <PageHead title={model.pool?.name ?? "Pool"} controller={pageHeadController}/>
            <div className={classes.content}>
                <Grid container spacing={4}>
                    <Grid xs={2} item>
                        <InfoCard label={"Size"} value={filesize(model.pool?.tree.size ?? 0)} valueSize={18}/>
                    </Grid>
                    <Grid xs={2} item>
                        <InfoCard label={"Used"} value={filesize(model.pool?.tree.alloc ?? 0)} valueSize={18}/>
                    </Grid>
                    <Grid xs={2} item>
                        <InfoCard label={"Free"} value={filesize(model.pool?.tree.free ?? 0)} valueSize={18}/>
                    </Grid>
                    <Grid xs={12} item>
                        <Paper>
                            <div className={classes.paperLabel}>
                                VdevTree
                            </div>
                            {
                                model.pool?.tree &&
                                <Paper className={classes.devTreeContainer}>
                                    <DecompositionTreeGraph {...config} />
                                </Paper>
                            }
                        </Paper>

                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default PoolDetailPage;
