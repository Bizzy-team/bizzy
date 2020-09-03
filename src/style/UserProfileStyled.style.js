import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const UserProfileStyled = styled(GlobalContainer)`
  margin-top: 40%;
  .profile--user--data {
    .profile--user--data--title {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      .profile--user--data--img {
        width: 25%;
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
      .profile--user--data--name {
        display: flex;
        align-items: center;
        h2 {
          font-family: "CeraPro Bold";
          font-size: 1.4em;
        }
      }
    }

    .profile--user--data--form {
      span {
        opacity: 1;
        /* color: ${props => props.isDisabled && props.theme.colorText}; */
        color: ${props => props.theme.colorText};
      }
      input {
        border-color: ${props =>
          props.isDisabled ? "rgba(0, 0, 0, 0.31)" : props.theme.colorSecondary};
      }
      .input--data--name {
        display: flex;
        div {
          width: 100%;
        }
      }

      .profile--user--about {
        #inputMessage {
          font-family: ${props => props.theme.fontFamilyText};
          font-weight: 200;
          padding: 20px 20px;
          border: solid 2px ${props => props.theme.colorText};
          border-radius: 20px;
          border-color: ${props =>
            props.isError ? props.theme.colorRed : props.theme.colorLola};
          font-size: 0.8em;
          width: 100%;
          color: ${props => props.theme.colorText};
          &:focus {
            border: solid 2px ${props => props.theme.colorBtn};
            outline: none;
            opacity: 1;
          }
        }
      }

      .profile--user--btn {
        margin-top: 20px;
        input {
          background-color: ${props => props.theme.colorBtn};
          color: ${props => props.theme.colorPrincipal};
          padding: 10px 24px;
          border: none;
          border-radius: 10px;
          width: 100%;
          font-size: 0.9em;
          margin-bottom: 15%;
        }
        .profile--user--btn--edit {
          display: ${props => (props.isDisabled ? "block" : "none")};
        }
        .profile--user--btn--confirm {
          display: flex;
          padding: 0 8px;
          .profile--user--btn--save, .profile--user--btn--cancel {
            display: ${props => (props.isDisabled ? "none" : "block")};
            width: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .profile--security {
    .profile--security--title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      h2 {
        font-size: 1.3em;
        font-family: "CeraPro Bold";
      }
    }
    .profile--security--buttons {
      input {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        width: 100%;
        font-size: 0.9em;
        opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
        margin-bottom: 5%;
      }
    }
  }

  .profile--user--cards {
    margin-top: 20px;
    .profile--user--cards--title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      h2 {
        font-size: 1.3em;
        font-family: "CeraPro Bold";
      }
      .profile--user--cards--img {
        .icon--arrow--right,
        .icon--arrow--left {
          display: none;
        }
      }
      .line {
        display: none;
      }
    }
    .user--cards {
      text-align: center;
      font-family: "Nunito";
    }
    .user--cards--btn {
      position: relative;
      input {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        width: 100%;
        font-size: 0.9em;
        opacity: ${props => (props.btnDisabled ? 0.5 : 1)};
        margin-bottom: 15%;
      }
      div {
        width: 2%;
        img {
          position: absolute;
          left: 55px;
          top: 11px;
        }
      }
    }
  }

  @media screen and (min-width: 300px) {
    .profile--user--data {
      .profile--user--data--title {
        .profile--user--data--img {
          width: 25%;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .profile--user--data {
      .profile--user--data--title {
        .profile--user--data--img {
          width: 20%;
        }
        .profile--user--data--name {
          margin-right: 26px;
        }
      }
    }
    .profile--security {
      .profile--security--title {
        h2 {
          font-size: 1.6em;
        }
      }
      .profile--security--img {
        img {
          width: 9vw;
        }
      }
    }
    .profile--user--cards {
      .profile--user--cards--title {
        h2 {
          font-size: 1.6em;
        }
      }
      .profile--user--cards--img {
        img {
          width: 9vw;
        }
      }
    }
  }

  @media screen and (min-width: 538px) {
    margin-top: 28%;
    .profile--user--data {
      .profile--user--data--title {
        margin-bottom: 40px;
        .profile--user--data--img {
          width: 15%;
        }
        .profile--user--data--name {
          margin-right: 80px;
        }
      }
    }
  }

  @media screen and (min-width: 620px) {
    .profile--security {
      .profile--security--title {
        h2 {
          font-size: 1.8em;
        }
        .profile--seucity--img {
          img {
            width: 8vw;
          }
        }
      }
    }
    .profile--user--cards {
      .profile--user--cards--title {
        h2 {
          font-size: 1.8em;
        }
        .profile--user--cards--img {
          img {
            width: 8vw;
          }
        }
      }
    }
  }

  @media screen and (min-width: 722px) {
    .profile--security,
    .profile--user--cards {
      .profile--security--title,
      .profile--user--cards--title {
        .profile--security--img,
        .profile--user--cards--img {
          img {
            width: 6vw;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    margin-top: 12%;
    align-items: center;
    justify-content: space-between;
    .profile--user--data {
      padding-top: 20px;
      width: 42vw;
      margin-top: 0;
      margin-right: 13%;
      box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
      border-radius: 20px;
      border: solid 3px rgba(247, 246, 247, 1);
      border-bottom-width: 8px;
      .profile--user--data--title {
        margin-bottom: 30px;
        .profile--user--data--img {
          width: 10%;
        }
        .profile--user--data--name {
          margin-right: 22%;
        }
      }
      .profile--user--about {
        padding: 10px;
        textarea {
          height: 75px;
        }
      }
      .profile--user--data--form {
        .profile--user--btn {
          input {
            margin-bottom: 3%;
          }
        }
      }
    }
    .profile--about--account {
      .profile--security {
        .profile--security--title {
          h2 {
            font-size: 1.3em;
          }
          img {
            width: 4vw;
          }
        }
        .profile--security--buttons {
          width: 39vw;
          height: 26vh;
          margin-top: 0;
          margin-right: 6%;
          padding: 20px;
          box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
          border-radius: 20px;
          border: solid 3px rgba(247, 246, 247, 1);
          border-bottom-width: 8px;
        }
      }
    }
    .profile--user--cards {
      position: relative;
      .profile--user--cards--title {
        h2 {
          font-size: 1.3em;
        }
        .profile--user--cards--img {
          display: flex;
          .icon--cards {
            display: none;
          }
          .icon--arrow--right,
          .icon--arrow--left {
            display: block;
            width: 2vw;
          }
          .icon--arrow--left {
            transform: rotate(180deg);
            margin-right: 10px;
          }
        }
      }
      .line {
        display: block;
        border-left: 1px solid ${props => props.theme.colorLola};
        position: absolute;
        right: 106%;
        height: 183px;
        box-shadow: 0px 5px 5px 1px rgba(247, 246, 247, 0.7);
      }
      .user--cards {
        width: 39vw;
        height: 32vh;
        margin-top: 0;
        margin-right: 6%;
        padding: 20px;
        box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
        border-radius: 20px;
        border: solid 3px rgba(247, 246, 247, 1);
        border-bottom-width: 8px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 9%;
    .profile--user--data {
      padding-top: 4px;
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 12%;
    .profile--user--data {
      width: 28vw;
      padding-top: 20px;
    }
    .profile--about--account {
      .profile--security,
      .profile--user--cards {
        .profile--security--title,
        .profile--user--cards--title {
          h2 {
            font-size: 1.6em;
          }
        }
      }
      .profile--security {
        .profile--security--buttons {
          padding: 40px;
        }
      }
      .profile--user--cards {
        .user--cards {
          height: 28vh;
        }
      }
    }
  }
`;

export default UserProfileStyled;
