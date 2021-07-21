import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import * as React from "react";
import useStyles from "./style";
import {Avatar, ButtonBase, IconButton, Menu, MenuItem, useMediaQuery} from "@material-ui/core";
import {MenuOutlined, Person} from "@material-ui/icons";
import useUserModel from "../../../../model/user";
import {useHistory} from "react-router-dom";
import TaskPopup from "../Task";
import UserPopup from "../../../../components/UserPopup";
import theme from "../../../../theme";
import useLayoutModel from "../../../../model/layout";

export interface AppToolbarPropsType {

}

const AppToolbar = ({}: AppToolbarPropsType) => {
    const classes = useStyles()
    const [userMenuEl, setUserMenuEl] = React.useState(null);
    const userModel = useUserModel()
    const layoutModel = useLayoutModel()
    const collapse = useMediaQuery(theme.breakpoints.down('md'));
    const history = useHistory()
    const handleUserMenuClick = (event:any) => {
        setUserMenuEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setUserMenuEl(null);
    };
    const getUsername = () => {
        const username = localStorage.getItem("username")
        if (username) {
            return username
        }
        return "Unknown"
    }
    const onLogout = () => {
        userModel.logout()
        history.push("/")
    }
    return (
        <Toolbar>
            <UserPopup
                username={getUsername()}
                open={Boolean(userMenuEl)}
                anchorEl={userMenuEl}
                onClose={handleUserMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onLogout={onLogout}
            />
            {
                collapse &&
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => layoutModel.setShowNav(true)}>
                    <MenuOutlined />
                </IconButton>
            }

            <Typography variant="h6" noWrap component="div" className={classes.title}>
                YouPlus
            </Typography>
            <TaskPopup className={classes.actionIcon} />
            <Avatar className={classes.avatar} onClick={handleUserMenuClick}>
                { getUsername()[0] }
            </Avatar>
        </Toolbar>
    )
}

export default AppToolbar;
