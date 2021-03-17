import React, {useEffect, useState} from "react";
import {fetchParts, Part} from "../../../../api/disks";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Inbox} from "@material-ui/icons";
import useStyles from "./style";
import usePartsPageModel from "../../../../pages/Parts/model";
import useStorageModel from "../../../../pages/Storage/model";
import {Storage} from "../../../../api/storage";

export interface StorageStepPropsType {
    selectedStorage?:Storage
    onSelect:(storage:Storage) => void
}
const StorageStep = ({onSelect,selectedStorage}: StorageStepPropsType) => {
    const classes = useStyles()
    const partsModel = usePartsPageModel()
    const storageModel = useStorageModel()
    useEffect(() => {

    },[])
    return (
        <div className={classes.root}>

            <List>
                {
                    storageModel.storages.map(storage => {
                        return (
                            <ListItem
                                key={storage.id}
                                button
                                selected={selectedStorage?.id === storage.id}
                                onClick={() => onSelect(storage)}
                            >
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Inbox />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={storage.id} secondary={storage.type}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default StorageStep;
