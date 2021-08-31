import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        contentWrap:{
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
            fontSize: 14,
            fontWeight: 200,
            color: "#212121",
            textTransform: 'uppercase'
        },
        sectionContent:{
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    }),
);
export default useStyles
