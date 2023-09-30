
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
    padding: 10rem 0 0 0;
    width: 100%;
  `

  const StyledShortText = styled.p`
    display: flex;
    font-size: 15px;
    p{
    background: rgb(1, 0, 11);
    background: linear-gradient(
      0deg,
      rgba(82, 76, 185, 0.44021358543417366) 24%,
      rgba(11, 9, 47, 1) 99%
    );
    border-radius: 40px;
    padding: 1rem;
    transition: background-image 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }
  `

  const StyledTitle = styled.h3`
    text-align: left;
    transition: opacity 0.5s ease-in-out;
    font-size: 28px;
  `

  const StyledOverview = styled.p`
    text-align: left;
    font-size: 18px;
    transition: opacity 0.5s ease-in-out;
  `

  const MoviesInfo = () => {
    const { currentMovie } = useContext(appContext);

    return (
      <div>
        {currentMovie && (
          <StyledTextWrapper>
            <StyledTitle>{currentMovie?.title}</StyledTitle>
            <StyledOverview>{currentMovie?.overview}</StyledOverview>
            <StyledShortText>
              <p>{currentMovie?.release_date}</p>
              <p>Vote average {currentMovie?.vote_average}</p>
            </StyledShortText>
          </StyledTextWrapper>
        )}
      </div>
    );
  };




  export default MoviesInfo;