import React, {useEffect, useState} from "react";
import {useDynamicList} from "ahooks";
import {Chip, FormControl, IconButton, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {Add, Storage} from "@material-ui/icons";
import useStyles from "./style";
import {Disk} from "../../api/disks";
import filesize from "filesize";

export interface DiskSelectFieldPropsType {
    disks?:Disk[]
    onChange?: (disks : Disk[]) => void
    initValue?:Disk[]
}

const DiskSelectField = ({onChange,disks = [],initValue = []}: DiskSelectFieldPropsType) => {
    const disksController = useDynamicList<Disk>(initValue);

    const getSelectOption = ():Disk[] => {
        return disks.filter(it => disksController.list.find(selected => selected.name === it.name) === undefined)
    }
    const classes = useStyles()
    useEffect(() => {
        if (onChange) {
            onChange(disksController.list)
        }
    },[disksController.list])

    return (
        <div>
            <div>
                {
                    disksController.list.map(it => {
                        return (
                            <Chip
                                label={`${it.model} | ${it.name} | ${filesize(Number(it.size))}`}
                                key={it.name}
                                className={classes.chip}
                                color={'primary'}
                                icon={<Storage />}
                                onDelete={() => {
                                    const index = disksController.list.indexOf(it)
                                    if (index !== -1) {
                                        disksController.remove(index)
                                    }
                                }}
                            />
                        )
                    })
                }
            </div>
            <div>
                <Select
                    className={classes.select}
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) => {
                        if (disksController.list.find(it => it.name ===  e.target.value) === undefined){
                            const target = disks.find(it => it.name ===  e.target.value)
                            if (target) {
                                disksController.push(target)
                            }
                        }
                    }}

                >
                    {
                        getSelectOption().map(disk => {
                            return (
                                <MenuItem value={disk.name}>{`${disk.model} | ${disk.name} | ${filesize(Number(disk.size))}`}</MenuItem>
                            )
                        })
                    }
                </Select>
            </div>
        </div>
    )
}

export default DiskSelectField;
