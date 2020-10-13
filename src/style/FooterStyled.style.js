import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.colorPrincipal};
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.18);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  text-align: center;
  div {
    display: flex;
    justify-content: space-around;
    margin-top: 4px;
    padding: 0 6px;
    .footer--elements--home,
    .footer--elements--favoris,
    .footer--elements--messagerie,
    .footer--elements--profile {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default FooterStyle;