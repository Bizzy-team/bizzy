import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ForgotPasswordFormStyled = styled(GlobalContainer)`
font-family: ${props => props.theme.fontFamilyText};
margin-top: 60%;
  .form--forgot--pswd--title {
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
  .form--forgot--pswd--btn {
    input {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      opacity: ${props => props.btnDisabled ? 0.5 : 1};
      margin-bottom: 15%;
    }
  }
  .form--forgot--link {
    text-align: center;
    line-height: 0;
    a {
      color: ${props => props.theme.colorSecondary};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 300px) {
    .form--forgot--pswd--title {
      margin-bottom: 15%;
      .form--forgot--pswd--img {
        margin-right: 10px;
        width: 12%;
      }
      h2 {
        font-size: 1.3em;
      }
    }
  }

  @media screen and (min-width: 340px) {
    .form--forgot--pswd--title {
      .form--forgot--pswd--img {
        margin-right: 33px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin-top: 50%;
    .form--forgot--pswd--title {
      .form--forgot--pswd--img {
        margin-right: 55px;
      }
    }
  }

  @media screen and (min-width: 482px) {
    margin-top: 40%;
    .form--forgot--pswd--title {
      .form--forgot--pswd--img {
        margin-right: 91px;
        width: 10%;
      }
    }
  }

  @media screen and (min-width: 550px) {
    margin-top: 30%;
    .form--forgot--pswd--title {
      .form--forgot--pswd--img {
        margin-right: 120px;
        width: 9%;
      }
    }
  }

  @media screen and (min-width: 716px) {
    margin-top: 20%;
    .form--forgot--pswd--title {
      .form--forgot--pswd--img {
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
    .form--forgot--pswd--title {
      justify-content: center;
      .form--forgot--pswd--img {
        margin-right: 38px;
        width: 6%;
      }
    }
  }

  @media screen and (min-width: 961px) {
    margin-top: 12%;
    .form--forgot--pswd--title {
      justify-content: center;
      .form--forgot--pswd--img {
        margin-right: 38px;
        width: 6%;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 38vw;
    height: 59vh;
    margin-top: 14%;
    box-shadow: 0px 5px 5px 5px rgba(247,246,247,1);
    border-radius: 20px;
    border: solid 3px rgba(247,246,247,1);
    border-bottom-width: 8px;
    background-color: ${props => props.theme.colorPrincipal};
    .form--forgot--pswd--title {
      margin-top: 10%;
      .form--forgot--pswd--img {
        margin-right: 20px;
        width: 10%;
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
    margin-top: 10%
  }

  @media screen and (min-width: 1349px) {
    height: 75vh;
    margin-top: 8%;
  }

  @media screen and (min-width: 1400px) {
    height: 57vh;
    margin-top: 13%;
  }
`;

export default ForgotPasswordFormStyled;
