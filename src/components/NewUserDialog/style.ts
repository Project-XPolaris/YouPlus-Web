import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        content:{
            width: theme.spacing(40)
        },
        input:{
            marginBottom:theme.spacing(2)
        }
    }),
);
export default useStyles
