import styled from 'styled-components'
import HeaderImage from '../../public/assets/CINEMATICA.svg'
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

const StyledList = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    box-sizing: border-box;
    gap: 4.5rem;
    list-style: none;
    padding: 4rem;
    width: 100%;
`

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Cinco columnas con el mismo ancho */
  grid-gap: 4rem
`

const StyledAnchorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 28px;
  width: 100%;
  transition: color 0.2s;

  &:hover {
    color: #EA4335;
    font-weight: 900;
  }

  ${({ isActive }) =>
    isActive &&
    `
    font-weight: bold;
    color: #EA4335;
    text-shadow: 0px 0px 20px rgba(220,220,220,0.86);
  `}
`;

const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const listItems = [
    {
      name:"Home",
      goTo: "/",
    },
    {
      name:"Login",
      goTo: "/login",
    },
    {
      name:"Sign Up",
      goTo: "",
    },
    {
      name:"Movies",
      goTo: "/movies",
    },
    {
      name:"About",
      goTo: "/about",
    },
  ]

  return (
    <StyledList>
      <Link to="/">
        <figure>
          <img src={HeaderImage} alt="Logo" />
        </figure>
      </Link>
      <StyledDiv>
        {listItems.map(({ name, goTo }) => (
          <StyledAnchorContainer key={name}>
            <StyledLink to={goTo} isActive={location.pathname === goTo}>
              {name}
            </StyledLink>
          </StyledAnchorContainer>
        ))}
      </StyledDiv>
    </StyledList>
  );
};

export default Navbar