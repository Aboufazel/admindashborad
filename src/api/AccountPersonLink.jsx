import axios from "axios";


const AccountPersonLink = axios.create({baseURL: "http://siavashma.ir"})


AccountPersonLink.interceptors.response.use()



export const GetByPersonId =(id)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountPersonLink.get(`/AccountPersonService/api/DefaultPersonLinks/GetAllByPersonId?PersonId=13` , {
        headers:{
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}


export const EditPersonLink= (personLinkId , personId ,specId)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountPersonLink({
        method:'put',
        url:'/AccountPersonService/api/DefaultPersonLinks/add',
        data: {
            "DefaultPersonLinkId": +personLinkId,
            "DefaultPersonId": personId,
            "AccountSpecId":+specId
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        },
    })
}


export const GetDefaultPersonLinkById =(id)=>{
    return AccountPersonLink.get(`/AccountPersonService/api/DefaultPersonLinks/GetDefaultPersonLinkbyById?DefaultPersonLinkId=${id}`)
}


export default AccountPersonLink