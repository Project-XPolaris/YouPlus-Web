import {useHistory} from "react-router-dom";

export interface AuthLayoutPropsType {
    children:any
}

const AuthLayout = ({children}: AuthLayoutPropsType) => {
    const history = useHistory()
    const tokenStr  = localStorage.getItem("token")
    if (!tokenStr) {
        history.replace("/login")
    }
    return (
        children
    )
}

export default AuthLayout;