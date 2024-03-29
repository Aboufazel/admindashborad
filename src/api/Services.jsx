import axios from "axios";


//api axios base url
const Api = axios.create({
    baseURL: "http://siavashma.ir"
})


// for setup header data from localStorage
Api.interceptors.response.use()


//use for user login

export const LoginApi = (username, password) => {

    return Api.get(`/UserService/api/Users/getbyusernamepassword?username=${username}&password=${password}`);
}


//use for get All contact
export const GetAllFromUser = (userid, token) => {

    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);

    return Api.get(`/UserService/api/Users/getall`, {

        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }

    })
}


//use for get contact by id
export const GetById = (userid) => {

    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return Api.get(`/UserService/api/Users/getbyid?userid=${userid}`, {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}

//use for edit user
export const Edit = (userid, usertype, owner, username, password, mobile, email, kind , business) => {

    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return Api( {
        method:"put",
        url:'/UserService/api/Users/edit',

        data: {
            "userId": userid,
            "userTypeId": usertype,
            "userOwnerId": owner,
            "UserName": username,
            "PassWord": "",
            "Mobile": mobile,
            "Email": email,
            "kind": kind,
            "businessName":business
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json',
        },

    })
}

//use for delete user
export const deleteUser = (userid) => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    Api.delete(`/UserService/api/Users/Delete?userId=${userid}`, {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}

//use for create user
export const CreateNewUser = (username, password, email , job) => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return Api({
        method: 'post',
        url: '/UserService/api/Users/add',
        data: {
            "userTypeId": 0,
            "userOwnerId": 0,
            "userName": `${username}`,
            "passWord": `${password}`,
            "mobile": `${username}`,
            "email": `${email}`,
            "kind": 1,
            "businessName": `${job}`,
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        },
    })
}


export const forgetPass =(userName)=>{


    return Api({
        method:"put",
        url: '/userservice/api/users/forgetpassword?username='+userName,

    })
}


export const VerifyCode = (code , userId)=>{
    return Api({
        method:"put",
        url:`/userservice/api/users/EditVerify?verify=${+code}&userid=${+userId}`,
    })
}



export const ChangeUserPassword = (oldPass , newPass)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return Api({
        method: 'put',
        url: `/UserService/api/Users/changePassword?userId=${+final.userId}&oldPassword=${oldPass}&newPassWord=${newPass}`,
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        },
    })
}

export const EditStatus = (userId , isActive ) => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return Api({
        method: 'PUT',
        url: '/userservice/api/users/EditStatus',
        params: {
            "UserId": userId,
            "status": isActive
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        }
    })
}
export default Api;