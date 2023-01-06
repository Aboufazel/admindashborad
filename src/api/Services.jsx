
import axios from "axios";


const Api = axios.create({
    baseURL:"http://siavashma.ir"
})

const userAccessData = localStorage.getItem("auth");

// for setup header data from localStorage

const config = {
    headers:{
        selfUserId: userAccessData.userId,
        token:userAccessData.token,
    }
}

Api.interceptors.response.use()


//use for user login

export const LoginApi = (username , password)=>{

    return Api.get(`/UserService/api/Users/getbyusernamepassword?username=${username}&password=${password}`);
}




export const GetAllFromUser = ()=>{
    return Api.get(`/UserService/api/Users/getall` , {config})
}


export const GetById = (idCode)=>{
    return Api.get(`/UserService/api/Users/getbyid?useid=${idCode}` , {config})
}

export default Api;