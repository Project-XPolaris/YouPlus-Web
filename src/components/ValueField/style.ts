import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        label:{
            ...theme.typography.caption,
            color: "#6d6d6d"
        },
        value:{
            ...theme.typography.h5,
            overflowWrap: 'anywhere'
        }
    }),
);
export default useStyles
