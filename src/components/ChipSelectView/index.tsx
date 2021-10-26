import useStyles from "./style";
import clsx from "clsx";
import {Card, Chip, IconButton, Paper, Popover, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {useState} from "react";

export interface SelectOption {
    name: string
    value: string
}

export interface ChipSelectViewPropsType {
    options: SelectOption[]
    selected: string[]
    className?: string
    onChange: (value: string[]) => void
    label:string
}

const ChipSelectView = ({options, selected, className, onChange, label}: ChipSelectViewPropsType) => {
    const classes = useStyles()
    const [anchorEl,setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const getChipLabels = () => {
        const labels: SelectOption[] = [];
        selected.forEach(selected => {
            const option = options.find(it => it.value === selected)
            if (option) {
                labels.push(option)
            }
        })
        return labels
    }
    const getDisplayOption = () => {
        return options.filter(option => {
            return !selected.find(value => option.value === value)
        })
    }
    return (
        <div className={clsx(classes.root, className)}>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Paper className={classes.selectCard}>
                    <Typography variant={"h6"}>Add</Typography>
                    <div className={classes.optionContent}>
                        {
                            getDisplayOption().map(it => {
                                return (
                                    <Chip
                                        label={it.name}
                                        color={'primary'}
                                        key={it.value}
                                        className={classes.chip}
                                        onClick={() => onChange([...selected,it.value])}
                                    />
                                )
                            })
                        }
                    </div>

                </Paper>
            </Popover>
            <div className={classes.label}>
                <Typography variant={"caption"} >{label}</Typography>
            </div>
            {
                getChipLabels().map(it => {
                    return (
                        <Chip
                            color={'primary'}
                            label={it.name}
                            size={"small"}
                            key={it.value}
                            className={classes.chip}
                            onDelete={() => onChange(selected.filter(selectedValue => selectedValue != it.value))}
                        />
                    )
                })
            }
            <IconButton size={"small"} onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Add/>
            </IconButton>
        </div>
    )
}

export default ChipSelectView;
