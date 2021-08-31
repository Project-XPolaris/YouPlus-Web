import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppNavigation from "./parts/Nav";
import AuthLayout from "../Auth";
import Notification from "../Notification";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        content: {
            flexGrow: 1,
            minHeight: "100vh",
            backgroundColor: "#F6F7F9",
        },
    }),
);

const BaseLayout = ({children}: { children: any }) => {
    const classes = useStyles();
    return (
        <AuthLayout>
            <Notification />
            <div className={classes.root}>
                <CssBaseline/>
                {/*<AppBar position="fixed" className={classes.appBar} elevation={1}>*/}
                {/*  <AppToolbar />*/}
                {/*</AppBar>*/}

                <AppNavigation/>
                <main className={classes.content}>
                    {children}
                </main>
            </div>
        </AuthLayout>
    );
};
export default BaseLayout
