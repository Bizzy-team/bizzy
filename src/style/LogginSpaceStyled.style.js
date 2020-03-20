import styled from "styled-components";

const LogginSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  width: 100vw;
  font-size: 1.7em;
  font-family: "Roboto";
  div {
    margin-bottom: 10%;
    input {
      border: none;
      background: none;
      border-bottom: solid 1px ${props => props.theme.color};
    }
    button {
      border: none;
      background-color: ${props => props.theme.color};
    }
  }
`;

export default LogginSpaceStyled;
