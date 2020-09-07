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

  .modal--inputs {
    padding: 0 20px;
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
  @media screen and (min-width: 400px) {
    .pswd--title {
      .pswd--icon {
        width: 10vw;
      }
    }
  }

  @media screen and (min-width: 537px) {
    margin-top: 26%;
  }

  @media screen and (min-width: 582px) {
    margin-top: 23%;
  }

  @media screen and (min-width: 658px) {
    margin-top: 20%;
    .pswd--title {
      .pswd--icon {
        width: 6vw;
        h2 {
          font-size: 1.5em;
        }
      }
    }
  }

  @media screen and (min-width: 933px) {
    margin-top: 17%;
  }

  @media screen and (min-width: 1000px) {
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 12%;
    .pswd--reset--content {
      padding-top: 20px;
      width: 60vw;
      height: 52vh;
      margin-left: 23%;
      /* margin-right: 13%; */
      /* box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1); */
      border-radius: 20px;
      border: solid 3px rgba(247, 246, 247, 1);
      border-bottom-width: 8px;
      background-color: white;
      .pswd--title {
        position: relative;
        .pswd--icon {
          width: 4vw;
        }
        .close--arrow {
          display: block;
          position: absolute;
          right: 35px;
          bottom: 26px;
        }
      }
      .buttons--actions {
        .btn--cancel {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 1128px) {
    margin-top: 10%;
    .pswd--reset--content {
      height: 55vh;
      margin-left: 19%;
    }
  }

  @media screen and (min-width: 1253px) {
    .pswd--reset--content {
      height: 57vh;
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 7%;
    .pswd--reset--content {
      height: 58vh;
      width: 40vw;
      margin-left: 30%;
      .pswd--title {
        .pswd--icon {
          width: 3vw;
        }
        .close--arrow {
          bottom: 32px;
        }
      }
    }
  }
`;

export default ModalStyled;
