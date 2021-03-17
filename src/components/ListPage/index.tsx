import React, {ReactElement} from "react";
import {Typography} from "@material-ui/core";
import useStyles from "./style";

export interface ListPagePropsType {
    children?:ReactElement
    title?: string
    actions?:ReactElement
}

const ListPage = ({children,title,actions}: ListPagePropsType) => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>
                {title}
            </Typography>
            <div className={classes.actions}>
                {actions}
            </div>
            {children}
        </div>
    )
}

export default ListPage;
