import useStyles from "./style";
import {Grid, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import useNetworkModel from "./model";
import NetworkCard from "../../components/NetworkCard";
import {useHistory} from "react-router-dom";

export interface NetworkPagePropsType {

}

const NetworkPage = ({}: NetworkPagePropsType) => {
    const classes = useStyles()
    const networkModel = useNetworkModel()
    const history = useHistory()
    useEffect(() => {
        networkModel.refresh()
    },[])
    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>
                Network
            </Typography>
            <div className={classes.content}>
                <Grid container  spacing={2}>
                    {
                        networkModel.networks.map(network => {
                            return (
                                <Grid item key={network.name} xs={2}>
                                    <NetworkCard
                                        network={network}
                                        onClick={() => history.push(`/network/${network.name}`)}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>




        </div>
    )
}

export default NetworkPage;
