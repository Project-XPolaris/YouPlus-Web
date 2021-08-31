import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        header:{
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        pageHead:{

        },
        content:{
            padding: theme.spacing(2)
        },
        title:{
            flexGrow: 1,
            ...theme.typography.h4
        },
        tabs:{

        }
    }),
);
export default useStyles
