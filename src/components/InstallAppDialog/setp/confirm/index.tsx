import useStyles from './style'
import clsx from 'clsx'
import React from "react";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {AppPackInfo} from "../../../../api/apps";
import {AppsRounded, ArchiveRounded, LinkOffRounded, LinkRounded} from "@material-ui/icons";

export interface InstallPackInfoStepPropsType {
    className?: string
    packInfo?:AppPackInfo
}

const InstallPackInfoStep = ({className,packInfo}: InstallPackInfoStepPropsType): React.ReactElement => {
    const classes = useStyles()
    console.log(packInfo)
    if (!packInfo) {
        return (
            <div>

            </div>
        )
    }
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={packInfo.appName} secondary={"app name"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={packInfo.name} secondary={"package name"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={packInfo.type} secondary={"install as"} />
                </ListItem>
            </List>
        </div>
    )
}

export default InstallPackInfoStep
