import React from "react";
import {useNavigate} from "react-router-dom";
import Storage from "../../Service/Storage";


const AuthProvider = ({children}) => {
    const storage = Storage();
    const navigate = useNavigate();

    if (storage.userId === undefined) {
        navigate("/login")
    }

    return (
        <>
            {children}
        </>
    )

};

export default AuthProvider;
