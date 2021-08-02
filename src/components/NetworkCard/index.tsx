import useStyles from "./style";
import {Avatar, ButtonBase, Paper} from "@material-ui/core";
import clsx from "clsx";
import {Link} from "@material-ui/icons";
import {Network} from "../../api/network";

export interface NetworkCardPropsType {
    className?: string
    network: Network
    onClick: () => void
}

const NetworkCard = ({className, network, onClick}: NetworkCardPropsType) => {
    const classes = useStyles()
    return (
        <ButtonBase className={clsx(className, classes.root)} onClick={onClick}>
            <Paper className={classes.main}>
                <div className={classes.header}>
                    <Avatar className={classes.avatar}>
                        <Link/>
                    </Avatar>
                    <div className={classes.title}>
                        {
                            network.name
                        }
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.row}>
                        {
                            network.IPv4Address
                        }
                    </div>
                    <div className={classes.row}>
                        {
                            network.IPv6Address
                        }
                    </div>
                </div>
            </Paper>
        </ButtonBase>

    )
}

export default NetworkCard;
