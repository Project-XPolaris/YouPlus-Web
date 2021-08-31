import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    content:{
        padding: theme.spacing(2)
    },
    sectionTitle:{
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(2),
        ...theme.typography.h6
    }
}))
export default useStyles
