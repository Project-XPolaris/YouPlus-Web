import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {Apps} from "@material-ui/icons";
import {App} from "../../api/apps";

const useStyles = makeStyles(theme => ({
    main: {},
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    icon:{
         marginRight: theme.spacing(2)
    },

}));

interface AppCardPropsType {
    app:App
}


export default function AppCard({app}: AppCardPropsType) {
    const classes = useStyles();

    return (
        <Card className={classes.main}>
            <CardContent>
                <div className={classes.header}>
                    <Avatar className={classes.icon}>
                        <Apps />
                    </Avatar>
                    <Typography gutterBottom variant="h5" component="div">
                        {app.name}
                    </Typography>
                </div>

                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {app.status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Start</Button>
                <Button size="small">Stop</Button>
            </CardActions>
        </Card>
    );
}
