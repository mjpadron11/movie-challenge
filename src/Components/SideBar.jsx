import React from 'react';
import styled from 'styled-components'

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

function SideBar() {
  const movieGenres = [
    'Action',
    'Comedy',
    'Drama',
    'Science Fiction',
    'Horror',
    'Adventure',
    'Animation',
    'Fantasy',
    'Romance',
    'Crime',
    'Thriller',
    'Mystery',
    'Family',
    'Documentary',
    'Music',
    'History',
    'Western',
    'War',
    'Biography',
    'Sport',
    'Musical',
  ];

	return (
    <StyledWrapper className="sidebar">
      <StyledListWrapper>
        {movieGenres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default SideBar;