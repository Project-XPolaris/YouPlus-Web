import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        content: {

            [theme.breakpoints.down('md')]: {
                width: "70vw"
            },
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(40),
            }

        },
        input: {
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
