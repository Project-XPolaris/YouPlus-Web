import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        content:{
            padding: theme.spacing(2)
        },
        title:{
            padding:theme.spacing(2)
        },
        row:{
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        }
    }),
);
export default useStyles
