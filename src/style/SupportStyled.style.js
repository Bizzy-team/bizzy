import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const SupportStyled = styled(GlobalContainer)`
  font-family: ${props => props.theme.fontFamilyText};
  margin-top: 50%;
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
    padding: 20px 20px;
    border: solid 2px ${props => props.theme.colorText};
    border-radius: 20px;
    border-color: ${props =>
      props.isError ? props.theme.colorRed : props.theme.colorLola};
    font-size: 0.8em;
    width: 100%;
    color: ${props => props.theme.colorText};
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

  .error--message {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: ${props => props.theme.colorRed};
    margin-bottom: 16px;
    img {
      width: 18px;
    }
  }

  @media screen and (min-width: 300px) {
    .form--support--title {
      margin-bottom: 15%;
      .form--support--img {
        margin-right: 32px;
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

  @media screen and (min-width: 360px) {
    margin-top: 45%;
    .form--support--title {
      .form--support--img {
        margin-right: 54px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin-top: 38%;
    .form--support--title {
      .form--support--img {
        margin-right: 75px;
        width: 9%;
      }
    }
  }

  @media screen and (min-width: 440px) {
    margin-top: 32%;
    .form--support--title {
      .form--support--img {
        margin-right: 92px;
      }
    }
  }

  @media screen and (min-width: 482px) {
    margin-top: 30%;
    .form--support--title {
      .form--support--img {
        margin-right: 104px;
      }
    }
  }

  @media screen and (min-width: 520px) {
    margin-top: 24%;
    .form--support--title {
      .form--support--img {
        margin-right: 132px;
        width: 8%;
      }
    }
  }

  @media screen and (min-width: 570px) {
    margin-top: 19%;
    .form--support--title {
      .form--support--img {
        margin-right: 151px;
        width: 7%;
      }
    }
  }

  @media screen and (min-width: 716px) {
    margin-top: 16%;
    .form--support--title {
      .form--support--img {
        margin-right: 135px;
        width: 8%;
      }
      h2 {
        font-size: 1.4em;
      }
    }
    .form--support--identity {
      div {
        margin-right: 13%;
        input {
          width: 125%;
        }
      }
    }
  }

  @media screen and (min-width: 770px) {
    margin-top: 14%;
    .form--support--title {
      justify-content: center;
      margin-bottom: 8%;
      .form--support--img {
        margin-right: 38px;
        width: 6%;
      }
    }
    .form--support--identity {
      div {
        width: 100%;
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
    height: 74vh;
    margin-top: 12%;
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
    height: 76vh;
    margin-top: 11%;
  }

  @media screen and (min-width: 1183px) {
    height: 80vh;
    margin-top: 9%;
  }

  @media screen and (min-width: 1280px) {
    height: 82vh;
    margin-top: 8%;
  }

  @media screen and (min-width: 1349px) {
    height: 84vh;
    margin-top: 7%;
  }

  @media screen and (min-width: 1400px) {
    #inputMessage {
      margin-bottom: 10px;
    }
    height: 72vh;
    margin-top: 11%;
  }
`;

export default SupportStyled;
