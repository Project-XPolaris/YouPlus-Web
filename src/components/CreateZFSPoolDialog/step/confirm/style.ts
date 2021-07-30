import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        info:{
            marginBottom: theme.spacing(2)
        },
        vdev:{
            marginTop: theme.spacing(2)
        }
    })
)

export default useStyles
