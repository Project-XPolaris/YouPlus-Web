import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Typography
} from "@material-ui/core";
import {Apps, MoreVert} from "@material-ui/icons";
import {App} from "../../api/apps";
import {getAppIconUrl} from "../../utils/app";
import useStyles from "./style";



interface AppCardPropsType {
    app: App
    onStart?: () => void
    onStop?: () => void
    enableAutoStart?: () => void
    disableAutoStart?: () => void
}


export default function AppCard({app, onStart, onStop, enableAutoStart, disableAutoStart}: AppCardPropsType) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const renderMenu = () => {
        return (
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    app.auto_start ?
                        <MenuItem
                            onClick={() => {
                                if (disableAutoStart){
                                    disableAutoStart()
                                }
                                handleClose()
                            }}
                        >
                            Disable autostart
                        </MenuItem>
                        :
                        <MenuItem
                            onClick={
                                () => {
                                    if (enableAutoStart) {
                                        enableAutoStart()
                                    }
                                    handleClose()
                                }
                            }
                        >
                            Enable autostart
                        </MenuItem>
                }
            </Menu>
        )
    }
    return (
        <Card className={classes.main}>
            {renderMenu()}
            <CardContent>
                <div className={classes.header}>
                    <Avatar className={classes.icon}>
                        <img src={getAppIconUrl(app.id)} className={classes.appicon}  />
                    </Avatar>
                    <div className={classes.title}>
                        {app.name}
                    </div>
                    <IconButton onClick={handleClick}>
                        <MoreVert/>
                    </IconButton>
                </div>

                <div className={classes.status}>
                    {app.status}
                </div>
            </CardContent>
            <CardActions>
                {
                    app.status === "Stop" &&
                    <Button size="small" onClick={onStart}>Start</Button>
                }
                {
                    app.status === "Running" &&
                    <Button size="small" onClick={onStop}>Stop</Button>
                }
            </CardActions>
        </Card>
    );
}
