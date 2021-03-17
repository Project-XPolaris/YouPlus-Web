import React from "react";
import clsx from "clsx";
import {TextField} from "@material-ui/core";
import useStyles from "./style";
import {FormController} from "../../hook";
export interface InfoForm {
    name?:string
}
export interface ShareInfoStepPropsType {
    className?:any
    controller:FormController<InfoForm>
}

const ShareInfoStep = ({className,controller}: ShareInfoStepPropsType) => {
    const classes = useStyles()
    return (
        <div className={clsx(className,classes.main)}>
            <TextField
                variant={"outlined"}
                label={"folder name"}
                fullWidth
                onChange={(e) => controller.updateValue({name:e.target.value})}
                value={controller.form.name}
            />
        </div>
    )
}

export default ShareInfoStep;
