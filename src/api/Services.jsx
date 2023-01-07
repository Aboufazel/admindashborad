import axios from "axios";




const Api = axios.create({
    baseURL:"http://siavashma.ir"
})


Api.interceptors.response.use();





export default Api;