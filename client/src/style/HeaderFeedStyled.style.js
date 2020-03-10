import styled from "styled-components";

const HeaderFeedStyled = styled.header`
  display: flex;
  background-color: ${props => props.theme.color};
  margin-bottom: 20px;
  height: 8vh;
  label {
    margin-right: 72%;
    margin-top: 22px;
    margin-left: 8px;
  }
  img {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border-radius: 50%;
  }
  i {
    margin-left: 10px;
    font-size: 2em;
  }
`

export default HeaderFeedStyled