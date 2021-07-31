import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        title:{
            padding:theme.spacing(2)
        },
        content:{
            margin: theme.spacing(2)
        },
        section:{
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
