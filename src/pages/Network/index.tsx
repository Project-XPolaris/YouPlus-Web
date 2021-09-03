import useStyles from "./style";
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import useNetworkModel from "./model";
import NetworkCard from "../../components/NetworkCard";
import {useHistory} from "react-router-dom";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";
import {Folder} from "@material-ui/icons";

export interface NetworkPagePropsType {

}

const NetworkPage = ({}: NetworkPagePropsType) => {
    const classes = useStyles()
    const networkModel = useNetworkModel()
    const history = useHistory()
    const pageHeadController = usePageHeadController({})
    useEffect(() => {
        networkModel.refresh()
    },[])
    return (
        <div>
            <PageHead title={"Network"} controller={pageHeadController} />
            <div className={classes.content}>
                {
                    networkModel.networks.map(network => {
                        return (
                            <Paper className={classes.listContainer}>
                                <div className={classes.listHead}>
                                    <div className={classes.listTitle}>
                                        {`${network.name} ${network.hardwareInfo.product}`}
                                    </div>
                                </div>
                                <div className={classes.networkContent}>
                                    <div className={classes.networkContentLeft}>
                                        <div className={classes.label}>
                                            Address
                                        </div>
                                        <List>
                                            {
                                                [...network.IPv4.address ?? [],...network.IPv6.address ?? []].map(addr => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemText primary={addr} />
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                    </div>
                                    <div className={classes.networkContentRight}>
                                        <div className={classes.valueContainer}>
                                            <div className={classes.valueLabel}>
                                                Speed
                                            </div>
                                            <div className={classes.value}>
                                                {network.hardwareInfo.configuration.speed}
                                            </div>
                                        </div>
                                        <div className={classes.valueContainer}>
                                            <div className={classes.valueLabel}>
                                                MAC
                                            </div>
                                            <div className={classes.value}>
                                                {network.hardwareInfo.serial}
                                            </div>
                                        </div>
                                        <div className={classes.valueContainer}>
                                            <div className={classes.valueLabel}>
                                                Vendor
                                            </div>
                                            <div className={classes.value}>
                                                {network.hardwareInfo.vendor}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
                {/*<Grid container  spacing={2}>*/}
                {/*    {*/}
                {/*        networkModel.networks.map(network => {*/}
                {/*            return (*/}
                {/*                <Grid item key={network.name} xs={2}>*/}
                {/*                    <NetworkCard*/}
                {/*                        network={network}*/}
                {/*                        onClick={() => history.push(`/network/${network.name}`)}*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Grid>*/}
            </div>




        </div>
    )
}

export default NetworkPage;
