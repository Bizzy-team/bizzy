import styled from "styled-components";

const ModalDeleteProfileStyled = styled.section`
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
    display: flex;
    padding: 16px;
    .btn--delete {
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
    margin-top: 37%;
    .modal--content {
      margin-top: 34%;
      .modal--title {
        margin-bottom: 20px;
        .modal--icon {
          width: 11vw;
          margin-right: 15px;
        }
      }
    }
  }

  @media screen and (min-width: 326px) {
    margin-top: 36%;
  }

  @media screen and (min-width: 409px) {
    margin-top: 27%;
  }

  @media screen and (min-width: 471px) {
    margin-top: 23%;
    .modal--content {
      margin-top: 30%;
      .modal--title {
        .modal--icon {
          width: 9vw;
        }
      }
    }
  }

  @media screen and (min-width: 590px) {
    margin-top: 19%;
    .modal--content {
      .modal--title {
        .modal--icon {
          width: 7vw;
        }
      }
    }
  }

  @media screen and (min-width: 752px) {
    margin-top: 14%;
    .modal--content {
      margin-top: 24%;
      .modal--title {
        .modal--icon {
          width: 5vw;
        }
      }
    }
  }

  @media screen and (min-width: 921px) {
    margin-top: 12%;
    .modal--content {
      margin-top: 18%;
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
          bottom: 26px;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .modal--content {
      height: 28vh;
      margin-left: 19%;
      margin-top: 5%;
      .modal--title {
        position: relative;
        .modal--icon {
          width: 2vw;
        }
        .close--arrow {
          bottom: 24px;
        }
      }
    }
  }
`;

export default ModalDeleteProfileStyled;