import axios from "axios";

const createAxios = axios.create({
    baseURL: "http://localhost:3000/Viagens/"
})

export default createAxios