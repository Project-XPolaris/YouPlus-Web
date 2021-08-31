import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        invalidateArg:{
            color:red[600]
        }
    })
)

export default useStyles
