import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        label: {
            ...theme.typography.caption,
            marginBottom: theme.spacing(1)
        },
        field:{
            marginTop: theme.spacing(2)
        },
        fieldArea: {
            backgroundColor: '#EEEEEE',
            padding: theme.spacing(2),
            borderRadius: theme.spacing(2),
        },
        chip: {
            margin: theme.spacing(1)
        },
        addAction: {
            marginTop: theme.spacing(2),
            display: 'flex',
            alignItems: 'center'
        },
        addButton: {
            marginLeft: theme.spacing(2)
        }
    }),
);
export default useStyles
