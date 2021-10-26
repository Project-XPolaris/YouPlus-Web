import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {display: 'flex', alignItems: 'center'},
        chip: {
            marginRight: theme.spacing(1)
        },
        selectCard:{
            padding: theme.spacing(2)
        },
        optionContent:{
            minWidth: theme.spacing(40),
            minHeight: theme.spacing(20),
            marginTop: theme.spacing(2)
        },
        label:{
            marginRight: theme.spacing(2)
        }
    }),
);
export default useStyles
