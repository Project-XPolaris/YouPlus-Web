import useStyles from './style'
import clsx from 'clsx'
import {Disk} from "../../api/disks";
import {IconButton, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import filesize from "filesize";
import {Close} from "@material-ui/icons";

export interface DiskSelectTablePropsType {
    className?: string
    disks: Disk[]
    selectedDisk: Disk[]
    onDiskSelectChange: (disks: Disk[]) => void
}

const DiskSelectTable = ({
                             className,
                             disks,
                             selectedDisk,
                             onDiskSelectChange
                         }: DiskSelectTablePropsType): React.ReactElement => {
    const classes = useStyles()
    const getSelectDisk = () => {
        return disks.filter(disk => selectedDisk.find(it => it.name === disk.name) === undefined)
    }
    const onDiskSelect = (diskName:any) => {
        const disk = disks.find(it => it.name === diskName)
        if (!disk) {
            return
        }
        onDiskSelectChange([...selectedDisk,disk])
    }
    const onDeleteDisk = (diskName:string) => {
        onDiskSelectChange(selectedDisk.filter(it => it.name !== diskName))
    }
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Model
                        </TableCell>
                        <TableCell>
                            Size
                        </TableCell>
                        <TableCell>
                           Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        selectedDisk.map(disk => {
                            return (
                                <TableRow key={disk.name}>
                                    <TableCell>
                                        { disk.name }
                                    </TableCell>
                                    <TableCell>
                                        { disk.model }
                                    </TableCell>
                                    <TableCell>
                                        {filesize(disk.size) }
                                    </TableCell>
                                    <TableCell>
                                        <IconButton size={"small"} onClick={() => onDeleteDisk(disk.name)}>
                                            <Close />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <Select fullWidth onChange={(e) => onDiskSelect(e.target.value)} variant={"outlined"} size={"small"} className={classes.select}>
                {
                    getSelectDisk().map(disk => {
                        return (
                            <MenuItem value={disk.name}>{`${disk.name} | ${ disk.model} | ${ filesize(disk.size)}`}</MenuItem>
                        )
                    })
                }
            </Select>
        </div>
    )
}

export default DiskSelectTable
