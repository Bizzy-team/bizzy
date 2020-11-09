import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const UserProfileHeaderStyled = styled(GlobalContainer)`
  display: none;
  background-color: ${props => props.theme.colorPrincipal};
  font-family: "Nunito";
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  .app--logo {
    width: 5vw;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  nav {
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        list-style-type: none;
        margin: 0 10px;
        a {
          color: ${props => props.theme.colorText};
          text-decoration: none;
          &:active {
            color: ${props => props.theme.colorBtn};
          }
          &:focus {
            color: ${props => props.theme.colorBtn};
          }
        }
      }
    }
  }

  @media screen and (min-width: 300px) {
    div {
      .app--logo {
        width: 10vw;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1640px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 2040px;
  }
`;

export default UserProfileHeaderStyled;
