import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from "@material-ui/core";
import AppCard from "../../components/AppCard";
import useAppsPageModel from "./model";
import {App} from "../../api/apps";

const useStyles = makeStyles({
    main: {}
});

interface AppsPagePropsType {

}


export default function AppsPage({}: AppsPagePropsType) {
    const classes = useStyles();
    const model = useAppsPageModel()
    return (
        <div className={classes.main}>
            <Typography variant={"h5"}>
                <Grid container>
                    {model.appList.map((app: App) => (
                        <Grid xs={3} item>
                            <AppCard app={app}/>
                        </Grid>
                    ))}
                </Grid>
            </Typography>
        </div>
    );
}
