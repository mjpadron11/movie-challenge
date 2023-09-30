import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import getAllMovieGenres from '../helpers/allMoviesGenres';

const StyledWrapper = styled.div`
	position: absolute;
  left: 0;
  top: 40%;
	padding: 2rem;
	background-color:  rgba(15, 12, 69, 0.831);
	border-radius: 0 50% 50% 0;
	height: 1360px;
`

const StyledListWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-align: left;
`

const SideBar = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Calls the function to obtain all genres when component is mounted
    getAllMovieGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Second argument assures the rquest is made once the component is mounted

  return (
    <StyledWrapper>
      <StyledListWrapper>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default SideBar;