import useStyles from "./style";
import PageHead from "../../components/PageHead";
import React, {useEffect} from "react";
import {usePageHeadController} from "../../components/PageHead/hook";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import useLogsModel from "./model";
import {getLogLevelText} from "../../utils/log";
import ChipSelectView from "../../components/ChipSelectView";

export interface LogsPagePropsType {

}

const LogsPage = ({}: LogsPagePropsType) => {
    const classes = useStyles()
    const pageHeadController = usePageHeadController({})
    const model = useLogsModel()
    useEffect(() => {
        model.initData()
    }, [])
    return (
        <div>
            <PageHead title={"Logs"} controller={pageHeadController}/>
            <div className={classes.content}>
                <div className={classes.filterRow}>
                    <div className={classes.selectionChipContainer}>
                        <ChipSelectView
                            options={[
                                {
                                    name: 'debug',
                                    value: '1'
                                },
                                {
                                    name: 'info',
                                    value: '2'
                                },
                                {
                                    name: 'warn',
                                    value: '3'
                                },
                                {
                                    name: 'error',
                                    value: '4'
                                },
                                {
                                    name: 'fatal',
                                    value: '5'
                                }
                            ]}
                            selected={model.filter.levels}
                            onChange={values => model.updateLevels(values)}
                            label="Levels:"
                        />
                    </div>

                </div>

                <Paper className={classes.listContainer}>
                    <div className={classes.listHead}>
                        <div className={classes.listTitle}>
                            Data
                        </div>
                    </div>
                    <div>
                        <TableContainer className={classes.tableContainer}>
                            <Table className={classes.table} size={"small"}>
                                <TableHead>
                                    <TableRow className={classes.thead}>
                                        <TableCell>
                                            Application
                                        </TableCell>
                                        <TableCell>
                                            Message
                                        </TableCell>
                                        <TableCell>
                                            Scope
                                        </TableCell>
                                        <TableCell>
                                            Level
                                        </TableCell>
                                        <TableCell>
                                            Time
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        model.logs.map(log => {
                                            return (
                                                <TableRow>
                                                    <TableCell>
                                                        {log.application}
                                                    </TableCell>
                                                    <TableCell>
                                                        {log.message}
                                                    </TableCell>
                                                    <TableCell>
                                                        {log.scope}
                                                    </TableCell>
                                                    <TableCell>
                                                        {getLogLevelText(log.level)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {log.time}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 20, 25, 50, 100, 200]}
                                component="div"
                                count={model.total}
                                rowsPerPage={model.filter.pageSize}
                                page={model.filter.page - 1}
                                onPageChange={(_, page) => {
                                    model.updatePage(page)
                                }}
                                onRowsPerPageChange={(event) => {
                                    model.updatePageSize(parseInt(event.target.value, 10))
                                }}
                            />
                        </TableContainer>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default LogsPage;
