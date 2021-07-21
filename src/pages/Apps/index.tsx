import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from "@material-ui/core";
import AppCard from "../../components/AppCard";
import useAppsPageModel from "./model";
import {App} from "../../api/apps";
import useStyles from "./style";
import InstallAppDialog from "../../components/InstallAppDialog";
import useLayoutModel from "../../model/layout";
import {Add} from "@material-ui/icons";
import {useInterval} from "ahooks";


interface AppsPagePropsType {

}


export default function AppsPage({}: AppsPagePropsType) {
    const classes = useStyles();
    const model = useAppsPageModel()
    const layoutModel = useLayoutModel()
    useInterval(() => {
        model.loadApp();
    },1000)
    return (
        <div className={classes.root}>
            <InstallAppDialog
                open={layoutModel.getDialogOpen('installApp')}
                onClose={() => {
                    layoutModel.switchDialog("installApp")
                }}
                onOk={async (file) => {
                    await model.install(file)
                    layoutModel.switchDialog("installApp")
                }}
            />
            <div className={classes.header}>
                <div className={classes.title}>
                    Apps
                </div>
                <Button
                    variant="contained"
                    onClick={() => layoutModel.switchDialog("installApp")}
                    color="secondary"
                    startIcon={<Add />}
                >
                    Install App
                </Button>
            </div>

            <Grid container spacing={2}>
                {model.appList.map((app: App) => (
                    <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
                        <AppCard
                            app={app}
                            onStart={() => model.start(app.id)}
                            onStop={() => model.stop(app.id)}
                            enableAutoStart={() => model.addToAutoStart(app.id)}
                            disableAutoStart={() => model.removeAutoStart(app.id)}
                            onRemove={() => model.uninstall(app.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
