import styled from "styled-components";

const ResetPswdStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5vh;
  margin-left: 24px;
  width: 100vw;
  font-size: 1.2em;
  font-family: "Roboto";
  .icon--reset {
    display: flex;
    justify-content: center;
    margin-bottom: 20%;
    i {
      font-size: 5em;
      padding: 15px 15px;
      color: ${props => props.theme.color};
      background-color: #EDF8EF;
    }
  }
  div {
    margin-bottom: 4%;
    button {
      border: none;
      background-color: ${props => props.theme.color};
      color: white;
      border-radius: 25px;
      padding: 6px 8px;
      width: 56%;
        &:active {
          background-color: ${props => props.theme.color};
        }
    }
  }
  .reset--space--sign--btn {
    margin-top 15%;
  }
`;

export default ResetPswdStyled;
