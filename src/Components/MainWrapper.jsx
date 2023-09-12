import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    gap: 5rem;
    width: 100%;
`

const MainWrapper = ({ children }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default MainWrapper;