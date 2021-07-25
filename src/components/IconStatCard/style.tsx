import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            display: "flex",
            alignItems:"center",
            width: "100%"
        },
        label:{
            ...theme.typography.subtitle2,
            fontSize:14,
            color:"#999999"
        },
        value:{
            ...theme.typography.h6,
        },
        info:{
            flex:1,
            marginRight: theme.spacing(2),
            textAlign: "left"
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        }
    }),
);
export default useStyles
