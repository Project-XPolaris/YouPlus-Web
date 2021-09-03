import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark
        },
        title:{
            padding:theme.spacing(2)
        },
        grid:{
            padding: theme.spacing(2)
        },
        item:{
            padding: theme.spacing(1)
        },
        content:{
            display: 'flex',
            padding: theme.spacing(2),
            flexDirection: "column"
        },
        listContainer:{
            width: "60vw",
            alignSelf: "center",
        },
        listHead:{
            backgroundColor: "#FAFAFA",
            padding: theme.spacing(2),
        },
        listTitle:{
            ...theme.typography.caption,
            fontSize: 18
        },
        diskTable:{
            flex: 1,
            overflow: 'scroll'
        },
        tableContainer:{
          height: "70vh",
        },
        tableHead:{
          backgroundColor: "#FAFAFA"
        },
        cellAvatar:{
            backgroundColor: theme.palette.primary.dark,
            marginRight: theme.spacing(2)
        },
        cell:{
            display: 'flex',
            alignItems: 'center'
        }
    }),
);
export default useStyles
