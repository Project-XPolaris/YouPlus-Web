import useStyles from "./style";
import {Button, Paper, TextField} from "@material-ui/core";
import useUserModel from "../../model/user";
import {useState} from "react";
import {useSnackbar} from "notistack";
import {useHistory} from "react-router-dom";
import {useLocalStorageState} from "ahooks";

export interface LoginPagePropsType {

}

const LoginPage = ({}: LoginPagePropsType) => {
    const history = useHistory()
    const {enqueueSnackbar} = useSnackbar();
    const [username, setUsername] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [serviceUrl,setServiceUrl] = useState<string | undefined>("http://localhost:8999")
    const classes = useStyles()
    const model = useUserModel()
    const onLoginClick = async () => {
        if (username && password && serviceUrl) {
            localStorage.setItem("apiUrl",serviceUrl)
            const result = await model.login(username, password)
            console.log(result)
            if (result.success) {
                enqueueSnackbar("Login success", {variant: 'success'})
                history.replace("/")
            } else {
                enqueueSnackbar(`Login failed:${result.message}`, {variant: 'error'})
            }
        }
    }
    return (
        <div className={classes.root}>

            <Paper className={classes.loginContainer}>
                <div className={classes.loginHeader}>
                    <div className={classes.title}>
                        YouPlus
                    </div>
                    <div className={classes.sub}>
                        ProjectXPolaris
                    </div>
                </div>
                <div className={classes.loginForm}>
                    <TextField
                        label={"ServiceUrl"}
                        fullWidth
                        variant={"outlined"}
                        value={serviceUrl}
                        className={classes.input}
                        onChange={(e) => setServiceUrl(e.target.value)}
                    />
                    <TextField
                        label={"Username"}
                        fullWidth
                        variant={"outlined"}
                        value={username}
                        className={classes.input}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label={"Password"}
                        fullWidth
                        variant={"outlined"}
                        className={classes.input}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant={'contained'} fullWidth className={classes.loginBtn} onClick={onLoginClick}>Login
                        in </Button>
                </div>
            </Paper>
        </div>
    )
}

export default LoginPage;