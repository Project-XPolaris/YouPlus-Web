import useStyles from './style'
import {
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

export interface UserDetailPropsType {
    className?: string
}

const UserDetail = ({className}: UserDetailPropsType): React.ReactElement => {
    const classes = useStyles()
    const {name}: any = useParams();
    const model = useUserDetailModel()
    useEffect(() => {
        model.setUsername(name)
        model.refreshShareFolders(name)
    },[])
    return (
        <div className={classes.root}>
            <Typography variant={"h4"} className={classes.title}>
                { model.username }
            </Typography>
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
    )
}

export default UserDetail
