import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from "@material-ui/core";
import AppCard from "../../components/AppCard";
import useAppsPageModel from "./model";
import {App} from "../../api/apps";
import useStyles from "./style";



interface AppsPagePropsType {

}


export default function AppsPage({}: AppsPagePropsType) {
    const classes = useStyles();
    const model = useAppsPageModel()
    return (
        <div className={classes.root}>
            <Typography variant={"h5"}>
                <Grid container spacing={2}>
                    {model.appList.map((app: App) => (
                        <Grid xs={2} item>
                            <AppCard
                                app={app}
                                onStart={() => model.start(app.id)}
                                onStop={() => model.stop(app.id)}
                                enableAutoStart={() => model.addToAutoStart(app.id)}
                                disableAutoStart={() => model.removeAutoStart(app.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Typography>
        </div>
    );
}
