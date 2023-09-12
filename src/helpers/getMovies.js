import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "a6bbce14252fdfe24f45475cb3dd1414",
        language: "en-US"
    }
})

export default movieDB