import axios from "axios";


const AccountGroup = axios.create({
        baseURL: "http://siavashma.ir"
    }
)
AccountGroup.interceptors.response.use()

export const GetAllAccountGroup = () => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountGroup.get('/AccountGroupService/api/AccountGroups/getall', {
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}


export const AddAccountGroup = (groupCode, groupName) => {
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountGroup.post('/AccountGroupService/api/AccountGroups/add', {
       body: {
            "AccountGroupCode":groupCode,
            "AccountGroupName":groupName,
            "lang": "fa",
        },
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        },
    })
}
export const DeleteAccountGroup = (groupId)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountGroup.delete(`/AccountGroupService/api/AccountGroups/remove?AccountGroupId=${groupId}`,{
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}

export const EditIsActive = (groupId , isActive)=>{
    const data = localStorage.getItem("auth")
    const final = JSON.parse(data);
    return AccountGroup.put(`/AccountGroupService/api/AccountGroups/EditIsActive?AccountGroupId=${groupId}&IsActive=${isActive}`,{
        headers: {
            "selfuserid": `${final.userId}`,
            "token": `${final.accessToken}`
        }
    })
}

export default AccountGroup;