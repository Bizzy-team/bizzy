import styled from "styled-components";

const InputsForm = styled.div`
  color: ${props => props.theme.colorSecondary};
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
    input {
      ${props => props.marginLeft && `margin-left: ${props.marginLeft}`};
      background: none;
      font-family: ${props => props.theme.fontFamilyText};
      font-weight: 200;
      color: ${props => props.theme.colorSecondary};
      border: none;
      border-bottom: solid 1px ${props => props.theme.color};
      padding-bottom: 10px;
      padding-top: 26px;

      &:focus {
        border: solid 3px ${props => props.theme.color};
        outline: none;
      }

      &:focus ~ .placeholder--for--Email,
      &:not(:focus):valid ~ .placeholder--for--Email {
        top: 339px;
        left: 8%;
        opacity: 1;
      }

      &:focus ~ .placeholder--for--Password,
      &:not(:focus):valid ~ .placeholder--for--Password {
        top: 450px;
        left: 8%;
        opacity: 1;
      }

      /* Focus if error */
      &:focus ~ .placeholder--for--Email--error,
      &:not(:focus):valid ~ .placeholder--for--Email--error {
        top: 440px;
        left: 8%;
      }

      &:focus ~ .placeholder--for--Password--error,
      &:not(:focus):valid ~ .placeholder--for--Password--error {
        top: 550px;
        left: 8%;
      }
    }

    span {
      position: absolute;
      pointer-events: none;
      left: 20px;
      transition: 0.2s ease all;
      background-color: ${props => props.theme.backgroundColor};
    }
  }

  .sign--space--username {
    input {
      &:focus ~ .placeholder--for--Username,
      &:not(:focus):valid ~ .placeholder--for--Username {
        top: 268px;
        left: 8%;
      }

      /* Focus if error */
      &:focus ~ .placeholder--for--Username--error,
      &:not(:focus):valid ~ .placeholder--for--Username--error {
        top: 367px;
        left: 8%;
      }
    }
  }

  .sign--space--mail {
    input {
      &:focus ~ .placeholder--for--Email,
      &:not(:focus):valid ~ .placeholder--for--Email {
        top: 378px;
      }
      /* Focus if error */
      &:focus ~ .placeholder--for--Email--error,
      &:not(:focus):valid ~ .placeholder--for--Email-error {
        top: 480px;
      }
    }
  }

  .sign--space--password {
    input {
      &:focus ~ .placeholder--for--Password,
      &:not(:focus):valid ~ .placeholder--for--Password {
        top: 490px;
      }

      /* Focus if error */
      &:focus ~ .placeholder--for--Password--error,
      &:not(:focus):valid ~ .placeholder--for--Password--error {
        top: 591px;
      }
    }
  }

  .sign--space--confirm--password {
    input {
      &:focus ~ .placeholder--for--Confirm,
      &:not(:focus):valid ~ .placeholder--for--Confirm {
        top: 602px;
        left: 8%;
      }

      /* Focus if error */
      &:focus ~ .Password--error,
      &:not(:focus):valid ~ .Password--error {
        top: 702px;
        left: 8%;
      }
    }
  }

  .forgotPswd--space--mail {
    input {
      &:focus ~ .placeholder--for--Email,
      &:not(:focus):valid ~ .placeholder--for--Email {
        top: 184px;
      }

      /* Focus if error */
      &:focus ~ .placeholder--for--Email--error,
      &:not(:focus):valid ~ .placeholder--for--Email--error {
        top: 267px;
      }
    }
  }

  .resetPswd--space--password {
    input {
      &:focus ~ .placeholder--for--Password,
      &:not(:focus):valid ~ .placeholder--for--Password {
        top: 503px;
      }

      /* Focus if error */
      &:focus ~ .placeholder--for--Password--error,
      &:not(:focus):valid ~ .placeholder--for--Password--error {
        top: 582px;
      }
    }
  }

  .resetPswd--space--confirm--password {
    input {
      &:focus ~ .placeholder--for--Confirm,
      &:not(:focus):valid ~ .placeholder--for--Confirm {
        top: 600px;
        left: 8%;
      }

      /* Focus if error */
      &:focus ~ .Password--error,
      &:not(:focus):valid ~ .Password--error {
        top: 678px;
        left: 8%;
      }
    }
  }
`;

export default InputsForm;
