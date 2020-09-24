import styled from "styled-components";
import SearchIcon from "../img/search.svg";

const HomeHeaderStyled = styled.header`
font-family: "Nunito";
  div {
    display: flex;
    justify-content: space-between;
    padding: 24px 5px;
    input {
      background-color: ${props => props.theme.colorLola};
      background-image: url(${SearchIcon});
      background-repeat: no-repeat;
      background-position: 10px 15px;
      background-size: 14px;
      border: none;
      border-radius: 15px;
      text-indent: 30px;
      &:focus {
        text-indent: 30px;
      }
    }
    .btn--filters {
      background-color: ${props => props.theme.colorBtn};
      padding: 7px 10px;
      border: none;
      border-radius: 10px;
      img {
        color: ${props => props.theme.colorPrincipal};
        width: 6vw;
      }
    }
    .btn--create {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 10px;
      border: none;
      border-radius: 10px;
    }
  }
`;

export default HomeHeaderStyled;
