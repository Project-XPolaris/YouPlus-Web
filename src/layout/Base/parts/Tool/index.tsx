import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import * as React from "react";
import useStyles from "./style";
import {Avatar, ButtonBase, Menu, MenuItem} from "@material-ui/core";
import {Person} from "@material-ui/icons";
import useUserModel from "../../../../model/user";
import {useHistory} from "react-router-dom";
import TaskPopup from "../Task";
import UserPopup from "../../../../components/UserPopup";

export interface AppToolbarPropsType {

}

const AppToolbar = ({}: AppToolbarPropsType) => {
    const classes = useStyles()
    const [userMenuEl, setUserMenuEl] = React.useState(null);
    const userModel = useUserModel()
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
            />
            <Typography variant="h6" noWrap component="div" className={classes.title}>
                YouPlus
            </Typography>
            <Avatar className={classes.avatar} onClick={handleUserMenuClick}>
                { getUsername()[0] }
            </Avatar>
            <TaskPopup className={classes.actionIcon} />
        </Toolbar>
    )
}

export default AppToolbar;
