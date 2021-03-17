import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        content:{
            width: theme.spacing(100),
            height: theme.spacing(60)
        },
        field:{
            marginTop: theme.spacing(2)
        },
        fieldArea: {
            backgroundColor: '#EEEEEE',
            padding: theme.spacing(2),
            borderRadius: theme.spacing(2),
        },
    }),
);
export default useStyles
