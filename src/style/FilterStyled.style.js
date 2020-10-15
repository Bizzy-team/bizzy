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
      .btn--filters {
        padding: 4px 10px;
        margin-right: 6px;
        div {
          width: 6vw;
        }
      }
      .btn--create {
        /* padding: 10px 10px; */
      }
    }
  }

  @media screen and (min-width: 400px) {
    div {
      input {
        width: 64%;
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

  @media screen and (min-width: 464px) {
    div {
      .btn--filters {
        div {
          width: 5vw;
        }
      }
    }
  }

  @media screen and (min-width: 542px) {
    div {
      .btn--filters {
        div {
          width: 4vw;
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
    width: 45vw;
    div {
      input {
        width: 60%;
        background-position: 10px 14px;
      }
      .btn--filters {
        padding: 0 10px;
        div {
          width: 4vw;
        }
      }
    }
  }

  @media screen and (min-width: 1227px) {
    div {
      .btn--filters {
        div {
          width: 3vw;
        }
      }
      .btn--create {
        padding: 15px 10px;
        font-size: 1.2em;
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
`;

export default HomeHeaderStyled;
