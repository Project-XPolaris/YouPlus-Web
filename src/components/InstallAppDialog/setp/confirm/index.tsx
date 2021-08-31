import useStyles from './style'
import React, {useState} from "react";
import {Divider, List, ListItem, ListItemText, ListSubheader} from "@material-ui/core";
import {AppPackArg, AppPackInfo} from "../../../../api/apps";
import PathPickDialog from "../../../PathPickDialog";
import {AppInstallForm} from "../../hook";

export interface InstallPackInfoStepPropsType {
    className?: string
    packInfo?:AppPackInfo
    form:AppInstallForm
}

const InstallPackInfoStep = ({className,packInfo,form}: InstallPackInfoStepPropsType): React.ReactElement => {
    const classes = useStyles()
    const [selectPathContext,setSelectPathContext] = useState<string | null>()
    if (!packInfo) {
        return (
            <div>

            </div>
        )
    }
    const renderArg = (arg:AppPackArg) => {
        const onClick = () => {
            if (arg.type === "path") {
                setSelectPathContext(arg.key)
            }
        }
        const isValidate = () => {
            if (arg.require && !form.getArgValue(arg.key)) {
                return false
            }
            return true
        }
        return (
            <>
                <ListItem button onClick={onClick}>
                    <ListItemText
                        primary={form.getArgValue(arg.key) ?? arg.name}
                        secondary={arg.desc + (arg.require ? " (require)" : "")}
                        className={isValidate() ? undefined : classes.invalidateArg}
                    />
                </ListItem>
                <Divider />
            </>
        )
    }
    return (
        <div>
            <PathPickDialog
                onClose={() => setSelectPathContext(null)}
                onOk={(selectPath) => {
                    if (selectPathContext) {
                        form.updateArg(selectPathContext,selectPath)
                    }
                    setSelectPathContext(null)
                }}
                open={Boolean(selectPathContext)}
            />
            <List
                subheader={
                    <ListSubheader>
                        Basic info
                    </ListSubheader>
                }
            >
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
            <List
                subheader={
                    <ListSubheader>
                        Install args
                    </ListSubheader>
                }
            >
                {
                    packInfo.args.map(arg => (renderArg(arg)))
                }
            </List>
        </div>
    )
}

export default InstallPackInfoStep
