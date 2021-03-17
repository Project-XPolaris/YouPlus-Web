import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            marginTop:theme.spacing(6)
        },
    }),
);
export default useStyles
