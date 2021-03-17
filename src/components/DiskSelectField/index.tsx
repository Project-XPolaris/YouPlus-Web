import React, {useEffect, useState} from "react";
import {useDynamicList} from "ahooks";
import {Chip, IconButton, MenuItem, Select, Typography} from "@material-ui/core";
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
    const [diskSelect,setDiskSelect] = useState<string | undefined>(getSelectOption().length > 0?getSelectOption()[0].name:undefined)
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
            <div className={classes.addAction}>

                <Select
                    variant={"outlined"}
                    value={diskSelect}
                    size={"small"}
                    onChange={(e) => setDiskSelect(e.target.value)}
                    displayEmpty={true}
                >
                    {
                        getSelectOption().map(disk => {
                            return (
                                <MenuItem value={disk.name}>{`${disk.model} | ${disk.name} | ${filesize(Number(disk.size))}`}</MenuItem>
                            )
                        })
                    }
                </Select>
                <IconButton
                    className={classes.addButton}
                    size={"small"}
                    onClick={() => {
                        if (diskSelect && disksController.list.find(it => it.name ===  diskSelect) === undefined){
                            const target = disks.find(it => it.name ===  diskSelect)
                            if (target) {
                                disksController.push(target)
                            }
                        }
                    }}
                >
                    <Add />
                </IconButton>
            </div>
        </div>
    )
}

export default DiskSelectField;
