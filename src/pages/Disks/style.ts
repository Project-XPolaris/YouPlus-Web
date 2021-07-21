import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        title:{
            padding:theme.spacing(2)
        },
        grid:{
            padding: theme.spacing(2)
        },
        item:{
            padding: theme.spacing(1)
        }
    }),
);
export default useStyles
