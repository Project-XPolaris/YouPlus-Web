import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        title:{
            padding:theme.spacing(2)
        }
    }),
);
export default useStyles
