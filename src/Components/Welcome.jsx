import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  padding: 10rem 0 0 0;
`

const StyledTextContainer = styled.div`
	width: 30%;
`
const  StyledText = styled.p`
	width: 100%;
	text-align: left;

	span{
		color: #EA4335;
		font-weight: 700;
	}
`

const Welcome = () => {
  return (
		<StyledContainer>
			<StyledTextContainer>
				<StyledText>Welcome to <span>Cinematica</span> - Your gateway to the world of cinema. Explore insightful articles and engaging content as we journey through the magic of the silver screen together!</StyledText>
			</StyledTextContainer>
		</StyledContainer>
	)

}

export default Welcome;