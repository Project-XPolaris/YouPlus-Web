import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding:theme.spacing(2),
        paddingBottom: theme.spacing(1)
    },
    label:{
        ...theme.typography.caption,
        color: "grey"
    },
    value:{
        ...theme.typography.h4,
        marginTop: theme.spacing(1)
    },
    bottom:{
        display: 'flex',
        flexDirection: 'row-reverse'
    }
}))
export default useStyles
