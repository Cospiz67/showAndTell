import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #288153;
`
const StyledH1 = styled.h1`
  font-size: calc(2px + 2.5vw);
  font-weight:bold;
  padding: 2% 2% 0;
`
const StyledH3 = styled.h3`
  font-size: calc(2px + 1vw);
  padding: 0 2% 2%;
`
export default function Header(){
    return(
        <StyledHeader>
          <StyledH1>Show and Tell</StyledH1>
          <StyledH3>React 19: new hooks</StyledH3>
        </StyledHeader>
    )
}