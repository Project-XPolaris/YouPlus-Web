import React, {useEffect} from "react";
import useDisksModel from "./model";
import {Avatar, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import useStyles from "./style";
import {useHistory} from "react-router-dom";
import {usePageHeadController} from "../../components/PageHead/hook";
import PageHead from "../../components/PageHead";
import {Storage} from "@material-ui/icons";
import filesize from "filesize";

export interface DisksPagePropsType {

}

const DisksPage = ({}: DisksPagePropsType) => {
    const classes = useStyles()
    const model = useDisksModel()
    const history = useHistory()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        model.initData()
    }, [])
    return (
        <div className={classes.root}>
            <PageHead title={"Disks"} controller={pageHeadController}/>
            <div className={classes.content}>
                <Paper className={classes.listContainer}>
                    <div className={classes.listHead}>
                        <div className={classes.listTitle}>
                            Disks
                        </div>
                    </div>
                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.diskTable} stickyHeader>
                            <TableHead className={classes.tableHead}>
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    model.disks.map(disk => {
                                        return (
                                            <TableRow key={disk.name}>
                                                <TableCell className={classes.cell}>
                                                    <Avatar className={classes.cellAvatar}>
                                                        <Storage />
                                                    </Avatar>
                                                    <Link onClick={() => history.push(`/disk/${disk.name}`)}>
                                                        { disk.name }
                                                    </Link>

                                                </TableCell>
                                                <TableCell>
                                                    { disk.model }
                                                </TableCell>
                                                <TableCell>
                                                    { filesize(disk.size) }
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>


            {/*<List>*/}
            {/*    {*/}
            {/*        model.disks.map(it => {*/}
            {/*            return (*/}
            {/*                <ListItem key={it.name} button>*/}
            {/*                    <ListItemAvatar>*/}
            {/*                        <Avatar className={classes.avatar}>*/}
            {/*                            <Storage />*/}
            {/*                        </Avatar>*/}
            {/*                    </ListItemAvatar>*/}
            {/*                    <ListItemText primary={it.name} secondary={it.model}/>*/}
            {/*                </ListItem>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</List>*/}
        </div>
    )
}

export default DisksPage;
