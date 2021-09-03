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
        },
        devTreeContainer:{
            height: theme.spacing(60)
        },
        paperLabel:{
            ...theme.typography.subtitle1,
            border: "none",
            padding: theme.spacing(2),
            color:"rgba(0,0,0,.64)",
            backgroundColor: "#FAFAFA"
        }
    }),
);
export default useStyles
