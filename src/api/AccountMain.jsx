import axios from "axios";

const AccountMain = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountMain.interceptors.response.use();



export const AddAccountMain = (mainCode , mainName , mainId)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
     return AccountMain({
         method:"post",
         url:"/AccountMainService/api/AccountMains/add",
         data: {
             "AccountMainId":+mainId,
             "AccountGroupCode": +mainCode,
             "AccountGroupName": `${mainName}`,
             "lang": "fa",
         },
         headers: {
             "selfuserid": `${final.userId}`,
             "token": `${final.accessToken}`,
             'Content-Type': 'application/json'
         },
     })
}


export const GetAllAccountMain = ()=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountMain.get("/AccountMainService/api/AccountMains/getall" , {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}








export default AccountMain;