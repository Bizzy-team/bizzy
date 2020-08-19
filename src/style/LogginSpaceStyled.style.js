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

  @media screen and (width: 300px) {
    .form--connexion {
      .form--connexion--title {
        width: 12%;
        margin-bottom: 40px;
        h2 {
          margin-left: 50px;
        }
      }
    }
  }
`;

export default LogginSpaceStyled;
