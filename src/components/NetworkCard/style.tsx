import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'left'
        },
        main:{
            padding: theme.spacing(2)
        },
        header:{
            display: "flex",
            alignItems: "center"
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        title:{
            ...theme.typography.h6,
            marginLeft: theme.spacing(2)
        },
        row:{
            marginTop: theme.spacing(1)
        },
        content:{
            marginTop: theme.spacing(2)
        }
    }),
);
export default useStyles
