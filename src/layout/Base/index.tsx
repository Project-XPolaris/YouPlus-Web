import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppNavigation from "./parts/Nav";
import AuthLayout from "../Auth";
import AppToolbar from "./parts/Tool";

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
            paddingTop: theme.spacing(3),
            backgroundColor: "#EEEEEE"
        },
    }),
);

const BaseLayout = ({children}: { children: any }) => {
    const classes = useStyles();
    return (
        <AuthLayout>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                  <AppToolbar />
                </AppBar>

                <AppNavigation/>
                <main className={classes.content}>
                    <Toolbar/>
                    {children}
                </main>
            </div>
        </AuthLayout>
    );
};
export default BaseLayout
