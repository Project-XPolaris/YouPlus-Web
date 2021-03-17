import React from "react";
import usePartsPageModel from "./model";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Inbox} from "@material-ui/icons";
import useStyles from "./style";

export interface PartsPagePropsType {

}

const PartsPage = ({}: PartsPagePropsType) => {
    const model = usePartsPageModel()
    const classes = useStyles()
    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>
                Parts
            </Typography>
            <List>
            {
                model.parts.map(part => {
                    return (
                        <ListItem key={part.name} button>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <Inbox />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={part.name} secondary={part.fs_type}/>
                        </ListItem>
                    )
                })
            }
            </List>
        </div>
    )
}

export default PartsPage;
