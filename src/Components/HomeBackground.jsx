import styled from 'styled-components';
import { appContext } from '../context'
import { useContext } from 'react';

const BackgroundPosterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 1; 
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(6,5,33,1) 100%), url("https://image.tmdb.org/t/p/original${props => props.posterpath}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
`;


const HomeBackground = () => {
  const { currentPosterPath } = useContext(appContext)

  return (
      <BackgroundPosterContainer>
        <BackgroundImage posterpath={currentPosterPath} />
      </BackgroundPosterContainer>
  );
};

export default HomeBackground