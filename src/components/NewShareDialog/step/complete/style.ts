import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        field:{
            marginTop: theme.spacing(2)
        }
    }),
);
export default useStyles
