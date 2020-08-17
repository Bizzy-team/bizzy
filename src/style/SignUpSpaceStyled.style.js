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
    .input--data--name {
      justify-content: space-between;
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
        opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
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
      font-size: 0.8em;
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

  @media screen and (min-width: 338px) {
    .form--inscription--title {
      h2 {
        margin-left: 95px;
      }
    }
  }

  @media screen and (min-width: 398px) {
    .form--inscription--title {
      width: 9%;
      h2 {
        margin-left: 102px;
      }
    }
  }

  @media screen and (min-width: 430px) {
    .form--inscription--title {
      width: 8%;
      h2 {
        margin-left: 117px;
      }
    }

    .form--inscription--conditions {
      input {
        margin-right: 8px;
        margin-top: 3px;
      }
    }
  }

  @media screen and (min-width: 490px) {
    .form--inscription--title {
      width: 7%;
      h2 {
        margin-left: 145px;
      }
    }
    .input--data--name {
      div {
        #inputFirstName {
          /* margin-right: 83px */
        }
      }
    }
  }

  @media screen and (min-width: 528px) {
    .form--inscription--title {
      width: 6%;
      h2 {
        margin-left: 169px;
      }
    }
  }

  @media screen and (min-width: 558px) {
    .form--inscription--title {
      h2 {
        margin-left: 181px;
      }
    }
  }

  @media screen and (min-width: 568px) {
    .form--inscription--title {
      h2 {
        margin-left: 188px;
      }
    }
  }

  @media screen and (min-width: 624px) {
    margin-top: 14%;
  }

  @media screen and (min-width: 704px) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 770px) {
    .form--inscription--title {
      h2 {
        margin-left: 263px;
      }
    }
  }

  @media screen and (min-width: 995px) {
    .form--inscription--title {
      h2 {
        margin-left: 345px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 38vw;
    height: 87vh;
    margin-top: 7%;
    box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
    border-radius: 20px;
    border: solid 3px rgba(247, 246, 247, 1);
    border-bottom-width: 8px;
    .form--inscription {
      padding: 50px 40px;
      border-radius: 20px;
    }
    .form--inscription--title {
      width: 11%;
      h2 {
        margin-left: 53px;
      }
    }
  }

  @media screen and (min-width: 1119px) {
    width: 31vw;
    height: 82vh;
    .form--inscription--title {
      width: 10%;
      h2 {
        margin-left: 45px;
      }
    }
  }

  @media screen and (min-width: 1207px) {
    height: 85vh;
    .form--inscription--title {
      h2 {
        margin-left: 51px;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    height: 87vh;
    margin-top: 6%;
    .form--inscription--title {
      h2 {
        margin-left: 60px;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    height: 87vh;
    .form--inscription--title {
      h2 {
        margin-left: 81px;
      }
    }
  }
`;

export default SignUpSpaceStyled;
