import styled from "styled-components";
import SearchIcon from "../img/search.svg";

const HomeHeaderStyled = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    padding: 24px 5px;
    input {
      background-color: ${props => props.theme.colorLola};
      background-image: url(${SearchIcon});
      background-repeat: no-repeat;
      background-position: 10px 9px;
      background-size: 14px;
      border: none;
      border-radius: 15px;
      text-indent: 30px;
      &:focus {
        text-indent: 30px;
      }
    }
  }
`;

export default HomeHeaderStyled;