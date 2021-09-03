import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        title:{
            padding:theme.spacing(2)
        },
        section:{
            marginBottom: theme.spacing(2)
        },
        content:{
            display: 'flex',
            padding: theme.spacing(2),
            flexDirection: "column"
        },
        listContainer:{
            height: "40vh",
            width: "60vw",
            alignSelf: "center",
            marginBottom: theme.spacing(4),
            display: "flex",
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
        networkContent:{
            display: 'flex',
            flex: 1
        },
        networkContentLeft:{
            flex:1
        },
        label:{
            ...theme.typography.subtitle1,
            padding: "16px 16px 0px 16px",
            color: "rgba(0,0,0,.32)",
            fontSize: 14
        },
        networkContentRight:{
            width: theme.spacing(60),
            padding: theme.spacing(2),
            borderLeft: "rgba(0,0,0,0.05) 1px solid"
        },
        valueContainer:{
            marginBottom: theme.spacing(2)
        },
        valueLabel:{
            ...theme.typography.subtitle1,
            color: "rgba(0,0,0,.48)",
            fontSize: 14
        },
        value:{
            ...theme.typography.subtitle1,
            fontSize: 16,
        }
    }),
);
export default useStyles
