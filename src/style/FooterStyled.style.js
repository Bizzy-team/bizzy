import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.colorPrincipal};
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

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export default FooterStyle;
