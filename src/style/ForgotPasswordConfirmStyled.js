import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ForgotPasswordConfirmStyled = styled(GlobalContainer)`
  text-align: center;
    .success--icon {
      margin-top: 20%;
      margin-bottom: 20px;
      i {
        background-color: #EDF8EF;
        border-radius: 50%;
        width: 37%;
        height: 15vh;
        font-size: 5em;
        color: #5FBF73;
        padding-top: 28px;
        color: ${props => props.theme.color};
      }
    }
    .success--title {
      margin-bottom: 6%;
      h1 {
        font-family: ${props => props.theme.fontFamilyTitle};
      }
    }
    .success--content {
      font-family: ${props => props.theme.fontFamilyText};
      line-height: 25px;
      p {
        color: #969DAD;
      }
      button {
        background-color: ${props => props.theme.color};
        font-size: 1.5em;
        width: 90%;
        padding: 20px 6px;
        border-radius: 10px;
        a {
          text-decoration: none;
          color: white;
          }
      }
    }
`;

export default ForgotPasswordConfirmStyled;