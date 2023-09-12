import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Icon } from '@iconify/react';

const StyledWrapper = styled.div`
	position: relative;
	z-index: 4000;
	display: flex;
	justify-content: space-between;
	padding: 4rem 2rem;
	border-top: 1px solid #676883da;
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');
	font-family: 'Montserrat', sans-serif;
`
const StyledTextWrapper = styled.div`
	width: 440px;
	text-align: left;
	font-size: 30px;
`

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Cinco columnas con el mismo ancho */
  grid-gap: 10px;
`

const StyledAnchorContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
	&:not(:last-child) {
    &:after {
      content: "/";
      margin-left: 10px; /* Espacio entre el slash y el siguiente elemento */
      color: #FFFFFF;
      font-size: 15px;
      opacity: 0.6; /* Ajusta la opacidad según tu preferencia */
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-size: 15px;
  width: 100%;
  padding: .5rem;
  text-align: center;
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

const StyledList = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 2.5rem;
    padding: 2rem;
`

		const StyledLicense = styled.p`
			text-align: end;
			padding: 2rem;
			font-size: 15px;
		`


const Footer = () => {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState(location.pathname);
	
	const icons = [
			{
					href:"https://www.google.com.co/webhp?tab=kw",
					iconName: "ion:logo-google",
					color:"#ffffff",
			},
			{
					href:"https://instagram.com",
					iconName: "teenyicons:instagram-solid",
					color:"#ffffff"
			},
			{
					href:"https://wa.me/573125161742",
					iconName: "akar-icons:whatsapp-fill",
					color:"#ffffff"
			},
			{
					href:"https://github.com/mjpadron11",
					iconName: "codicon:github-inverted",
					color: "#FFFFFF"
			}
	]

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
		<>
			<StyledWrapper>
				<StyledTextWrapper>
					<p>Our platform is trusted by millions & features best updated movies all around the world.</p>
				</StyledTextWrapper>
				<StyledUl>
					{listItems.map(({ name, goTo }) => (
						<StyledAnchorContainer key={name}>
							<StyledLink to={goTo} isActive={location.pathname === goTo}>
								{name}
							</StyledLink>
						</StyledAnchorContainer>
					))}
				</StyledUl>
			</StyledWrapper>
			<StyledList>
				{icons.map(({ href, iconName,color }) => (
					<li key={href}>
						<a href={href}>
							<Icon icon={iconName} color={color} width={'30px'} height={'30px'}/>
						</a>
					</li>
					))}
			</StyledList>
			<StyledLicense>© 2023</StyledLicense>
		</>
	);
}

export default Footer