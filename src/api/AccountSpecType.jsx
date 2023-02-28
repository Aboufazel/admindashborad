import axios from "axios";
import AccountMain from "./AccountMain";


const AccountSpecType = axios.create({
        baseURL: "http://siavashma.ir"
    }
)

AccountSpecType.interceptors.response.use();


export const removeAccountSpecType = (id)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountSpecType.delete(`/AccountTypeService/api/AccountTypeSpecs/remove?AccountTypeSpecId=${id}` , {
        headers:{
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}


export const GetAllTypeSpec =()=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountSpecType.get("/AccountTypeService/api/AccountTypeSpecs/getall" , {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}



export const GetTypeSpecById =(id)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountSpecType.get(`/AccountTypeService/api/AccountTypeSpecs/GetAllAccountTypeSpecByAccountTypeId/${+id}` , {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}



export const AddAccountSpecType = (SpecId , TypeId) =>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountMain({
            method:"post",
            url:"/AccountTypeService/api/AccountTypeSpecs/add",
            data: {
                "AccountSpecId": SpecId,
                "AccountTypeId":TypeId,
                "lang": "fa",
            },
            headers: {
                "selfuserid": `${final.userId}`,
                "token": `${final.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
}


export const GetAccountTypeSpec = (id) =>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountSpecType.get(`/AccountMainService/api/AccountMains/GetAccountMainCode?AccountMainCode=${id}`, {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}






export default AccountSpecType;