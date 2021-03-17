import React, {useEffect, useState} from "react";
import useStyles from "./style";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import useUsersModel from "../../../../pages/Users/model";
import UserSelectField from "../../../UserSelectField";
import clsx from "clsx";
import {FormController} from "../../hook";

export interface UsersForm {
    folderPublic: boolean
    validateUsers?: string[]
    writeUsers?: string[]
    useValidateUsers: boolean
    useWriteUsers: boolean
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
                    label="Allow guest"
                />
            </div>
            <div className={clsx(classes.field, classes.fieldArea)}>
                <div className={classes.label}>
                    <Checkbox
                        size={"small"}
                        checked={controller.form.useValidateUsers}
                        onChange={(e) => controller.updateValue({useValidateUsers: e.target.checked})}
                    />
                    validate users
                </div>
                <UserSelectField
                    users={userModel.users}
                    onChange={(users) => controller.updateValue({validateUsers: users})}
                    initValue={controller.form.validateUsers}
                />
            </div>
            <div className={clsx(classes.field, classes.fieldArea)}>
                <div className={classes.label}>
                    <Checkbox
                        size={"small"}
                        checked={controller.form.useWriteUsers}
                        onChange={(e) => controller.updateValue({useWriteUsers: e.target.checked})}
                    />
                    write user
                </div>
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
