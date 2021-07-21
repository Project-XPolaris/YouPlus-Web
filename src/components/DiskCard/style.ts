import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        width: "100%",
        textAlign:"left"
    },
    info:{
        flex:1,
        fontSize:16
    },
    avatar:{
        marginLeft: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    }
}))
export default useStyles
