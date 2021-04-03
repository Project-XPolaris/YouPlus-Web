import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    content:{
        marginTop: theme.spacing(2)
    },
    card:{
        minWidth: theme.spacing(20)
    }
}))
export default useStyles
