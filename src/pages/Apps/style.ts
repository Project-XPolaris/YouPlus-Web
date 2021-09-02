import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
        },
        header:{
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        pageHead:{

        },
        content:{
            padding: theme.spacing(2),
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        title:{
            flexGrow: 1,
            ...theme.typography.h4
        },
        tabs:{

        },
        appListContainer:{
            width: "50vw",
            height: theme.spacing(80),
            alignSelf: "center"
        },
        appListHeader:{
            backgroundColor: "#FAFAFA",
            padding: theme.spacing(2)
        },
        appTypeFilter:{
            minWidth: theme.spacing(20)
        },
        appList:{
            height: "100%",
            width: "100%"
        }
    }),
);
export default useStyles
