import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        width: "100%",
        textAlign:"left",
        minHeight: theme.spacing(12)
    },
    info:{
        flex:1,
        fontSize:16
    },
    model:{
      overflowWrap: "anywhere"
    },
    avatar:{
        marginLeft: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark
    }
}))
export default useStyles
