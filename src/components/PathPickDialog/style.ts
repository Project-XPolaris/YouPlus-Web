import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 0
        },
        header:{
            padding: theme.spacing(2),
            backgroundColor: "#FAFAFA",
            display: "flex",
            alignSelf: 'center',
            width: "60vh"
        },
        pathInput:{
          flexGrow: 1,
            alignSelf: "center"

        },
        backButton:{
            marginRight: theme.spacing(2),
            alignSelf: "center"
        },
        goButton:{
            marginLeft: theme.spacing(2),
            alignSelf: "center"

        },
        list:{
            height: "40vh"
        }
    })
)

export default useStyles