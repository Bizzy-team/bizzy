import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ResetPswdErrorStyled = styled(GlobalContainer)`
  margin-top: 20px;
  h1 {
    font-family: ${props => props.theme.fontFamilyTitle};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color};
    font-weight: bold;
  }
`;

export default ResetPswdErrorStyled;
