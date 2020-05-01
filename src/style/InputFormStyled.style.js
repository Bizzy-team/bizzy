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

      /* Focus if loader */
      &:focus ~ .placeholder--for--Email--loader,
      &:not(:focus):valid ~ .placeholder--for--Email--loader {
        top: 583px;
        left: 8%;
      }

      &:focus ~ .placeholder--for--Password--loader,
      &:not(:focus):valid ~ .placeholder--for--Password--loader {
        top: 700px;
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

/* *********** SIGN UP SPACE START **************** */
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

      /* Focus if loader */
      &:focus ~ .placeholder--for--Username--loader,
      &:not(:focus):valid ~ .placeholder--for--Username--loader {
        top: 511px;
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
        left: 8%;
      }

      /* Focus if loader */
      &:focus ~ .placeholder--for--Email--loader,
      &:not(:focus):valid ~ .placeholder--for--Email--loader {
        top: 629px;
        left: 8%;
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
        left: 8%;
      }

      /* Focus if loader */
      &:focus ~ .placeholder--for--Password--loader,
      &:not(:focus):valid ~ .placeholder--for--Password--loader {
        top: 745px;
        left: 8%;
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

      /* Focus if loader */
      &:focus ~ .Password--loader,
      &:not(:focus):valid ~ .Password--loader {
        top: 860px;
        left: 8%;
      }
    }
  }
/* *********** SIGN UP SPACE END **************** */

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
        left: 8%;
      }

      /* Focus if loader */
      &:focus ~ .placeholder--for--Email--loader,
      &:not(:focus):valid ~ .placeholder--for--Email--loader {
        top: 384px;
        left: 8%;
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
        left: 8%;
      }

      /* Focus if loader */
      &:focus ~ .placeholder--for--Password--loader,
      &:not(:focus):valid ~ .placeholder--for--Password--loader {
        top: 719px;
        left: 8%;
      }
    }
  }

  .resetPswd--space--confirm--password {
    input {
      &:focus ~ .placeholder--for--Confirm,
      &:not(:focus):valid ~ .placeholder--for--Confirm {
        top: 600px;
      }

      /* Focus if error */
      &:focus ~ .Password--error,
      &:not(:focus):valid ~ .Password--error {
        top: 678px;
        left: 8%;
      }

      /* Focus if loader */
      &:focus ~ .Password--loader,
      &:not(:focus):valid ~ .Password--loader {
        top: 816px;
        left: 8%;
      }
    }
  }

  @media screen and (width: 375px) {
    div {
      input {
        &:focus ~ .placeholder--for--Email,
        &:not(:focus):valid ~ .placeholder--for--Email {
          top: 318px;
          left: 8%;
        }
      }
    }
  }

/* Iphone SE: 320x568 */
  @media screen and (width: 320px) {
    div {
      input {
        &:focus ~ .placeholder--for--Email,
        &:not(:focus):valid ~ .placeholder--for--Email {
          top: 163px;
          left: 8%;
        }

        &:focus ~ .placeholder--for--Password,
        &:not(:focus):valid ~ .placeholder--for--Password {
          top: 262px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Email--error,
        &:not(:focus):valid ~ .placeholder--for--Email--error {
          top: 247px;
          left: 8%;
        }

        &:focus ~ .placeholder--for--Password--error,
        &:not(:focus):valid ~ .placeholder--for--Password--error {
          top: 348px;
          left: 8%;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Email--loader,
        &:not(:focus):valid ~ .placeholder--for--Email--loader {
          top: 391px;
          left: 8%;
        }
        &:focus ~ .placeholder--for--Password--loader,
        &:not(:focus):valid ~ .placeholder--for--Password--loader {
          top: 491px;
          left: 8%;
        }
      }
    }

/* *********** SIGN UP SPACE **************** */
    .sign--space--username {
      input {
        &:focus ~ .placeholder--for--Username,
        &:not(:focus):valid ~ .placeholder--for--Username {
          top: 162px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Username--error,
        &:not(:focus):valid ~ .placeholder--for--Username--error {
          top: 246px;
          left: 8%;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Username--loader,
        &:not(:focus):valid ~ .placeholder--for--Username--loader {
          top: 390px;
          left: 8%;
        }
      }
    }

    .sign--space--mail {
      input {
        &:focus ~ .placeholder--for--Email,
        &:not(:focus):valid ~ .placeholder--for--Email {
          top: 263px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Email--error,
        &:not(:focus):valid ~ .placeholder--for--Email--error {
          top: 347px;
          left: 8%;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Email--loader,
        &:not(:focus):valid ~ .placeholder--for--Email--loader {
          top: 492px;
          left: 8%;
        }
      }
    }

    .sign--space--password {
      input {
        &:focus ~ .placeholder--for--Password,
        &:not(:focus):valid ~ .placeholder--for--Password {
          top: 362px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Password--error,
        &:not(:focus):valid ~ .placeholder--for--Password--error {
          top: 447px;
          left: 8%;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Password--loader,
        &:not(:focus):valid ~ .placeholder--for--Password--loader {
          top: 591px;
          left: 8%;
        }
      }
    }

    .sign--space--confirm--password {
      input {
        &:focus ~ .placeholder--for--Confirm,
        &:not(:focus):valid ~ .placeholder--for--Confirm {
          top: 461px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .Password--error,
        &:not(:focus):valid ~ .Password--error {
          top: 547px;
          left: 8%;
        }

        /* Focus if loader */
        &:focus ~ .Password--loader,
        &:not(:focus):valid ~ .Password--loader {
          top: 691px;
          left: 8%;
        }
      }
    }

/* *********** FORGOTPSWD SPACE **************** */
    .forgotPswd--space--mail {
      input {
        &:focus ~ .placeholder--for--Email,
        &:not(:focus):valid ~ .placeholder--for--Email {
          top: 158px;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Email--error,
        &:not(:focus):valid ~ .placeholder--for--Email--error {
          top: 234px;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Email--loader,
        &:not(:focus):valid ~ .placeholder--for--Email--loader {
          top: 358px;
        }
      }
    }

/* *********** RESETPSWD SPACE **************** */
    .resetPswd--space--password {
      input {
        &:focus ~ .placeholder--for--Password,
        &:not(:focus):valid ~ .placeholder--for--Password {
          top: 475px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .placeholder--for--Password--error,
        &:not(:focus):valid ~ .placeholder--for--Password--error {
          top: 548px;
        }

        /* Focus if loader */
        &:focus ~ .placeholder--for--Password--loader,
        &:not(:focus):valid ~ .placeholder--for--Password--loader {
          top: 687px;
        }
      }
    }

    .resetPswd--space--confirm--password {
      input {
        &:focus ~ .placeholder--for--Confirm ,
        &:not(:focus):valid ~ .placeholder--for--Confirm {
          top: 563px;
          left: 8%;
        }

        /* Focus if error */
        &:focus ~ .Password--error ,
        &:not(:focus):valid ~ .Password--error {
          top: 637px;
        }

        /* Focus if loader */
        &:focus ~ .Password--loader ,
        &:not(:focus):valid ~ .Password--loader {
          top: 775px;
        }
      }
    }
  }
`;

export default InputsForm;
