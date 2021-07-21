import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        list:{
            marginTop: theme.spacing(2)
        },
        deleteDialogContent:{
            width:theme.spacing(50),
            [theme.breakpoints.down('md')]: {
                width:"70vw",
            },
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        deleteDialogItem:{
            marginTop: theme.spacing(2),
            backgroundColor: '#EEEEEE',
        }
    }),
);
export default useStyles
