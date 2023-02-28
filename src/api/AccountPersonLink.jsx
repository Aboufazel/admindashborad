import axios from "axios";


const AccountPersonLink = axios.create({baseURL: "http://siavashma.ir"})


AccountPersonLink.interceptors.response.use()



export const GetByPersonId =(id)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountPersonLink.get(`/AccountPersonService/api/DefaultPersonLinks/GetAllByPersonId?PersonId=${id}` , {
        headers:{
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}


export const removePersonLinkId = (id)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return AccountPersonLink.delete(`/AccountPersonService/api/DefaultPersonLinks/remove?DefaultPersonLinkId=${id}`,
        {
            headers:{
                "selfuserid": `${final.userId}`,
                "token": `${final.accessToken}`
            }
        })
}



export const AddPersonLink = (personId , specId) =>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return AccountPersonLink({
        method:'post',
        url:'/AccountPersonService/api/DefaultPersonLinks/add',
        data:{
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

export const EditPersonLink= (personLinkId , personId ,specId)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountPersonLink({
        method:'put',
        url:'/AccountPersonService/api/DefaultPersonLinks/edit',
        data: {
            "DefaultPersonLinkId": +personLinkId,
            "DefaultPersonId": +personId,
            "AccountSpecId":+specId
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        },
    })
}


export default AccountPersonLink