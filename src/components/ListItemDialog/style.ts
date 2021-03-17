import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        deleteDialogContent:{
            width:theme.spacing(50)
        },
        deleteDialogItem:{
            marginTop: theme.spacing(2),
            backgroundColor: '#EEEEEE',
        }
    }),
);
export default useStyles
