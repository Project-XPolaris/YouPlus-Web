import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        content: {
            height: theme.spacing(60),
            display: 'flex',
            flexDirection: 'column'
        },
        stepper: {
            marginTop: theme.spacing(2),
            overflowX: 'auto'
        },
        stepContent: {
            width: "100%",
            height: "100%",
        }
    }),
);
export default useStyles
