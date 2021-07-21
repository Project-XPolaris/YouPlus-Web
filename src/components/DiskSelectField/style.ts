import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        chip:{
            margin: theme.spacing(1)
        },
        select:{
            width:"100%"
        }
    }),
);
export default useStyles
