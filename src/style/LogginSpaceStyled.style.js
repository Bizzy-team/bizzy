import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const LogginSpaceStyled = styled(GlobalContainer)`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5vh;
  font-size: 1.2em;
  font-family: "Roboto";
  h1 {
    font-family: "Roboto";
    font-weight: bold;
    font-size: 3.1em;
    color: ${props => props.theme.colorSecondary};
    margin-bottom: 12%;
  }
  div {
    margin-bottom: 6%;
    button {
      border: none;
      background-color: ${props => props.theme.color};
      color: ${props => props.theme.colorSecondary};
      border-radius: 10px;
      padding: 6px 8px;
      width: 100%;
        &:active {
          background-color: ${props => props.theme.color};
        }
    }
  }
  .loggin--space--password {
    margin-bottom: 0;
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
        color: ${props => props.theme.colorSecondary};
      }
    }
  }
  .loggin--space--btn {
    margin-top: 12%;
  }
  .loggin--space--sign--btn {
    margin-top: 8%;
  }
`;

export default LogginSpaceStyled;
