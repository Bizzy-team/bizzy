import styled from "styled-components";

const ResetPswdStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5vh;
  width: 100vw;
  font-size: 1.2em;
  font-family: "Roboto";
  .user--icon--reset {
    display: flex;
    justify-content: center;
    margin-bottom: 20%;
    i {
      font-size: 5em;
      padding: 15px 15px;
      color: ${props => props.theme.color};
    }
  }
  .user--username--reset {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 20%;
      h3 {
        position: relative;
        display: inline-block;
          :before, :after {
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
            height: 1px;
            background: ${props => props.theme.color};
          }
          :before {
            right: 100%;
            margin-right: 15px;
          }
          :after {
            left: 100%;
            margin-left: 15px;
          }
      }
  }

  .resetPswd {
    padding-left: 20px;
  }

  div {
    margin-bottom: 4%;
    button {
      border: none;
      background-color: ${props => props.theme.color};
      color: ${props => props.theme.colorSecondary};
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
