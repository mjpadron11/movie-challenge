import React, { useState, useEffect, createContext, useContext } from 'react';
import movieDB from '../helpers/getMovies.js';

export const appContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentPosterPath, setCurrentPosterPath] = useState(null);

  const [movieState, setMoviesState] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    allMovies: [],
  });

  const getMovieDetails = async (movieId) => {
    const response = await movieDB.get(`movie/${movieId}`);
    const movieDetails = response.data;
  
    const movieWithDetails = {
      ...movieDetails,
      genre: movieDetails.genres,
      homepage: movieDetails.homepage,
      tagline: movieDetails.tagline,
    };
    console.log(movieWithDetails)
    return movieWithDetails;
  };

  const getAllMoviesWithDetails = async () => {
    const nowPlayingResponse = await movieDB.get('movie/now_playing');
    const popularResponse = await movieDB.get('movie/popular');
    const topRatedResponse = await movieDB.get('movie/top_rated');
    const upcomingResponse = await movieDB.get('movie/upcoming');
    const allMoviesResponse = await movieDB.get('discover/movie');

    const nowPlayingMovies = await Promise.all(
      nowPlayingResponse.data.results.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, ...details };
      })
    );

    const popularMovies = await Promise.all(
      popularResponse.data.results.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, details };
      })
    );

    const topRatedMovies = await Promise.all(
      topRatedResponse.data.results.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, details };
      })
    );

    const upcomingMovies = await Promise.all(
      upcomingResponse.data.results.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, details };
      })
    );

    const allMovies = await Promise.all(
      allMoviesResponse.data.results.map(async (movie) => {
        const details = await getMovieDetails(movie.id);
        return { ...movie, details };
      })
    );

    setMoviesState({
      nowPlaying: nowPlayingMovies,
      popular: popularMovies,
      topRated: topRatedMovies,
      upcoming: upcomingMovies,
      allMovies: allMovies,
    });

    setLoading(false);
  };

  useEffect(() => {
    getAllMoviesWithDetails();
  }, []);

  useEffect(() => {
    const maxIndex = movieState.popular.length - 1;
    const interval = setInterval(() => {
      setCurrentPosterIndex((prevIndex) => {
        if (prevIndex === maxIndex) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [currentPosterIndex, movieState.popular]);

  useEffect(() => {
    setCurrentMovie(movieState.popular[currentPosterIndex]);
    setCurrentPosterPath(movieState.popular[currentPosterIndex]?.poster_path);
  }, [currentPosterIndex, movieState.popular]);

  const initialState = {
    loading,
    currentPosterIndex,
    currentMovie,
    currentPosterPath,
    movieState,
  };

  const setStates = () => {
    return {
      setLoading,
      setCurrentPosterIndex,
      setCurrentMovie,
      setCurrentPosterPath,
      setMoviesState,
    };
  };

  const state = {
    ...initialState,
    effects: {
      ...setStates(),
    },
  };

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
};

export default ContextProvider;
