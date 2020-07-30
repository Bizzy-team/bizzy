import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const SignUpSpaceStyled = styled(GlobalContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colorPrincipal};
  margin-top: 28%;
  font-family: ${props => props.theme.fontFamilyText};
  .form--inscription {
    width: 100%;
    .form--inscription--title {
      display: flex;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      h2 {
        font-family: "CeraPro Bold";
      }
    }
    .form--error {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: ${props => props.theme.colorRed};
    }
    .form--inscription--btn {
      input {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        width: 100%;
        font-size: 0.9em;
      }
    }
    .form--inscription--link {
      text-align: center;
      line-height: 0;
      a {
        color: ${props => props.theme.colorSecondary};
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 300px) {
    .form--inscription--title {
      width: 10%;
      h2 {
        margin-left: 70px;
        font-size: 1.3em;
      }
    }
    .input--data--name {
      display: flex;
      width: 100%;
      margin-top: 10%;
    }
    .form--error {
      /* display: flex;
      justify-content: space-between;
      align-items: flex-end; */
      font-size: .8em;
    }
    .form--inscription--conditions {
      display: flex;
      font-size: 0.8em;
      input {
        margin-right: 12px;
        margin-top: 12px;
      }
      p {
        a {
          color: ${props => props.theme.colorSecondary};
          text-decoration: underline;
        }
      }
    }
    .form--inscription--link {
      font-size: 0.7em;
      margin-top: 26px;
    }
  }
`;

export default SignUpSpaceStyled;
