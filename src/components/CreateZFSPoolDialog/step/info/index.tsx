import useStyles from './style'
import clsx from 'clsx'
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {CreateZPoolForm} from "../../form";

export interface PoolInfoStepPropsType {
    className?: string
    form:CreateZPoolForm
}

const PoolInfoStep = ({className,form}: PoolInfoStepPropsType): React.ReactElement => {
    const classes = useStyles()
    return (
        <div className={clsx(className,classes.root)}>
            <TextField
                label="Pool name"
                variant="outlined"
                fullWidth
                size={"small"}
                className={classes.item}
                onChange={(e) => form.setName(e.target.value)}
                value={form.name}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={(e) => form.setAdvanceMode(e.target.checked)}
                        checked={form.advanceMode}
                    />
                }
                label="Use advance creator"
                className={classes.item}

            />
        </div>
    )
}

export default PoolInfoStep
