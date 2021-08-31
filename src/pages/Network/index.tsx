import useStyles from "./style";
import {Grid, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import useNetworkModel from "./model";
import NetworkCard from "../../components/NetworkCard";
import {useHistory} from "react-router-dom";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";

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
