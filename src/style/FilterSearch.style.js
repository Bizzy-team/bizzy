import styled from "styled-components";
import SearchIcon from "../img/search.svg";

const HomeHeaderStyled = styled.section`
  font-family: "Nunito";
  background-color: ${props => props.theme.colorPrincipal};
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    input {
      background-color: ${props => props.theme.colorLola};
      background-image: url(${SearchIcon});
      background-repeat: no-repeat;
      border: none;
      border-radius: 15px;
    }
    .cities--suggestions {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 300px) {
    padding: 19px 1px;
    div {
      padding: 6px 0px;
      input {
        background-position: 10px 15px;
        background-size: 14px;
        border-radius: 15px;
        text-indent: 30px;
        &:focus {
          text-indent: 30px;
        }
      }
    }
  }

  @media screen and (min-width: 760px) {
    div {
      padding: 10px;
    }
  }

  @media screen and (min-width: 872px) {
    div {
      padding: 10px;
      input {
        background-position: 10px 21px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 45vw;
    div {
      input {
        width: 60%;
        background-position: 10px 14px;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    div {
      input {
        background-position: 10px 20px;
      }
    }
  }

  @media screen and (min-width: 1680px) {
    width: 50%;
    div {
      input {
        padding: 15px 0;
        width: 22vw;
        background-position: 10px 20px;
      }
    }
  }

  @media screen and (min-width: 1680px) {
    padding: 0 1px;
    div {
      .cities--suggestions {
        width: 28vw;
        text-align: left;
      }
    }
  }
`;

export default HomeHeaderStyled;
