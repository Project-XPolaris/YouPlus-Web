import useStyles from "./style";
import {Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import useDiskDetailModel from "./model";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

export interface DiskDetailPagePropsType {

}

const DiskDetailPage = ({}: DiskDetailPagePropsType) => {
    const classes = useStyles()
    const {name}: any = useParams();
    const model = useDiskDetailModel()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        model.setName(name)
        model.loadInfo(name)
    }, [])
    return (
        <div className={classes.root}>
            <PageHead title={model.name ?? "Disk"} controller={pageHeadController} />
            <div className={classes.content}>
                <Paper className={classes.section} elevation={1}>
                    <div className={classes.tableSectionHeader}>
                        <Typography variant={"subtitle1"}>
                            Base info
                        </Typography>
                    </div>
                    <Divider/>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    ModelFamily
                                </TableCell>
                                <TableCell>
                                    {model.info?.modelFamily}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    ModelName
                                </TableCell>
                                <TableCell>
                                    {model.info?.modelName}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    SerialNumber
                                </TableCell>
                                <TableCell>
                                    {model.info?.serialNumber}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className={classes.section} elevation={1}>
                    <div className={classes.tableSectionHeader}>
                        <Typography variant={"subtitle1"}>
                            SMART
                        </Typography>
                    </div>
                    <Divider/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    ID
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Value
                                </TableCell>
                                <TableCell>
                                    Worst
                                </TableCell>
                                <TableCell>
                                    Threshold
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                (model.info?.attrs ?? []).map(attr => {
                                    return (
                                        <TableRow key={attr.id}>
                                            <TableCell>
                                                { attr.id }
                                            </TableCell>
                                            <TableCell>
                                                { attr.name }
                                            </TableCell>
                                            <TableCell>
                                                { attr.value }
                                            </TableCell>
                                            <TableCell>
                                                { attr.worst }
                                            </TableCell>
                                            <TableCell>
                                                { attr.threshold }
                                            </TableCell>
                                        </TableRow>
                                    )
                                },[])
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    )
}

export default DiskDetailPage;
