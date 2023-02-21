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
    return AccountDefaultPerson({
        method: 'post',
        url: '/AccountPersonService/api/DefaultPersons/add',
        data: {
            "DefaultPersonCode": +code,
            "DefaultPersonName": `${name}`,
            "CanDelete": canDelete,
            "lang": "fa",
        }
    })
}


export const EditDefaultPerson = (id, code, name, canDelete) => {
    return AccountDefaultPerson({
        method: 'put',
        url: '/AccountPersonService/api/DefaultPersons/edit',
        data: {
            "DefaultPersonId": +id,
            "DefaultPersonCode": +code,
            "DefaultPersonName": `${name}`,
            "CanDelete": canDelete,
            "lang": "fa",
        }
    })
}

export const GetForEditDefault = (id) =>{
    return AccountDefaultPerson.get(`/AccountPersonService/api/DefaultPersons/GetDefaultPerson?DefaultPersonCode=${id}`)
}

export default AccountDefaultPerson;