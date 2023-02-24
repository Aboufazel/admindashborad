import axios from "axios";


const AccountDefaultPerson = axios.create({
    baseURL: "http://siavashma.ir"
})

export const GetAllDefault = () => {
    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);
    return AccountDefaultPerson.get("/AccountPersonService/api/DefaultPersons/getall" ,{
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    });
}


export const AddDefaultPerson = (code, name, canDelete) => {
    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);
    return AccountDefaultPerson({
        method: 'post',
        url: '/AccountPersonService/api/DefaultPersons/add',
        data: {
            "DefaultPersonCode": +code,
            "DefaultPersonName": `${name}`,
            "CanDelete": +canDelete,
            "lang": "fa",
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        }
    })
}


export const EditDefaultPerson = ( typeId, id, code, name, canDelete) => {
    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);
    return AccountDefaultPerson({
        method: 'put',
        url: '/AccountPersonService/api/DefaultPersons/edit',
        data: {
            "AccountTypeId":+typeId,
            "DefaultPersonId": +id,
            "DefaultPersonCode": +code,
            "DefaultPersonName": `${name}`,
            "CanDelete": +canDelete,
            "lang": "fa",
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        }
    })
}

export const GetForEditDefault = (id) =>{
    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);
    return AccountDefaultPerson.get(`/AccountPersonService/api/DefaultPersons/GetDefaultPerson?DefaultPersonId=${id}` , {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}


export const RemoveDefaultAccount = (id) => {
    const data = localStorage.getItem("auth");
    const final = JSON.parse(data);
    return AccountDefaultPerson.delete(`/AccountPersonService/api/DefaultPersons/remove?DefaultPersonId=${id}` ,{
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}

export default AccountDefaultPerson;