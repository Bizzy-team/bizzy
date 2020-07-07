import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 5px 0px rgba(247, 246, 247, 1);
  background-color: ${props => props.theme.colorPrincipal};
  padding: 10px 5px;
  position: fixed;
  width: 100%;

  .logo--app {
    width: 8%;
    margin-left: 2%;
  }

  .menu--burger {
    width: 3%;
    height: 3%;
  }

  .menu--options {
    display: flex;
    p {
      margin-right: 5px;
    }
  }

  /* .header--options {
    margin-right: 3%;
    img {
      width: 4%;
      height: 4%;
    }
  } */

  @media only screen and (max-width: 876px) {
    .logo--app {
      width: 28%;
      height: 10%;
      margin-top: 7px;
      margin-left: 8px;
    }

    .menu--burger {
      width: 7%;
      margin-top: 19px;
      margin-right: 8px;
    }
  }
`;

export default HeaderStyled;
