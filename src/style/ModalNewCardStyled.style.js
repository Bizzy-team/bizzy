import styled from "styled-components";

const ModalNewCardStyled = styled.section`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  margin-top: 37%;
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
`;

export default ModalNewCardStyled;