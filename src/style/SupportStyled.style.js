import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const SupportStyled = styled(GlobalContainer)`
  font-family: ${props => props.theme.fontFamilyText};
  margin-top: 60%;
  .form--support--title {
    display: flex;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    h2 {
      color: black;
      font-family: "CeraPro Bold";
    }
  }
  .form--support--identity {
    display: flex;
  }
  #inputMessage {
    font-family: ${props => props.theme.fontFamilyText};
    font-weight: 200;
    border: none;
    border-bottom: solid 1px ${props => props.theme.color};
    border-color: ${props =>
      props.isError ? props.theme.colorRed : props.theme.colorLola};
    opacity: 0.3;
    font-size: 0.8em;
    width: 100%;

    &:focus {
      border: solid 2px ${props => props.theme.colorBtn};
      outline: none;
      opacity: 1;
    }
  }
  .form--support--btn {
    input {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
      margin-bottom: 15%;
    }
  }

  @media screen and (min-width: 300px) {
    .form--support--title {
      margin-bottom: 15%;
      .form--support--img {
        margin-right: 10px;
        width: 12%;
      }
      h2 {
        font-size: 1.3em;
      }
    }
    .form--support--identity--firstname {
      padding-right: 10px;
    }
  }

  @media screen and (min-width: 340px) {
    .form--support--title {
      .form--support--img {
        margin-right: 33px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin-top: 50%;
    .form--support--title {
      .form--support--img {
        margin-right: 55px;
      }
    }
  }

  @media screen and (min-width: 482px) {
    margin-top: 40%;
    .form--support--title {
      .form--support--img {
        margin-right: 91px;
        width: 10%;
      }
    }
  }

  @media screen and (min-width: 550px) {
    margin-top: 30%;
    .form--support--title {
      .form--support--img {
        margin-right: 120px;
        width: 9%;
      }
    }
  }

  @media screen and (min-width: 716px) {
    margin-top: 20%;
    .form--support--title {
      .form--support--img {
        margin-right: 110px;
        width: 8%;
      }
      h2 {
        font-size: 1.4em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 16%;
    .form--support--title {
      justify-content: center;
      .form--support--img {
        margin-right: 38px;
        width: 6%;
      }
    }
  }

  @media screen and (min-width: 961px) {
    margin-top: 12%;
    .form--support--title {
      justify-content: center;
      .form--support--img {
        margin-right: 38px;
        width: 6%;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 38vw;
    height: 59vh;
    margin-top: 14%;
    box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
    border-radius: 20px;
    border: solid 3px rgba(247, 246, 247, 1);
    border-bottom-width: 8px;
    background-color: ${props => props.theme.colorPrincipal};
    .form--support--title {
      margin-top: 10%;
      .form--support--img {
        margin-right: 20px;
        width: 10%;
      }
    }
    .form--support--identity {
      div {
        margin-right: 10px;
        input {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 1091px) {
    width: 38vw;
    height: 62vh;
    margin-top: 12%;
  }

  @media screen and (min-width: 1183px) {
    height: 66vh;
  }

  @media screen and (min-width: 1277px) {
    height: 70vh;
    margin-top: 10%;
  }

  @media screen and (min-width: 1349px) {
    height: 75vh;
    margin-top: 8%;
  }

  @media screen and (min-width: 1400px) {
    height: 75vh;
    margin-top: 11%;
  }
`;

export default SupportStyled;
