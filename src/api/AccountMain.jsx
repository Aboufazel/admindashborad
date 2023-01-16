import axios from "axios";

const AccountMain = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountMain.interceptors.response.use()