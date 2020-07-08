import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
  background-color: ${props => props.theme.colorPrincipal};
  padding: 10px 5px;
  position: fixed;
  width: 100%;

  .logo--app {
    width: 8%;
    margin-left: 2%;
  }

  .desktop--menu {
    display: flex;
    font-family: "Nunito";
    margin-right: 10%;
    position: absolute;
    top: 19px;
    left: 77%;
    p {
      padding-right: 10%;
      padding-top: 5px;
    }
    .menu--options--desktop--connexion {
      color: ${props => props.theme.colorText};
      font-family: "CeraPro Bold";
    }
    .menu--options--desktop--inscription {
      color: ${props => props.theme.colorBtn};
      font-family: "CeraPro Bold";
    }
  }

  .mobile--menu {
    display: none;
  }

  .menu {
    font-family: "Nunito";
    margin-right: 10%;
    position: relative;
    .menu--options--desktop {
      display: flex;
      position: absolute;
      top: 9px;
      right: -127px;
      p {
        padding-right: 10%;
        padding-top: 5px;
      }
      .menu--options--desktop--connexion {
        color: ${props => props.theme.colorText};
        font-family: "CeraPro Bold";
      }
      .menu--options--desktop--inscription {
        color: ${props => props.theme.colorBtn};
        font-family: "CeraPro Bold";
      }
    }
  }

  @media only screen and (max-width: 876px) {
    .mobile--menu {
      display: block;
      position: relative;
      font-family: "Nunito";
      margin-right: 22px;
      .menu--burger {
        height: 41%;
        margin-top: 20px;
      }
      .menu--options {
        position: absolute;
        right: 0;
        top: 49px;
        background-color: ${props => props.theme.colorPrincipal};
        border-radius: 10px;
        width: 30vw;
        text-align: center;
        padding-top: 16px;
        padding-left: 22px;
        line-height: 0.6;
        height: 10vh;
      }
    }

    .desktop--menu {
      display: none;
    }

    .logo--app {
      width: 28%;
      height: 10%;
      margin-top: 7px;
      margin-left: 8px;
    }
  }
`;

export default HeaderStyled;
