import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        content:{
            width: theme.spacing(100),
            [theme.breakpoints.down('md')]: {
                width: "80vw",
            },
            height: theme.spacing(60),
            backgroundColor: '#FAFAFA'
        },
        field:{
            marginTop: theme.spacing(2)
        },
        fieldArea: {

        },
        label:{
            fontSize:18
        },
        divider:{
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        action:{
            display: "flex",
            justifyContent: "space-between"
        },
        stepView:{
            padding: theme.spacing(2)
        }
    }),
);
export default useStyles
