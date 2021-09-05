import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        title:{
            padding:theme.spacing(2)
        },
        actions:{
            paddingLeft:theme.spacing(2),
            paddingRight:theme.spacing(2),
            display: 'flex',
            justifyContent: 'flex-end'
        },
        content:{
            display: 'flex',
            padding: theme.spacing(2),
            flexDirection: "column"
        },
        listContainer:{
            height: "70vh",
            width: "60vw",
            alignSelf: "center",
            display: 'flex',
            flexDirection: "column"
        },
        listHead:{
            backgroundColor: "#FAFAFA",
            padding: theme.spacing(2),
        },
        listTitle:{
            ...theme.typography.caption,
            fontSize: 18
        },
        listContent:{
            flexGrow: 1,
            overflow: 'auto'
        }
    }),
);
export default useStyles
