import useStyles from './style'
import clsx from 'clsx'
import {CreateZPoolForm} from "../../form";
import {Disk} from "../../../../api/disks";
import DiskSelectTable from "../../../DiskSelectTable";

export interface PoolSimpleEditStepPropsType {
    className?: string
    form:CreateZPoolForm
    disks:Disk[]
}

const PoolSimpleEditStep = ({className,form,disks}: PoolSimpleEditStepPropsType): React.ReactElement => {
    const classes = useStyles()
    return (
        <div className={clsx(className,classes.root)}>
           <DiskSelectTable disks={disks} selectedDisk={form.pickupDisk} onDiskSelectChange={(disks) => form.setPickupDisk(disks)} />
        </div>
    )
}

export default PoolSimpleEditStep
