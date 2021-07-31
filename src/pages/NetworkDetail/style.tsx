import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center'
        },
        center:{
            minWidth: '60vw'
        },
        title:{
            padding:theme.spacing(2),

        },
        content:{
            padding: theme.spacing(2),
        },
        sectionTitle:{
            ...theme.typography.subtitle1,
            fontWeight: 600
        },
        sectionContent:{
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
