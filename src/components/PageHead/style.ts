import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            marginBottom: theme.spacing(2),
            backgroundColor:"#FFFFFF",
            borderRadius: 0,
            borderBottom: "rgba(0,0,0,0.12) 1px solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: 'sticky',
            top:0,
            zIndex: theme.zIndex.appBar
        },
        top:{
            display: "flex",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(2)
        },
        topLeft:{
            flex:1
        },
        topRight:{
          alignSelf: 'right',
            display: 'flex'
        },
        avatar:{
            backgroundColor: theme.palette.primary.dark,
            cursor: 'pointer'
        },
        actionIcon:{
            color: "#757575",
            marginRight: theme.spacing(1)
        },
        titleContainer:{
            display: 'flex',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        title:{
            ...theme.typography.h4,
            flexGrow: 1,
            color: "rgba(0,0,0,.58)",
            fontWeight: 300
        },
    })
)

export default useStyles