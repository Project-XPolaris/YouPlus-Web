import React from "react";
import useStyles from "./style";
import clsx from "clsx";

export interface ValueFieldPropsType {
    label: string
    value?: string
    className?: any
    valueFontSize?:number
}

const ValueField = ({className, label, value,valueFontSize}: ValueFieldPropsType) => {
    const classes = useStyles()
    return (
        <div className={clsx(classes.root, className)}>
            <div className={classes.label}>
                {label}
            </div>
            <div className={classes.value} style={{fontSize:valueFontSize}}>
                {value}
            </div>
        </div>
    )
}

export default ValueField;
