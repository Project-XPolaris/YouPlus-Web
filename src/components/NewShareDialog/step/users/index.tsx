import React, {useEffect, useState} from "react";
import useStyles from "./style";
import {Checkbox, Divider, FormControlLabel, Typography} from "@material-ui/core";
import useUsersModel from "../../../../pages/Users/model";
import UserSelectField from "../../../UserSelectField";
import clsx from "clsx";
import {FormController} from "../../hook";

export interface UsersForm {
    folderPublic: boolean
    readUsers?: string[]
    writeUsers?: string[]
}

export interface UsersStepPropsType {
    controller: FormController<UsersForm>
}

const UsersStep = ({controller}: UsersStepPropsType) => {
    const classes = useStyles()
    const userModel = useUsersModel()
    return (
        <div>
            <div className={classes.field}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            size={"small"}
                            checked={controller.form.folderPublic}
                            onChange={(e) => controller.updateValue({folderPublic: e.target.checked})}
                        />
                    }
                    label="Public"
                />
            </div>
            <Divider className={classes.divider} />
            <div className={clsx(classes.field, classes.fieldArea)}>
                <Typography variant={"caption"}>Read users</Typography>
                <UserSelectField
                    users={userModel.users}
                    onChange={(users) => controller.updateValue({readUsers: users})}
                    initValue={controller.form.readUsers}
                />
            </div>
            <Divider className={classes.divider} />
            <div className={clsx(classes.field, classes.fieldArea)}>
                <Typography variant={"caption"}>Write users</Typography>
                <UserSelectField
                    users={userModel.users}
                    onChange={(users) => controller.updateValue({writeUsers: users})}
                    initValue={controller.form.writeUsers}
                />
            </div>

        </div>
    )
}

export default UsersStep;
