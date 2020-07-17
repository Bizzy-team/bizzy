import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const SignUpSpaceStyled = styled(GlobalContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colorPrincipal};
  margin-top: 40%;
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
  }

  @media screen and (min-width: 300px) {
  .form--inscription--title {
    width: 10%;
    h2 {
      margin-left: 70px;
      font-size: 1.3em;
    }
  }
  }
`;

export default SignUpSpaceStyled;