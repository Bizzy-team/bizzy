import styled from "styled-components";

const ModalNewCardStyled = styled.section`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  margin-top: 34%;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-family: "Nunito";
  z-index: 10000;
  .card--content {
    .card--title {
      display: flex;
      justify-content: center;
      align-items: center;
      .card--img {
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
      .card--name {
        h2 {
          font-family: "CeraPro Bold";
        }
        .close--arrow {
          display: none;
        }
      }
    }
    .card--moods {
      h4 {
        font-size: 1em;
      }
      .cards--moods--img {
        display: flex;
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }
    .title--card {
      .card--desc {
        textarea {
          font-family: ${props => props.theme.fontFamilyText};
          font-weight: 200;
          padding: 20px 12px;
          margin: 0 5px;
          border: solid 2px ${props => props.theme.colorText};
          border-radius: 20px;
          border-color: ${props =>
            props.isError ? props.theme.colorRed : props.theme.colorLola};
          font-size: 0.8em;
          /* width: 100%; */
          color: ${props => props.theme.colorText};
          &:focus {
            border: solid 2px ${props => props.theme.colorBtn};
            outline: none;
            opacity: 1;
          }
        }
      }
    }
    .card--buttons {
      display: flex;
      padding: 16px;
      .btn--send {
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
  }

  @media screen and (min-width: 300px) {
    .card--content {
      .card--title {
        margin-bottom: 13%;
        .card--img {
          width: 12vw;
        }
        .card--name {
          margin-left: 10px;
        }
      }
      .card--moods {
        margin: 13% 1px;
        .cards--moods--img {
          width: 21vw;
          padding: 0 5px;
          img {
            margin-right: 6px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 340px) {
    margin-top: 31%;
  }

  @media screen and (min-width: 418px) {
    .card--content {
      .title--card {
        .card--desc {
          textarea {
            width: 90%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 474px) {
    margin-top: 26%;
    .card--content {
      .card--title {
        .card--img {
          width: 10vw;
        }
      }
    }
    .title--card {
      div {
        input {
          margin: 0 8px;
        }
      }
    }
  }

  @media screen and (min-width: 538px) {
    margin-top: 23%;
    .card--content {
      .card--moods {
        .cards--moods--img {
          width: 66vw;
          padding: 0 44px;
        }
      }
    }
  }

  @media screen and (min-width: 594px) {
    margin-top: 21%;
    .card--content {
      .card--title {
        .card--img {
          width: 8vw;
        }
      }
      .card--moods {
        .cards--moods--img {
          padding: 0 66px;
        }
      }
    }
  }

  @media screen and (min-width: 637px) {
    margin-top: 19%;
    .card--content {
      .card--moods {
        h4 {
          font-size: 1.5em;
        }
        .cards--moods--img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 852px) {
    margin-top: 18%;
  }

  @media screen and (min-width: 852px) {
    margin-top: 16%;
  }

  @media screen and (min-width: 1000px) {
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 18%;
    .card--content {
      padding-top: 20px;
      width: 50vw;
      margin-top: 14%;
      /* height: 23vh; */
      margin-left: 25%;
      border-radius: 20px;
      border: solid 3px rgba(247, 246, 247, 1);
      border-bottom-width: 8px;
      background-color: white;
      .card--title {
        position: relative;
        .card--img {
          width: 5vw;
        }
        .close--arrow {
          display: block;
          position: absolute;
          right: 35px;
          bottom: 26px;
        }
      }
      .card--moods {
        .cards--moods--img {
          padding: 0 23px;
        }
      }
    }
  }

  @media screen and (min-width: 1084px) {
    margin-top: 16%;
    .card--content {
      margin-top: 12%;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 14%;
    .card--content {
      margin-top: 10%;
      .card--title {
        .card--img {
          width: 4vw;
        }
      }
    }
  }

  @media screen and (min-width: 1288px) {
    .card--content {
      margin-top: 6%;
    }
  }

  @media screen and (min-width: 1364px) {
    margin-top: 13%;
    .card--content {
      margin-top: 4%;
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 7%;
    .card--content {
      width: 30vw;
      height: 84vh;
      margin-top: 11px;
      margin-left: 33%;
      .card--title {
        margin-bottom: 0;
        .card--img {
          width: 3vw;
        }
      }
      .card--moods {
        /* margin: 0;
        margin-bottom: 4%; */
        margin: 24px 0;
        .cards--moods--img {
          width: 8vw;
          padding: 0 21px;
        }
      }
      .title--card {
        div {
          margin-bottom: 7%;
        }
        .card--desc {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default ModalNewCardStyled;
