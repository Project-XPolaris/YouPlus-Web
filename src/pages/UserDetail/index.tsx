import useStyles from './style'
import {
    Button,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import useUserDetailModel from "./model";
import {usePageHeadController} from "../../components/PageHead/hook";
import PageHead from "../../components/PageHead";
import {Delete} from "@material-ui/icons";

export interface UserDetailPropsType {
    className?: string
}

const UserDetail = ({className}: UserDetailPropsType): React.ReactElement => {
    const classes = useStyles()
    const {name}: any = useParams();
    const model = useUserDetailModel()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        model.setUsername(name)
        model.refreshShareFolders(name)
    },[])
    return (
        <div className={classes.root}>
            <PageHead
                title={ model.username ?? "" }
                controller={pageHeadController}
            />
            <div className={classes.content}>
                <Paper>
                    <div className={classes.tableSectionHeader}>
                        <Typography variant={"h5"}>
                            Folders
                        </Typography>
                    </div>
                    <Divider />
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Folder
                                    </TableCell>
                                    <TableCell>
                                        Access
                                    </TableCell>
                                    <TableCell>
                                        Read
                                    </TableCell>
                                    <TableCell>
                                        Write
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    model.userShareFolder.map(folder => {
                                        return (
                                            <TableRow key={folder.name}>
                                                <TableCell>
                                                    {
                                                        folder.name
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        folder.access ? "yes":"no"
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        folder.read ? "yes":"no"
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        folder.write ? "yes":"no"
                                                    }
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
        </div>
    )
}

export default UserDetail
