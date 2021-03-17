import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    main: {},
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    title: {
        flex: 1,
        fontSize: 16
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    appicon:{
        width: theme.spacing(8),
        height: theme.spacing(8)
    },
    status:{
        ...theme.typography.h6,
        color: '#2a2a2a'
    }

}));
export default useStyles