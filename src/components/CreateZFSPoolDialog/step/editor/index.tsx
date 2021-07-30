import useStyles from './style'
import clsx from 'clsx'

export interface PoolEditStepPropsType {
    className?: string
}

const PoolEditStep = ({className}: PoolEditStepPropsType): React.ReactElement => {
    const classes = useStyles()
    return (
        <div className={clsx(className,classes.root)}>
        </div>
    )
}

export default PoolEditStep
