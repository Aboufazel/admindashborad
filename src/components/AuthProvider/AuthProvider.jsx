import React from "react";
import {Navigate} from "react-router-dom";
import Storage from "../../Service/Storage";


const AuthProvider = ({children}) => {
    const storage = Storage();

    if (storage.accessToken === "") {
        return <Navigate to={"/login"}/>;
    }
    return (
        <>
            {children}
        </>
    )

};

export default AuthProvider;
