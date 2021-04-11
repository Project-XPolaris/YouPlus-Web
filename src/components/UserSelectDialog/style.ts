import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {},
    item: {
        width: theme.spacing(40)
    },
    icon:{
        backgroundColor: theme.palette.primary.dark
    }
}))
export default useStyles
