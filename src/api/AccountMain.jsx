import axios from "axios";

const AccountMain = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountMain.interceptors.response.use();



const AddAccountMain = ()=>{

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