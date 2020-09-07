import styled from "styled-components";

const ModalStyled = styled.section`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* padding: 9% 32%; */
  .pswd--title {
    display: flex;
    justify-content: center;
    align-items: center;
    .pswd--icon {
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    h2 {
      font-family: "CeraPro Bold";
      font-size: 1.2em;
    }
    .close--arrow {
      display: none;
    }
  }

  .buttons--actions {
    display: flex;
    padding: 6px;
    .btn--change {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      margin-bottom: 15%;
      margin-right: 9px;
    }
    .btn--cancel {
      background-color: ${props => props.theme.colorPrincipal};
      border-color: ${props => props.theme.colorBtn};
      padding: 10px 24px;
      border-radius: 13px;
      width: 100%;
      font-size: 0.9em;
      margin-bottom: 15%;
    }
  }

  @media screen and (min-width: 300px) {
    margin-top: 31%;
    .pswd--title {
      margin-bottom: 40px;
      .pswd--icon {
        width: 12vw;
        margin-right: 8px;
      }
    }

  }
`;

export default ModalStyled;