import styled from "styled-components";

const HeaderFeedStyled = styled.header`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${props => props.theme.color};
  img {
    width: 40px;
    border-radius: 50%;
  }
`

export default HeaderFeedStyled