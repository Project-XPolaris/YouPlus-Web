import React, {useEffect, useState} from "react";
import {useDynamicList} from "ahooks";
import {Chip, IconButton, MenuItem, Select} from "@material-ui/core";
import {Add, Person} from "@material-ui/icons";
import useStyles from "./style";

export interface UserSelectFieldPropsType {
    users?:string[]
    onChange?: (users : string[]) => void
    initValue?:string[]
}

const UserSelectField = ({onChange,users = [],initValue = []}: UserSelectFieldPropsType) => {
    const classes = useStyles()
    const usersController = useDynamicList<string>(initValue);
    const [userSelect,setUserSelect] = useState<string | undefined>()
    useEffect(() => {
        if (onChange) {
            onChange(usersController.list)
        }
    },[usersController.list])
    return (
        <div>
            <div>
                {
                    usersController.list.map(it => {
                        return (
                            <Chip
                                label={it}
                                key={it}
                                className={classes.chip}
                                color={'primary'}
                                size="small"
                                icon={<Person />}
                                onDelete={() => {
                                    const index = usersController.list.indexOf(it)
                                    if (index !== -1) {
                                        usersController.remove(index)
                                    }
                                }}
                            />
                        )
                    })
                }
            </div>
            <div className={classes.addAction}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant={"outlined"}
                    size={"small"}
                    fullWidth
                    value={userSelect}
                    onChange={(e) => setUserSelect(e.target.value)}
                >
                    {
                        users.filter(it => usersController.list.find(selected => selected === it) === undefined).map(user => {
                            return (
                                <MenuItem value={user}>{user}</MenuItem>
                            )
                        })
                    }
                </Select>
                <IconButton
                    className={classes.addButton}
                    size={"small"}
                    onClick={() => {
                        if (userSelect && usersController.list.find(it => it ===  userSelect) === undefined){
                            usersController.push(userSelect)
                            setUserSelect(undefined)
                        }
                    }}
                >
                    <Add />
                </IconButton>
            </div>
        </div>
    )
}

export default UserSelectField;
