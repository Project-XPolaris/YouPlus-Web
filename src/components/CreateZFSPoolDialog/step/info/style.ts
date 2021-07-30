import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        item:{
            marginBottom: theme.spacing(1)
        }
    })
)

export default useStyles
