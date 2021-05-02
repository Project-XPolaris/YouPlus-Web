import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        header:{
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        title:{
            flexGrow: 1,
            ...theme.typography.h4
        }
    }),
);
export default useStyles
