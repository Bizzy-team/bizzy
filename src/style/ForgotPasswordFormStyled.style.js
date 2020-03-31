import styled from "styled-components";

const ForgotPasswordFormStyled = styled.section`
  h1 {
    text-align: center;
    margin-top: 10%;
  }

  .icon--unlock {
    text-align: center;
    margin: 20% 0;
    i {
      background-color: #edf8ef;
      padding: 30px;
      font-size: 10em;
      color: ${props => props.theme.color};
      border-radius: 50px;
    }
  }

  #input--mail {
    padding-left: 20px;
    width: 90%;
    input {
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }

  p {
    font-family: "Nunito";
    text-align: center;
  }

  button {
    background-color: ${props => props.theme.color};
    width: 90%;
    color: white;
    font-family: "Roboto";
    border: none;
    border-radius: 30px;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 7px;
  }
  .link--to--home {
    text-align: center;
    margin-top: 20%;
    a {
      color: black;
    }
  }
`;

export default ForgotPasswordFormStyled;
