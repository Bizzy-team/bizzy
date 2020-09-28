import styled from "styled-components";

const UserProfileHeaderStyled = styled.header`
background-color: ${props => props.theme.colorPrincipal};
margin-bottom: 20%;
padding: 20px 18px;
font-family: "Nunito";
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .app--logo {
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .menu--options {
      display: flex;
      justify-content: space-between;
      nav {
        a {
          padding: 0 10px;
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
`;

export default UserProfileHeaderStyled;