import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import * as React from "react";
import useStyles from "./style";
import {Avatar, ButtonBase, Menu, MenuItem} from "@material-ui/core";
import {Person} from "@material-ui/icons";
import useUserModel from "../../../../model/user";
import {useHistory} from "react-router-dom";

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
    return (
        <Toolbar>
            <Menu
                anchorEl={userMenuEl}
                keepMounted
                open={Boolean(userMenuEl)}
                onClose={handleUserMenuClose}
            >
                <MenuItem onClick={() => {
                    handleUserMenuClose()
                    userModel.logout()
                    history.replace("/login")
                }}>Logout</MenuItem>
            </Menu>
            <Typography variant="h6" noWrap component="div" className={classes.title}>
                YouPlus
            </Typography>
            <Avatar className={classes.avatar} onClick={handleUserMenuClick}>
                {userModel.username?userModel.username[0]:""}
            </Avatar>
        </Toolbar>
    )
}

export default AppToolbar;