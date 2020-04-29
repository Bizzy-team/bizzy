import styled from "styled-components";

const ErrorMessageToken = styled.div`
  padding: 10px 6px;
  h2 {
    font-family: "Roboto";
  }
  p {
    font-family: "Nunito";
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colorSecondary};
  }
`;

export default ErrorMessageToken;
