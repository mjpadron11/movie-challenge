import styled from 'styled-components';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../context';

const StyledWrapper = styled.div`
  padding: 10rem 0 0 0;
  width: 100%;
`

const StyledList = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;
`
const StyledPosterContainer = styled.figure`
  height: 300px;
  position: relative;
  overflow: hidden;
`
const StyledPoster = styled.img`
  height: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
`

const StyledMovieTitle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro */
  color: white;
  text-align: center;
  padding: 8px;
  opacity: 0; /* Inicialmente oculto */
  transform: translateY(100%); /* Fuera de la vista */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Transiciones suaves */
`;

const StyledContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Cuatro columnas */
  grid-auto-rows: minmax(100px, auto);
  justify-items: center;
  gap: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    ${StyledPoster} {
      transform: scale(1.1); /* Agranda el póster en hover */
    }
    ${StyledMovieTitle} {
      opacity: 1; /* Muestra el título en hover */
      transform: translateY(0); /* Muestra el título en hover */
    }
  }
`;

const AllMovies = () => {
  const { movieState } = useContext(appContext); // Obtener el estado del contexto
  const allMovies = movieState.allMovies; // Obtener la lista de películas

  return (
    <StyledWrapper>
      <StyledContainer>
        {allMovies.map((movie) => (
          <StyledList key={movie.id}>
            <StyledLink to={`/movie/${movie.id}`}>
              <StyledPosterContainer>
                <StyledPoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                <StyledMovieTitle>{movie.title}</StyledMovieTitle>
              </StyledPosterContainer>
            </StyledLink>
          </StyledList>
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default AllMovies;
