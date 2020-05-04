import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ForgotPasswordConfirmStyled = styled(GlobalContainer)`
  text-align: center;
  margin-top: 2%;
  .success--title {
    margin-bottom: 6%;
    h1 {
      font-family: ${props => props.theme.fontFamilyTitle};
      color: ${props => props.theme.colorSecondary};
      font-size: 2.3em;
    }
  }
  .success--content {
    font-family: ${props => props.theme.fontFamilyText};
    line-height: 25px;
    p {
      color: ${props => props.theme.colorSecondary};
    }
    button {
      border: none;
      background-color: ${props => props.theme.color};
      color: ${props => props.theme.colorSecondary};
      border-radius: 10px;
      padding: 6px 8px;
      width: 100%;
      &:active {
        background-color: ${props => props.theme.color};
      }
      a {
        text-decoration: none;
        color: ${props => props.theme.colorSecondary};
      }
    }
  }

  @media screen and (width: 320px) {
    margin-top: 4%;
    .success--title {
      h1 {
        font-size: 1.7em;
      }
    }
  }
`;

export default ForgotPasswordConfirmStyled;
