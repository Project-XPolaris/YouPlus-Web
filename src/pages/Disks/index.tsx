import React, {useEffect} from "react";
import useDisksModel from "./model";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Storage, Store} from "@material-ui/icons";
import useStyles from "./style";

export interface DisksPagePropsType {

}

const DisksPage = ({}: DisksPagePropsType) => {
    const classes = useStyles()
    const model = useDisksModel()
    useEffect(() => {
        model.initData()
    },[])
    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>
                Disks
            </Typography>
            <List>
                {
                    model.disks.map(it => {
                        return (
                            <ListItem key={it.name} button>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Storage />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={it.name} secondary={it.model}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default DisksPage;
