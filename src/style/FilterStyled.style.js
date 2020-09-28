import styled from "styled-components";
import SearchIcon from "../img/search.svg";

const HomeHeaderStyled = styled.section`
  font-family: "Nunito";
  background-color: ${props => props.theme.colorPrincipal};
  div {
    display: flex;
    justify-content: space-between;
    input {
      background-color: ${props => props.theme.colorLola};
      background-image: url(${SearchIcon});
      background-repeat: no-repeat;
      border: none;
      border-radius: 15px;
    }
    .btn--filters {
      background-color: ${props => props.theme.colorBtn};
      border: none;
      border-radius: 10px;
      div {
        img {
          color: ${props => props.theme.colorPrincipal};
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
    .btn--create {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      border: none;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 300px) {
    div {
      padding: 10px 5px;
      input {
        background-position: 10px 15px;
        background-size: 14px;
        border-radius: 15px;
        text-indent: 30px;
        &:focus {
          text-indent: 30px;
        }
      }
      .btn--filters {
        padding: 7px 10px;
        div {
          width: 9vw;
        }
      }
      .btn--create {
        padding: 10px 10px;
      }
    }
  }

  @media screen and (min-width: 420px) {
    div {
      .btn--filters {
        div {
          width: 7vw;
        }
      }
    }
  }

  @media screen and (min-width: 529px) {
    div {
      .btn--filters {
        div {
          width: 6vw;
        }
      }
    }
  }

  @media screen and (min-width: 630px) {
    div {
      .btn--filters {
        div {
          width: 5vw;
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
        width: 28%;
        background-position: 10px 21px;
      }
    }
  }

  @media screen and (min-width: 932px) {
    div {
      .btn--filters {
        div {
          width: 5vw;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 42vw;
  }
`;

export default HomeHeaderStyled;
