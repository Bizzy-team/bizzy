import styled from "styled-components";

const ModalMessageStyled = styled.section`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-family: "Nunito";
  .modal--title {
    display: flex;
    justify-content: center;
    align-items: center;
    .modal--icon {
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
  .modal--btn {
    padding: 16px;
    .btn--ok {
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
  }

  @media screen and (min-width: 300px) {
    margin-top: 28%;
    .modal--content {
      .modal--title {
        margin-bottom: 12px;
        .modal--icon {
          width: 11vw;
          margin-bottom: 18px;
          margin-right: 11px;
        }
      }
      .modal--message {
        margin-bottom: 25px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 8vw;
        }
      }
    }
  }

  @media screen and (min-width: 576px) {
    margin-top: 14%;
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 7vw;
        }
      }
    }
  }

  @media screen and (min-width: 760px) {
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 5vw;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 11%;
    .modal--content {
      padding-top: 20px;
      width: 60vw;
      height: 23vh;
      margin-left: 23%;
      border-radius: 20px;
      border: solid 3px rgba(247, 246, 247, 1);
      border-bottom-width: 8px;
      background-color: white;
      .modal--title {
        position: relative;
        .modal--icon {
          width: 4vw;
        }
        .close--arrow {
          display: block;
          position: absolute;
          right: 35px;
          bottom: 40px;
        }
      }
      .modal--btn {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1117px) {
    margin-top: 10%;
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 4vw;
        }
      }
    }
  }

  @media screen and (min-width: 1231px) {
    margin-top: 9%;
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 3vw;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 8%;
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 2vw;
        }
      }
    }
  }
`;

export default ModalMessageStyled;
