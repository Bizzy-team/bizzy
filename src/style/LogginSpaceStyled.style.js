import styled from "styled-components";

export const IntroductionLogginSpace = styled.div`
margin-left: 24px;
margin-bottom: 22%;
h1 {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 3.3em;
    p {
      font-family: "Nunito";
    }
  }
`;

export const LogginSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5vh;
  margin-left: 24px;
  width: 100vw;
  font-size: 1.2em;
  font-family: "Roboto";
  div {
    margin-bottom: 4%;
    input {
      border: none;
      background: none;
      border-bottom: solid 1px ${props => props.theme.color};
    }
    button {
      border: none;
      background-color: ${props => props.theme.color};
      color: white;
      border-radius: 5px;
      padding: 3px 8px;
        &:active {
          background-color: ${props => props.theme.color};
        }
    }
  }
  .loggin--space--confirm--password {
    margin-bottom: 0;
  }
  .forgot--password {
    margin-top: 10%;
    p {
      font-size: 0.8em;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
  .loggin--space--sign--btn {
    margin-top 22%;
  }
`;

export default LogginSpaceStyled;
