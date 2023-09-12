import React, { useState, useEffect, createContext, useContext } from 'react';
import movieDB from '../helpers/getmovies';

export const appContext = React.createContext()

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
})

  const getMovies = async () => {
    const nowPlaying = movieDB.get('movie/now_playing');
    const popular = movieDB.get('movie/popular');
    const topRated = movieDB.get('movie/top_rated');
    const upcoming = movieDB.get('movie/upcoming');
    const allMovies = movieDB.get('discover/movie')

    const movieList = [nowPlaying, popular, topRated, upcoming, allMovies]

    const resp = await Promise.all(movieList)

    setMoviesState ({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
      allMovies: resp[4].data.results,
    })
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    const maxIndex = movieState.popular.length - 1;
    const interval = setInterval(() => {
      setCurrentPosterIndex((prevIndex) => {
        if (prevIndex === maxIndex) {
          // Si el índice actual es igual al índice máximo, vuelve a empezar desde cero.
          return 0;
        } else {
          // De lo contrario, incrementa el índice actual en 1.
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
    movieState
	}

	const setStates = () => {
		return {
			setLoading,
			setCurrentPosterIndex,
			setCurrentMovie,
			setCurrentPosterPath,
      setMoviesState
		}
	}

	const state = {
		...initialState, 
		effects: {
			...setStates()
		}
	}

  return (
    <appContext.Provider value={state}>
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider;