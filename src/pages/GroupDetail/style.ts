import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    content:{
        padding:theme.spacing(2)
    },
    header:{
        display: 'flex'
    },
    title:{
        flexGrow: 1
    },
    userList:{
        marginTop: theme.spacing(4),
    },
}))
export default useStyles
