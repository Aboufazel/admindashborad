import axios from "axios";


const AccountType = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountType.interceptors.response.use();



export const GetAllAccountType = ()=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountType.get("/AccountTypeService/api/AccountTypes/getall" , {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}