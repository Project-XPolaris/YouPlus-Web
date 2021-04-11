import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding:theme.spacing(2)
    },
    title:{
        ...theme.typography.h4
    },
    nameCard:{

        marginTop: theme.spacing(4)
    },
    userListItem:{
        padding: 0
    },
    userListHeader:{
        display: 'flex',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        alignItems: 'center'
    },
    userList:{
        height:theme.spacing(40),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    usersListTitle:{
        ...theme.typography.caption,
        fontSize: 14,
        fontWeight: 500,
        color: '#808080',
       flexGrow:1
    },
    userListIcon:{
      backgroundColor: theme.palette.primary.dark
    },
    grid:{
        marginBottom: theme.spacing(2)
    }
}))
export default useStyles
