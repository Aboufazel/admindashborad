
import axios from "axios";
import {useEffect, useState} from "react";


const Api = axios.create({
    baseURL:"http://siavashma.ir"
})



// for setup header data from localStorage



Api.interceptors.response.use()


//use for user login

export const LoginApi = (username , password)=>{

    return Api.get(`/UserService/api/Users/getbyusernamepassword?username=${username}&password=${password}`);
}




//use for get All contact
export const GetAllFromUser = (userid , token)=>{

    return Api.get(`/UserService/api/Users/getall` , {userid , token})
}


//use for get contact by id
export const GetById = (userid , token )=>{


    return Api.get(`/UserService/api/Users/getbyid?useid=${userid}` , {userid , token})
}

export default Api;