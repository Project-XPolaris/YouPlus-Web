import useStyles from './style'
import clsx from 'clsx'
import React, {ReactElement, useState} from "react";
import {Avatar, Paper, Tab, Tabs} from "@material-ui/core";
import {PageHeadController} from "./hook";
import UserPopup from "../UserPopup";
import {useHistory} from "react-router-dom";
import useUserModel from "../../model/user";
import TaskPopup from "../../layout/Base/parts/Task";

export interface PageHeadPropsType {
    className?: string
    title: string
    tabs?:string[]
    controller:PageHeadController
    actions?:ReactElement
}

const PageHead = ({className, title,tabs,controller,actions}: PageHeadPropsType): React.ReactElement => {
    const classes = useStyles()
    const [userMenuEl, setUserMenuEl] = React.useState(null);
    const history = useHistory();
    const userModel = useUserModel()
    const getUsername = () => {
        const username = localStorage.getItem("username")
        if (username) {
            return username
        }
        return "Unknown"
    }
    const handleUserMenuClick = (event:any) => {
        setUserMenuEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setUserMenuEl(null);
    };
    const onLogout = () => {
        userModel.logout()
        history.push("/")
    }
    return (
        <Paper className={clsx(classes.root, className)} elevation={0}>
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
            <div className={classes.top}>
                <div className={classes.topLeft}>

                </div>
                <div className={classes.topRight}>
                    <TaskPopup className={classes.actionIcon} />
                    <Avatar className={classes.avatar} onClick={handleUserMenuClick}>
                        { getUsername()[0] }
                    </Avatar>
                </div>
            </div>
            <div className={classes.titleContainer}>
                <div className={classes.title}>
                    {title}
                </div>
                { actions }
            </div>

            {
                tabs && <Tabs value={controller.tabIndex} onChange={(e, idx) => controller.setTabIndex(idx)}>
                    {
                        tabs.map(label => (
                            <Tab label={label} disableRipple/>
                        ))
                    }

                </Tabs>
            }

        </Paper>
    )
}

export default PageHead