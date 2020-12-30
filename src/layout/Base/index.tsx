import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppNavigation from "./parts/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AppsPage from "../../pages/Apps";
import ShareFolder from "../../pages/ShareFolder";

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
            padding: theme.spacing(3),
            backgroundColor:"#EEEEEE"
        },
    }),
);

export default function BaseLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        YouPlus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <AppNavigation/>
                <main className={classes.content}>
                    <Toolbar/>
                    <Switch>
                        <Route path="/folders">
                            <ShareFolder/>
                        </Route>
                        <Route path="/">
                            <AppsPage/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}
