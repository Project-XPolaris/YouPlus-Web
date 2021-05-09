import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: theme.spacing(40)
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark,
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
