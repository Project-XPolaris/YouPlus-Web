import React from "react";
import useStyles from "./style";
import {Grid} from "@material-ui/core";
import ValueField from "../../../ValueField";

export interface CompleteStepPropsType {
    name?:string
    access?:string
    storage?:string
    validateUsers?:string
    writeUsers?:string
}

const CompleteStep = ({ name,access,storage,validateUsers = "disable",writeUsers = "disable" }: CompleteStepPropsType) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid xs={12} item  className={classes.field}>
                <ValueField label="name" value={name} />
            </Grid>
            <Grid xs={6} item className={classes.field}>
                <ValueField label="access" value={access} valueFontSize={20} />
            </Grid>
            <Grid xs={6} item className={classes.field}>
                <ValueField label="storage" value={storage} valueFontSize={20} />
            </Grid>
            <Grid xs={12} item className={classes.field}>
                <ValueField label="validate users" value={validateUsers} valueFontSize={20} />
            </Grid>
            <Grid xs={12} item className={classes.field}>
                <ValueField label="write users" value={writeUsers} valueFontSize={20} />
            </Grid>
        </Grid>
    )
}

export default CompleteStep;
