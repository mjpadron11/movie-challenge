import React, { useContext } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { appContext } from '../context';

const StyledCarrousel = styled.div`
  position: relative;
  z-index: 2000;
  width: 100%;
  height: 450px;
`;

const StyledPoster = styled.img`
  &.StyledPoster {
    border-radius: 8px;
    height: 400px;
  }
`;

const LatestReleases = () => {
  const { movieState: { nowPlaying }} = useContext(appContext);

  const splideOptions = {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 5,
    autoplay: true,
    interval: 1500,
  };

  return (
    <StyledCarrousel>
      <Splide options={splideOptions}>
        {nowPlaying.map((movie, index) => (
          <SplideSlide key={index} className="Splide__slide">
            <Link to={`/movie/${movie.id}`}>
              <StyledPoster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="StyledPoster"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </StyledCarrousel>
  );
};

export default LatestReleases;

// import React, { useContext, useEffect,useRef } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { appContext } from '../context';

// const StyledCarrousel = styled.div`
//   position: relative;
//   z-index: 2000;
//   width: 100%;
//   height: 450px;
// `;

// const StyledPoster = styled.img`
//   &.StyledPoster {
//     border-radius: 8px;
//     height: 400px;
//   }
// `;

// const LatestReleases = () => {
//   const { movieState: { nowPlaying }} = useContext(appContext);
//   const splideRef = useRef(null);

//   useEffect(() => {
//     const initializeSplide = () => {
//       const autoScroll = new AutoScroll('.splide', {
//         speed: 1,
//       });

//       splideRef.current = new Splide('.splide', {
//         fixedWidth: '15rem',
//         easing: 'string = ease',
//         pauseOnHover: true,
//         lazyLoad: 'nearby',
//         type: 'loop',
//         drag: 'free',
//         perPage: 5,
//         perMove: 1,
//         gap: 4,
//       });

//       splideRef.current.mount({ autoScroll });
//     };

//     initializeSplide();
//   }, []);

//   return (
//     <StyledCarrousel>
//       <Splide className="splide">
//         {nowPlaying.map((movie, index) => (
//           <SplideSlide key={index} className="Splide__slide">
//             <Link to={`/movie/${movie.id}`}>
//               <StyledPoster
//                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//                 alt={movie.title}
//                 className="StyledPoster"
//               />
//             </Link>
//           </SplideSlide>
//         ))}
//       </Splide>
//     </StyledCarrousel>
//   );
// };


// export default LatestReleases;


