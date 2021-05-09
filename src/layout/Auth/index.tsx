import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {DefaultNotificationManager} from "../../ws";

export interface AuthLayoutPropsType {
    children:any
}

const AuthLayout = ({children}: AuthLayoutPropsType) => {
    const history = useHistory()
    const tokenStr  = localStorage.getItem("token")
    useEffect(() => {
        const apiUrl  = localStorage.getItem("apiUrl")
        if (apiUrl) {
            DefaultNotificationManager.connectWs()
        }
    },[])
    if (!tokenStr) {
        history.replace("/login")
        return null;
    }

    return (
        children
    )
}

export default AuthLayout;
