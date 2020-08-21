import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const LogginSpaceStyled = styled(GlobalContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colorPrincipal};
  margin-top: 60%;
  font-family: ${props => props.theme.fontFamilyText};
  .form--connexion {
    width: 100%;
    .form--connexion--title {
      display: flex;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      h2 {
        font-family: "CeraPro Bold";
        font-size: 1.4em;
      }
    }
    .input--data--name {
      justify-content: space-between;
    }
    .form--error {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: ${props => props.theme.colorRed};
    }
    .form--connexion--reset--pswd {
      display: flex;
      justify-content: center;
      a {
        color: ${props => props.theme.colorSecondary};
        text-decoration: underline;
      }
    }
    .form--connexion--btn {
      margin: 30px 0px;
      input {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        width: 100%;
        font-size: 0.9em;
        opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
      }
    }
    .form--connexion--link {
      text-align: center;
      line-height: 0;
      a {
        color: ${props => props.theme.colorSecondary};
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 300px) {
    .form--connexion {
      .form--connexion--title {
        width: 12%;
        margin-bottom: 40px;
        h2 {
          margin-left: 50px;
        }
      }
    }
    .form--connexion--reset--pswd {
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 347px) {
    margin-top: 43%;
    .form--connexion {
      .form--connexion--title {
        h2 {
          margin-left: 74px;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin-top: 38%;
    .form--connexion {
      .form--connexion--title {
        width: 10%;
        h2 {
          margin-left: 92px;
        }
      }
    }
  }

  @media screen and (min-width: 445px) {
    margin-top: 33%;
    .form--connexion {
      .form--connexion--title {
        width: 10%;
        h2 {
          margin-left: 120px;
        }
      }
    }
  }

  @media screen and (min-width: 497px) {
    .form--connexion {
      .form--connexion--title {
        width: 9%;
        h2 {
          margin-left: 139px;
        }
      }
    }
  }

  @media screen and (min-width: 548px) {
    margin-top: 25%;
    .form--connexion {
      .form--connexion--title {
        width: 8%;
        h2 {
          margin-left: 168px;
        }
      }
    }
  }

  @media screen and (min-width: 630px) {
    margin-top: 22%;
  }

  @media screen and (min-width: 771px) {
    margin-top: 16%;
    .form--connexion {
      .form--connexion--title {
        width: 6%;
        h2 {
          margin-left: 253px;
        }
      }
    }
  }

  @media screen and (min-width: 845px) {
    margin-top: 14%;
  }

  @media screen and (min-width: 1000px) {
    width: 38vw;
    height: 75vh;
    margin-top: 10%;
    box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
    border-radius: 20px;
    border: solid 3px rgba(247, 246, 247, 1);
    border-bottom-width: 8px;
    .form--connexion {
      padding: 50px 40px;
      border-radius: 20px;
      .form--connexion--title {
        width: 12%;
        h2 {
          margin-left: 59px;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .form--connexion {
      .form--connexion--title {
        h2 {
          margin-left: 70px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .form--connexion {
      .form--connexion--title {
        width: 11%;
        h2 {
          margin-left: 84px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 9%;
    .form--connexion {
      .form--connexion--title {
        width: 10%;
        h2 {
          margin-left: 106px;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 10%;
    .form--connexion {
      .form--connexion--title {
        h2 {
          margin-left: 122px;
        }
      }
    }
  }
`;

export default LogginSpaceStyled;
