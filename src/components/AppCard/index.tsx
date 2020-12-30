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

const useStyles = makeStyles(theme => ({
    main: {},
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    title: {
        flex: 1
    },
    icon: {
        marginRight: theme.spacing(2)
    },

}));

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
                        <Apps/>
                    </Avatar>
                    <Typography gutterBottom variant="h6" component="div" className={classes.title}>
                        {app.name}
                    </Typography>
                    <IconButton onClick={handleClick}>
                        <MoreVert/>
                    </IconButton>
                </div>

                <Typography variant="subtitle1" color="textSecondary" component="p">
                    Status:{app.status}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    Pid:{app.pid}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    AutoStart:{app.auto_start ? "Yes" : "No"}
                </Typography>
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
