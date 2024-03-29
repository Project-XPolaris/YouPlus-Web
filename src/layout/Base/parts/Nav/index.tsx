import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {
    Apps,
    Archive,
    Assignment,
    Dashboard,
    Dns,
    Folder,
    Group, InsertChart, Link,
    NetworkCell,
    Person,
    Settings,
    Storage
} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {useUpdate} from "ahooks";
import {ListSubheader, Typography, useMediaQuery} from "@material-ui/core";
import theme from "../../../../theme";
import useLayoutModel from "../../../../model/layout";

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
    const layoutModel = useLayoutModel()
    const collapse = useMediaQuery(theme.breakpoints.down('md'));
    const changeUrl = (urlPath: string) => {
        layoutModel.setShowNav(false)
        if (history.location.pathname !== urlPath) {
            history.replace(urlPath)
            update()
        }
    }
    return (
        <Drawer
            className={classes.drawer}
            variant={collapse?'temporary' :"permanent"}
            classes={{
                paper: classes.drawerPaper,
            }}
            open={layoutModel.showNav}
            onClose={() => layoutModel.setShowNav(false)}
        >
            <Toolbar title={"YouPlus"}>
                <Typography variant={"h6"}>
                    YouPlus
                </Typography>
            </Toolbar>
            <div className={classes.drawerContainer}>
                <List
                    subheader={
                        <ListSubheader component="div">
                            General
                        </ListSubheader>
                    }
                >
                    <ListItem
                        button
                        key={"dashboard"}
                        selected={history.location.pathname === "/home"}
                        onClick={() => changeUrl("/home")}
                    >
                        <ListItemIcon>
                            <Dashboard/>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"apps"}
                        selected={history.location.pathname === "/apps"}
                        onClick={() => changeUrl("/apps")}
                    >
                        <ListItemIcon>
                            <Apps/>
                        </ListItemIcon>
                        <ListItemText primary={"Apps"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"network"}
                        selected={history.location.pathname === "/network"}
                        onClick={() => changeUrl("/network")}
                    >
                        <ListItemIcon>
                            <Link/>
                        </ListItemIcon>
                        <ListItemText primary={"Network"}/>
                    </ListItem>
                </List>
                <List
                    subheader={
                        <ListSubheader component="div">
                            Data
                        </ListSubheader>
                    }
                >

                    <ListItem
                        button
                        key={"disks"}
                        selected={history.location.pathname === "/disks"}
                        onClick={() => changeUrl("/disks")}
                    >
                        <ListItemIcon>
                            <Storage/>
                        </ListItemIcon>
                        <ListItemText primary={"Disks"}/>
                    </ListItem>
                    {/*<ListItem*/}
                    {/*    button*/}
                    {/*    key={"parts"}*/}
                    {/*    selected={history.location.pathname === "/parts"}*/}
                    {/*    onClick={() => changeUrl("/parts")}*/}
                    {/*>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <Inbox/>*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary={"Parts"}/>*/}
                    {/*</ListItem>*/}
                    <ListItem
                        button
                        key={"zfs"}
                        selected={history.location.pathname === "/zfs"}
                        onClick={() => changeUrl("/zfs")}
                    >
                        <ListItemIcon>
                            <Dns/>
                        </ListItemIcon>
                        <ListItemText primary={"ZFS"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"storage"}
                        selected={history.location.pathname === "/storage"}
                        onClick={() => changeUrl("/storage")}
                    >
                        <ListItemIcon>
                            <Archive/>
                        </ListItemIcon>
                        <ListItemText primary={"Storage"}/>
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
                <List
                    subheader={
                        <ListSubheader component="div">
                            System
                        </ListSubheader>
                    }
                >
                    <ListItem
                        button
                        key={"users"}
                        selected={history.location.pathname === "/users"}
                        onClick={() => changeUrl("/users")}
                    >
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary={"Users"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"groups"}
                        selected={history.location.pathname === "/groups"}
                        onClick={() => changeUrl("/groups")}
                    >
                        <ListItemIcon>
                            <Group/>
                        </ListItemIcon>
                        <ListItemText primary={"Groups"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"logs"}
                        selected={history.location.pathname === "/logs"}
                        onClick={() => changeUrl("/logs")}
                    >
                        <ListItemIcon>
                            <InsertChart/>
                        </ListItemIcon>
                        <ListItemText primary={"Logs"}/>
                    </ListItem>
                </List>
                <List
                    subheader={
                        <ListSubheader component="div">
                            My
                        </ListSubheader>
                    }
                >
                    <ListItem
                        button
                        key={"account"}
                        selected={history.location.pathname === "/my/account"}
                        onClick={() => changeUrl("/my/account")}
                    >
                        <ListItemIcon>
                            <Assignment/>
                        </ListItemIcon>
                        <ListItemText primary={"Account"}/>
                    </ListItem>
                </List>

                <List
                    subheader={
                        <ListSubheader component="div">
                            System
                        </ListSubheader>
                    }
                >
                    <ListItem
                        button
                        key={"system"}
                        selected={history.location.pathname === "/system"}
                        onClick={() => changeUrl("/system")}
                    >
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary={"System"}/>
                    </ListItem>
                </List>

            </div>
        </Drawer>
    );
}
