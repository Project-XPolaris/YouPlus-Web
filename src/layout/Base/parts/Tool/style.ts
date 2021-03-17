import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        title:{
            flexGrow: 1,
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark,
            cursor: 'pointer'
        }
    }),
);
export default useStyles
