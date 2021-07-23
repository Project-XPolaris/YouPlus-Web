import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%",
        },
        progress:{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
            width: theme.spacing(20)
        }
    })
)

export default useStyles
