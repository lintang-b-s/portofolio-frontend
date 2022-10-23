import axios from "axios"


export const axiosInstance = axios.create({
    baseURL : "https://portofolio-lintangbs.herokuapp.com/api/"
})


