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
      }
      input {
        border-color: rgba(0, 0, 0, 0.31);
      }
      .input--data--name {
        display: flex;
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
      }
    }
  }

  .profile--security {
    .profile--security--title {
      display: flex;
      justify-content: space-between;
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
      margin-bottom: 20px;
      h2 {
        font-size: 1.3em;
        font-family: "CeraPro Bold";
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
`;

export default UserProfileStyled;
