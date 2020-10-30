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
  z-index: 1;
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
      .close--arrow {
        display: none;
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
          border: solid 2px;
          /* border: solid 2px ${props => props.theme.colorText}; */
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
        .error--message {
          display: flex;
          justify-content: space-between;
          font-size: .9em;
          color: ${props => props.theme.colorRed};;
          margin-top: ${props => {
            if (props.marginSize) {
              if (props.isError) {
                return "7px;";
              }
            }
            return "0;";
          }};

          img {
            display: ${props => (props.isError ? "block" : "none")};
            width: 18px;
          }
        }
      }
    .react-datepicker-wrapper {
      float: left;
      margin-bottom: 7%;
      width: 100%;
      font-family: "Nunito";
        div {
          input {
            border: none;
            border-bottom: 1px solid;
            border-color: ${props => props.theme.colorLola};
            padding-left: 22px;
            width: 100%;
            font-size: 0.8em;
            opacity: 0.3;
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
        opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
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
    ${props => props.isMarginTop && "margin-top: 2%"};
    .card--content {
      .card--title {
        /* margin-bottom: 13%; */
        margin-bottom: ${props => (props.isErrorMessage ? "0%" : "13%")};
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
      .title--card {
        div {
          .error--message {
            padding: 0px 8px 12px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 340px) {
    ${props => (props.isMarginTop ? "margin-top: 2%" : "margin-top: 31%")};

  }

  @media screen and (min-width: 418px) {
    .card--content {
      .card--moods {
        margin: 8% 1px;
      }
      .title--card {
        .card--desc {
          textarea {
            width: 90%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 427px) {
    ${props => {
      if (props.isMarginTop) {
        return "margin-top: 1%; padding-top: 4%;";
        // return "margin-top: 1%; padding-top: 25%;";
      }
    }}
  }

  @media screen and (min-width: 474px) {
    /* margin-top: 26%; */
    margin-top: 3%;
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
    margin-top: 2%;
    /* margin-top: 23%; */
    .card--content {
      .card--moods {
        margin: 2% 1px;
        .cards--moods--img {
          width: 66vw;
          padding: 0 44px;
        }
      }
    }
  }

  @media screen and (min-width: 594px) {
    /* margin-top: 21%; */
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
    /* margin-top: 19%; */
    .card--content {
      .card--moods {
        h4 {
          font-size: 1.5em;
        }
        .cards--moods--img {
          /* width: 100%; */
          width: 85vw;
          /* padding: 0 66px; */
          margin: 0 auto;
        }
      }
      .title--card {
        .card--buttons {
          padding-top: 0;
        }
      }
    }
  }

  @media screen and (min-width: 713px) {
    margin-top: -7px;
  }

  @media screen and (min-width: 1000px) {
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: ${props => (props.isModalNewCard ? "0" : "18%")};
    ${props => props.isModalNewCard && "padding-top: 0;"};
    .card--content {
      ${props => (props.isModalNewCard ? "margin-top: 10%;" : "margin-top: 14%;")};
      /* ${props => (props.isModalNewCard ? "margin-top: 2%;" : "margin-top: 14%;")}; */
      padding-top: 20px;
      width: 50vw;
      margin-left: 25%;
      border-radius: 20px;
      border: solid 3px rgba(247, 246, 247, 1);
      border-bottom-width: 8px;
      background-color: white;
      height: 75%;
      /* ${props => props.isModalNewCard && "height: 75vh;"}; */
      .card--title {
        position: relative;
        ${props => props.isModalNewCard && "margin-bottom: 0;"};
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
        ${props => props.isModalNewCard && "margin: 5% 1px;"};
        .cards--moods--img {
          padding: 0 23px;
          width: 48vw;
        }
      }
      .title--card {
        .card--buttons {
          padding-top: 20px;
        }
      }
    }
  }

  @media screen and (min-width: 1084px) {
    margin-top: ${props => (props.isModalNewCard ? "0;" : "16%;")};
    .card--content {
      margin-top: ${props => (props.isModalNewCard ? "10%;" : "12%;")};
    }
  }

  @media screen and (min-width: 1180px) {
    .card--content {
      height: 71%!important;
      /* ${props => props.isModalNewCard && "height: 71vh;"}; */
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: ${props => (props.isModalNewCard ? "0;" : "14%;")};
    .card--content {
      margin-top: ${props => (props.isModalNewCard ? "10%;" : "18%;")};
      .card--title {
        .card--img {
          width: 4vw;
        }
      }
    }
  }

  @media screen and (min-width: 1260px) {
    .card--content {
      height: 65vh!important;
      /* ${props => props.isModalNewCard && "height: 65vh;"}; */
      /* ${props => (props.isModalNewCard ? "height: 65vh;" : "height: 84vh;")}; */
      /* height: ${props => (props.isModalNewCard ? "65vh;" : "84vh;")}; */
    }
  }

  @media screen and (min-width: 1288px) {
    .card--content {
      margin-top: ${props => (props.isModalNewCard ? "10%" : "6%")};
    }
  }

  @media screen and (min-width: 1364px) {
    margin-top: ${props => (props.isModalNewCard ? "0" : "13%")};
    .card--content {
      margin-top: ${props => (props.isModalNewCard ? "10%" : "4%")};
    }
  }



  @media screen and (min-width: 1400px) {
    margin-top: ${props => (props.isModalNewCard ? "0" : "7%")};
    .card--content {
      width: 30vw;
      height: 70vh!important;
      margin-top: ${props => (props.isModalNewCard ? "5%" : "11px")};
      margin-left: 33%;
      /* ${props => (props.isModalNewCard ? "height: 85vh" : "height: 84vh")}; */
      /* height: ${props => (props.isModalNewCard ? "85vh" : "84vh")}; */
      .card--title {
        margin-bottom: 0;
        .card--img {
          width: 3vw;
        }
      }
      .card--moods {
        margin: 24px 0;
        .cards--moods--img {
          width: 8vw;
          padding: 0 21px;
          margin: 0;
        }
      }
      .title--card {
        div {
          /* margin-bottom: ${props => (props.isError ? "1%" : "7%")}; */
          .error--message {
            padding: 0 8px;
          }
        }
        .card--desc {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default ModalNewCardStyled;
