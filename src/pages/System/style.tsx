import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        title:{
            padding:theme.spacing(2)
        },
        actionCardTitle:{

        },
        item:{
            padding: theme.spacing(1)
        }
    }),
);
export default useStyles
