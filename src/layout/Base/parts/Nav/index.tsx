import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {Apps} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
    drawerContainer: {
        overflow: 'auto',
    },
});

interface AppNavigationPropsType {

}


export default function AppNavigation({}: AppNavigationPropsType) {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button key={"apps"}>
                        <ListItemIcon>
                            <Apps/>
                        </ListItemIcon>
                        <ListItemText primary={"Apps"}/>
                    </ListItem>
                </List>

            </div>
        </Drawer>
    );
}
