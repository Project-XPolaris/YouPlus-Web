import useStyles from "./style";
import {Divider, Paper, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import {SystemInfo} from "../../../../api/system";
import clsx from "clsx";
import filesize from "filesize";

export interface SystemInfoCardPropsType {
    systemInfo:SystemInfo
    className?:string
}

const SystemInfoCard = ({ className,systemInfo }: SystemInfoCardPropsType) => {
    const classes = useStyles()
    return (
        <Paper className={clsx(classes.root,className)}>
            <div className={classes.header}>
                <Typography variant={"subtitle1"}>
                    Device
                </Typography>
            </div>
            <Divider />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Host name
                        </TableCell>
                        <TableCell>
                            { systemInfo.node.hostname }
                        </TableCell>


                    </TableRow>
                    <TableRow>
                        <TableCell>
                            CPU
                        </TableCell>
                        <TableCell>
                            { systemInfo.cpu.model }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Memory
                        </TableCell>
                        <TableCell>
                            { filesize(systemInfo.memory.size * 1000000) }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Board
                        </TableCell>
                        <TableCell>
                            { systemInfo.board.vendor }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            OS
                        </TableCell>
                        <TableCell>
                            { systemInfo.os.name }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default SystemInfoCard;
