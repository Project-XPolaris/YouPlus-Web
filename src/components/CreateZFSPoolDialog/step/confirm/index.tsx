import useStyles from './style'
import clsx from 'clsx'
import {Vdev} from "../../../../api/zfs";
import ZFSTreeView from "../../../ZFSTreeView";
import ValueField from "../../../ValueField";
import React from "react";
import {CreateZPoolForm} from "../../form";
import {Divider} from "@material-ui/core";

export interface PoolConfirmPropsType {
    className?: string
    form:CreateZPoolForm
}

const PoolConfirm = ({className,form}: PoolConfirmPropsType): React.ReactElement => {
    const classes = useStyles()
    return (
        <div className={clsx(className,classes.root)}>
            <div className={classes.info}>
                <ValueField label="name" value={form.name} />
            </div>
            <Divider   />
            <div className={classes.vdev}>
                {
                    form.vdevTree && <ZFSTreeView root={form.vdevTree} />
                }
            </div>
        </div>
    )
}

export default PoolConfirm
