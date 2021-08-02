import useStyles from "./style";
import {Divider, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import useNetworkDetailModel from "./model";
import ValueField from "../../components/ValueField";
import filesize from "filesize";
import {getNetworkSpeedText} from "../../utils/network";

export interface NetworkDetailPropsType {

}

const NetworkDetail = ({}: NetworkDetailPropsType) => {
    const classes = useStyles()
    const {name}: any = useParams()
    const model = useNetworkDetailModel()
    useEffect(() => {
        model.refresh(name)
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.center}>
                <Typography variant={"h4"} className={classes.title}>
                    {name}
                </Typography>
                {
                    model.network &&
                    <Paper className={classes.content}>
                        <div className={classes.sectionTitle}>
                            Status
                        </div>
                        <Grid container spacing={2} className={classes.sectionContent}>
                            <Grid item xs={3}>
                                <ValueField label={"product"} value={model.network.hardwareInfo.product}
                                            valueFontSize={14}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ValueField label={"speed"}
                                            value={model.network.hardwareInfo.configuration.speed}
                                            valueFontSize={14}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ValueField label={"mac"}
                                            value={model.network.hardwareInfo.serial}
                                            valueFontSize={14}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ValueField label={"link"}
                                            value={model.network.hardwareInfo.configuration.link}
                                            valueFontSize={14}/>
                            </Grid>
                        </Grid>
                        <Divider />
                        <div className={classes.sectionContent}>
                            <div className={classes.sectionTitle}>
                                Address
                            </div>
                            <Table>
                                <TableHead>

                                </TableHead>
                                <TableBody>
                                    {
                                        model.network.IPv4Address.map(addr => {
                                            return (
                                                <TableRow key={addr}>
                                                    <TableCell>
                                                        {addr}
                                                    </TableCell>
                                                    <TableCell>
                                                        IPv4
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                    {
                                        model.network.IPv6Address.map(addr => {
                                            return (
                                                <TableRow key={addr}>
                                                    <TableCell>
                                                        {addr}
                                                    </TableCell>
                                                    <TableCell>
                                                        IPv6
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                }
            </div>

        </div>
    )
}

export default NetworkDetail;
