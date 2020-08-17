import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const StartPageStyled = styled(GlobalContainer)`
  font-family: ${props => props.theme.fontFamilyText};

  span {
    color: ${props => props.theme.colorBtn};
  }

  h1 {
    font-family: "CeraPro Bold";
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    .section--img {
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    .section--btn {
      button {
        border-radius: 10px;
        border: solid 2px ${props => props.theme.colorBtn};
      }
      .btn--connexion {
        background-color: ${props => props.theme.colorPrincipal};
        color: black;
      }
      .btn--inscription {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
      }
    }
  }

  @media only screen and (min-width: 300px) {
    section {
      flex-direction: column-reverse;
      justify-content: center;
      .section--content {
        margin-top: 8%;
        text-align: center;
        h1 {
          font-size: 1.8em;
        }
        p {
          font-size: 0.8em;
        }
        img {
          width: 27%;
        }
      }
      .section--img {
        width: 80%;
      }
      .section--btn {
        button {
          margin: 0 5px;
          padding: 6px 24px;
        }
      }
    }
  }

  @media only screen and (min-width: 376px) {
    section {
      .section--content {
        img {
          width: 21%;
        }
      }
    }
  }

  @media only screen and (min-width: 454px) {
    section {
      .section--img {
        width: 60%;
      }
      .section--content {
        img {
          width: 18%;
        }
      }
    }
  }

  @media only screen and (min-width: 508px) {
    section {
      .section--img {
        width: 50%;
      }
      .section--content {
        img {
          width: 15%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      .section--img {
        width: 40%;
      }
      .section--content {
        img {
          width: 12%;
        }
      }
    }
  }

  @media only screen and (min-width: 996px) {
    section {
      .section--img {
        width: 30%;
      }
      .section--content {
        margin-top: 6%;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    section {
      flex-direction: row;
      .section--content {
        width: 50%;
        text-align: left;
        h1 {
          font-size: 2.8em;
        }
        p {
          padding-right: 25%;
          font-size: 1em;
        }
        img {
          width: 16%;
        }
      }
      .section--img {
        width: 37%;
      }
      .section--btn {
        margin-top: 5px;
        button {
          margin: 0 5px;
          padding: 10px 40px;
        }
      }
    }
  }
`;

export default StartPageStyled;
