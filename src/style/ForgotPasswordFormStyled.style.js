import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ForgotPasswordFormStyled = styled(GlobalContainer)`
  color: ${props => props.theme.colorSecondary};
  h1 {
    text-align: center;
    margin: 10% 0 8% 0;
  }

  #input--mail {
    padding-left: 20px;
    width: 90%;
    input {
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }

  p {
    font-family: "Nunito";
    text-align: center;
    margin-bottom: 8%;
  }

  button {
    background-color: ${props => props.theme.color};
    width: 90%;
    color: ${props => props.theme.colorSecondary};
    font-family: "Roboto";
    border: none;
    border-radius: 30px;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 7px;
  }
  .link--to--home {
    text-align: center;
    margin-top: 20%;
    a {
      color: ${props => props.theme.colorSecondary};
    }
  }
`;

export default ForgotPasswordFormStyled;
