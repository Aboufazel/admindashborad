
import axios from "axios";
import Storage from "../Service/Storage";
const st = Storage();

const Api = axios.create({
    baseURL:"http://siavashma.ir"
})


Api.interceptors.response.use()

export const LoginApi = (username , password)=>{

    return Api.get(`/UserService/api/Users/getbyusernamepassword?username=${username}&password=${password}`);
}

export const GetFromUser = (userId , token)=>{
    return Api.get(``)
}

export default Api;