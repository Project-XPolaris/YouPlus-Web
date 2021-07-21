import React, {useEffect} from "react";
import useDisksModel from "./model";
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Storage, Store} from "@material-ui/icons";
import useStyles from "./style";
import DiskCard from "../../components/DiskCard";

export interface DisksPagePropsType {

}

const DisksPage = ({}: DisksPagePropsType) => {
    const classes = useStyles()
    const model = useDisksModel()
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
                                <DiskCard disk={it} />
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
