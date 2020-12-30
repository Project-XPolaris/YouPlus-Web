import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {Apps, Folder} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {useUpdate} from "ahooks";

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
    const history = useHistory();
    const update = useUpdate();
    const changeUrl = (urlPath:string) => {
        if (history.location.pathname !== urlPath) {
            history.replace(urlPath)
            update()
        }
    }
    console.log(history.location.pathname)
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
                    <ListItem
                        button
                        key={"apps"}
                        selected={history.location.pathname === "/"}
                        onClick={() => changeUrl("/")}
                    >
                        <ListItemIcon>
                            <Apps/>
                        </ListItemIcon>
                        <ListItemText primary={"Apps"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"shareFolder"}
                        selected={history.location.pathname === "/folders"}
                        onClick={() => changeUrl("/folders")}
                    >
                        <ListItemIcon>
                            <Folder/>
                        </ListItemIcon>
                        <ListItemText primary={"Share Folders"}/>
                    </ListItem>
                </List>

            </div>
        </Drawer>
    );
}
