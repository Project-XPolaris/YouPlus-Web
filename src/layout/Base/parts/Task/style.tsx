import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        content:{
            padding: theme.spacing(2),
            backgroundColor: '#EEEEEE',
            minWidth: theme.spacing(40),
            minHeight: theme.spacing(40),
        },
        item:{
            marginBottom: theme.spacing(2)
        },
        empty:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: "#999999",
            height: theme.spacing(40),
        },
        icon:{
            fontSize: theme.spacing(8)
        }
    }),
);
export default useStyles
