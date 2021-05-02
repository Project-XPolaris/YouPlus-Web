import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      padding:theme.spacing(2),
      display:"flex",
      flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        ...theme.typography.h6
    }
}))
export default useStyles
