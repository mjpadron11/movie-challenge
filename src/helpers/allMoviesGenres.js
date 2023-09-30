import axios from "axios";

const apiKey = "a6bbce14252fdfe24f45475cb3dd1414";
const apiUrl = "https://api.themoviedb.org/3";

const getAllMovieGenres = async () => {
  try {
    const response = await axios.get(`${apiUrl}/genre/movie/list`, {
      params: {
        api_key: apiKey,
      },
    });

    // Genre data will be inside response.data.genres
    const genres = response.data.genres;
    return genres;
  } catch (error) {
    console.error("Error obtaining movies genres:", error);
    throw error;
  }
};

export default getAllMovieGenres;
