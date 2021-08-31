import React, {useState} from 'react';
import {Button, Divider, Grid, Tab, Tabs} from "@material-ui/core";
import AppCard from "../../components/AppCard";
import useAppsPageModel from "./model";
import {App} from "../../api/apps";
import useStyles from "./style";
import InstallAppDialog from "../../components/InstallAppDialog";
import useLayoutModel from "../../model/layout";
import {Add} from "@material-ui/icons";
import {useInterval} from "ahooks";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";
import PathPickDialog from "../../components/PathPickDialog";


interface AppsPagePropsType {

}


export default function AppsPage({}: AppsPagePropsType) {
    const classes = useStyles();
    const model = useAppsPageModel()
    const layoutModel = useLayoutModel()
    const pageHeadController = usePageHeadController({})
    useInterval(() => {
        model.loadApp();
    }, 3000, {immediate: true})
    return (
        <div className={classes.root}>
            <InstallAppDialog
                open={layoutModel.getDialogOpen('installApp')}
                onClose={() => {
                    layoutModel.switchDialog("installApp")
                }}
                onOk={() => {
                    layoutModel.switchDialog("installApp")
                }}
            />
            <PageHead
                title={"Apps"}
                className={classes.pageHead}
                controller={pageHeadController}
                actions={<>
                    <Button
                        variant="text"
                        onClick={() => layoutModel.switchDialog("installApp")}
                        color="secondary"
                        startIcon={<Add/>}
                    >
                        Install App
                    </Button>
                </>}
            />
            <div className={classes.content}>
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

        </div>
    );
}
