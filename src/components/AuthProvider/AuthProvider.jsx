import React from "react";
import {Navigate} from "react-router-dom";
import Storage from "../../Service/Storage";


const AuthProvider = ({children}) => {
    const storage = Storage();
    console.log("storage");
    console.log(storage);
    const admin = 4;

    if (storage.accessToken === null) {
        return <Navigate to={"/login"}/>;
    }else if (storage.kind !== admin){
        return <Navigate to={"/app"}/>;
    }
    return (
        <>
            {children}
        </>
    )

};

export default AuthProvider;
