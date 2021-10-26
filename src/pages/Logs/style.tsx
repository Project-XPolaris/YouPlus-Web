import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        content: {
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
        tableContainer:{
            display: 'flex',
            flexDirection: 'column'
        },
        thead:{
            backgroundColor:"#FAFAFA"
        },
        table:{
            flex:1
        },
        filterRow:{
            marginBottom: theme.spacing(2),
            display: 'flex'
        },
        levelSelect:{
            width: theme.spacing(60)
        },
        selectionChipContainer:{
            padding: theme.spacing(1),
            borderRadius: theme.spacing(2),
            backgroundColor: "#FEFEFE"
        }

    }),
);
export default useStyles
