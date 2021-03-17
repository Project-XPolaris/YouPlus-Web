import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        chip:{
            margin: theme.spacing(1)
        },
        addAction:{
            marginTop: theme.spacing(2),
            display: 'flex',
            alignItems: 'center'
        },
        addButton:{
            marginLeft: theme.spacing(2)
        }
    }),
);
export default useStyles
