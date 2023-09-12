
import React, { useContext } from 'react';
import styled from 'styled-components';
import { appContext } from '../context';

const StyledTextWrapper = styled.div`
  position: relative;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`

const StyledRelease = styled.p`
  font-size: 12px;
  background: rgb(1, 0, 11);
  background: linear-gradient(
    0deg,
    rgba(82, 76, 185, 0.44021358543417366) 24%,
    rgba(11, 9, 47, 1) 99%
  );
  border-radius: 40px;
  padding: 1rem;
  transition: background-image 0.5s ease-in-out, opacity 0.5s ease-in-out;
`

const StyledTitle = styled.h3`
  text-align: left;
  transition: opacity 0.5s ease-in-out;
`

const StyledOverview = styled.p`
  text-align: left;
  font-size: 18px;
  transition: opacity 0.5s ease-in-out;
`

const MoviesInfo = () => {
  const { currentPosterPath, currentMovie, currentPosterIndex } = useContext(appContext)
  return (
      <div>
        {currentPosterPath && (
          <StyledTextWrapper>
            <StyledRelease>{currentMovie?.release_date}</StyledRelease>
            <StyledTitle>{currentMovie?.title}</StyledTitle>
            <StyledOverview>{currentMovie?.overview}</StyledOverview>
          </StyledTextWrapper>
        )}
      </div>
  );


};



export default MoviesInfo;