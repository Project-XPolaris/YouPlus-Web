import React, {useEffect} from "react";
import useDisksModel from "./model";
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./style";
import DiskCard from "../../components/DiskCard";
import {useHistory} from "react-router-dom";

export interface DisksPagePropsType {

}

const DisksPage = ({}: DisksPagePropsType) => {
    const classes = useStyles()
    const model = useDisksModel()
    const history = useHistory()
    useEffect(() => {
        model.initData()
    },[])
    return (
        <div className={classes.root}>
            <Typography variant={"h4"} className={classes.title}>
                Disks
            </Typography>
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
