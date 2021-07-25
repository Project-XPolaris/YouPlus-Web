import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        header:{
            padding: theme.spacing(2)
        },
        chart:{
            padding: theme.spacing(4),
            textAlign: "center"
        },
        content:{
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: "center",
        },
        info :{
            marginLeft: theme.spacing(2),
            flex:1
        },
        item:{
            marginBottom: theme.spacing(1)
        },
        label:{
            ...theme.typography.subtitle2,
            fontSize:14,
            color:"#999999"
        },
        value:{
            ...theme.typography.subtitle1
        }
    }),
);
export default useStyles
