import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        header:{
            padding: theme.spacing(2)
        }
    }),
);
export default useStyles
