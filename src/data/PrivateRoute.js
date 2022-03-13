import { Navigate } from "react-router-dom";
import { isLoggedIn, useAuth } from "./UseAuth";

export const PrivateRoute = ({children}) => {
    const { authToken } = useAuth();

    return authToken ? children : <Navigate to ="/login"/>
}

export const ToUserPost = () => {
    if(isLoggedIn){
        <Navigate to ="/homepage/postquestion"/>
    } else {
        <Navigate to ="/login"/>
    }
}

export const RestrictedRoute = ({children}) => {
    const { authToken } = useAuth();

    return authToken ? <Navigate to = {-1} /> : children;
}