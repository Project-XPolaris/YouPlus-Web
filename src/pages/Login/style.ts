import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw', height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EEEEEE'
        },
        title:{
            ...theme.typography.h4,
            color:theme.palette.primary.contrastText,
            marginTop: theme.spacing(8)
        },
        sub:{
            ...theme.typography.caption,
            color:theme.palette.primary.contrastText
        },
        loginContainer:{
            width: theme.spacing(40)
        },
        loginHeader:{
            padding:theme.spacing(2),
            backgroundColor: theme.palette.primary.dark,
            display: 'flex',
            flexDirection: 'column'
        },
        loginForm:{
            padding:theme.spacing(2),
            marginTop: theme.spacing(2)
        },
        input:{
            marginBottom: theme.spacing(3)
        },
        loginBtn:{
            marginTop:theme.spacing(2)
        }
    }),
);
export default useStyles
