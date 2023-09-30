import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  method: 'GET', // Método (Verbo) HTTP
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: "a6bbce14252fdfe24f45475cb3dd1414",
    language: "en-US",
  }
});

// const fetchMovieData = async (url, options = {}) => {
//   try {
//     const response = await movieDB.get(url, options);
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

export default movieDB;
