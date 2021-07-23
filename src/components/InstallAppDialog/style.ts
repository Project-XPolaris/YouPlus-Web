import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        width: "60vw",
        height: "70vh",
        backgroundColor:"#EEE",
    },
    actions:{
        backgroundColor: "white",
        display: 'flex',
        justifyContent:"space-between",
        alignItems: 'center'
    }
}))
export default useStyles
