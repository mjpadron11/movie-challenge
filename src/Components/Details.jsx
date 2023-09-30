import React, { useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { appContext } from '../context';

const StyledMovieDetails = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  text-align: left;
  padding: 10rem 0 0 0;
  gap: 2rem;
  width: 80%;

  p{
    text-align: left;
    font-size: 18px;
  }
`;

const MovieImage = styled.img`
  max-width: 300px;
  border-radius: 8px;
`;

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const StyledMinInfo = styled.div`
  display: flex;
  gap: 2rem;
`

const MovieTitle = styled.h2`
  font-size: 30px;
`;

const MovieOverview = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Details = () => {
  const { movieState: { allMovies } } = useContext(appContext);
  const { id } = useParams(); // Obstains movie ID from URL

  // Searches movie by ID in movies list.
  const selectedMovie = allMovies.find(movie => movie.id.toString() === id);

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const { title, overview, release_date, vote_average, poster_path } = selectedMovie;

  return (
    <StyledMovieDetails>
      <MovieImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
      <StyledInformation>
        <MovieTitle>{title}</MovieTitle>
        <StyledMinInfo>
          <p>{release_date}</p>
          <p>Score:{vote_average}</p>
        </StyledMinInfo>
        <MovieOverview>{overview}</MovieOverview>
      </StyledInformation>
    </StyledMovieDetails>
  );
};

export default Details;