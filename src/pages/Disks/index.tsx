import React, {useEffect} from "react";
import useDisksModel from "./model";
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./style";
import DiskCard from "../../components/DiskCard";
import {useHistory} from "react-router-dom";
import {usePageHeadController} from "../../components/PageHead/hook";
import PageHead from "../../components/PageHead";

export interface DisksPagePropsType {

}

const DisksPage = ({}: DisksPagePropsType) => {
    const classes = useStyles()
    const model = useDisksModel()
    const history = useHistory()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        model.initData()
    }, [])
    return (
        <div className={classes.root}>
            <PageHead title={"Disks"} controller={pageHeadController}/>
            <div className={classes.content}>
                <Grid container className={classes.grid}>
                    {
                        model.disks.map(it => {
                            return (
                                <Grid item xl={2} lg={3} md={3} sm={6} xs={12} className={classes.item}>
                                    <DiskCard
                                        disk={it}
                                        onClick={() => {
                                            history.push(`/disk/${it.name}`)
                                        }}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>


            {/*<List>*/}
            {/*    {*/}
            {/*        model.disks.map(it => {*/}
            {/*            return (*/}
            {/*                <ListItem key={it.name} button>*/}
            {/*                    <ListItemAvatar>*/}
            {/*                        <Avatar className={classes.avatar}>*/}
            {/*                            <Storage />*/}
            {/*                        </Avatar>*/}
            {/*                    </ListItemAvatar>*/}
            {/*                    <ListItemText primary={it.name} secondary={it.model}/>*/}
            {/*                </ListItem>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</List>*/}
        </div>
    )
}

export default DisksPage;
