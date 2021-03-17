import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflowY:'auto'
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
    }),
);
export default useStyles
