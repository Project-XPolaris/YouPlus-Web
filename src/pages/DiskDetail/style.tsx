import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        content: {
            padding: theme.spacing(2)
        },
        title: {
            padding: theme.spacing(2)
        },
        tableSectionHeader: {
            padding: theme.spacing(2)
        },
        section: {
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
