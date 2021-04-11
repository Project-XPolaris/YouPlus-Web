import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    label:{
        ...theme.typography.caption,
    },
    name:{
        ...theme.typography.h6
    }
}))
export default useStyles
