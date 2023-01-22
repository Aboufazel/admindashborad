import axios from "axios";

const AccountSpec = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountSpec.interceptors.response.use()


export const GetAllAccountSpec = () => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountSpec.get('/AccountSpecService/api/AccountSpecs/getall', {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}

export const AddAccountSpec = (specCode , specName,MainId) => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);

    return AccountSpec({
        method: "post",
        url: "/AccountSpecService/api/AccountSpecs/add",
        data: {
            "AccountSpecCode": +specCode,
            "AccountSpecName": `${specName}`,
            "AccountMainId":MainId,
            "lang": "fa",
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`,
            'Content-Type': 'application/json'
        },
    })
}


export default AccountSpec;