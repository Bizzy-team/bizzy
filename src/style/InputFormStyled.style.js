import styled from "styled-components";

const InputsForm = styled.div`
  color: ${props => props.theme.colorSecondary};
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
    position: relative;
    input {
      ${props => props.marginLeft && `margin-left: ${props.marginLeft}`};
      background: none;
      font-family: ${props => props.theme.fontFamilyText};
      font-weight: 200;
      color: ${props => props.theme.colorSecondary};
      border: none;
      border-bottom: solid 1px ${props => props.theme.color};
      padding: 26px 0 0 10px;

      &:focus {
        border: solid 3px ${props => props.theme.color};
        outline: none;
      }

      &:focus ~ .placeholder--for--Email,
      &:not(:focus):valid ~ .placeholder--for--Email {
        top: -10px;
        left: 4%;
        opacity: 1;
      }

      &:focus ~ .placeholder--for--Password,
      &:not(:focus):valid ~ .placeholder--for--Password {
        top: -10px;
        left: 4%;
        opacity: 1;
      }

      &:focus ~ .placeholder--for--Username,
      &:not(:focus):valid ~ .placeholder--for--Username {
        top: -10px;
        left: 4%;
      }

      &:focus ~ .placeholder--for--Confirm,
      &:not(:focus):valid ~ .placeholder--for--Confirm {
        top: -10px;
        left: 4%;
      }
    }

    span {
      position: absolute;
      pointer-events: none;
      font-size: 0.8em;
      left: 20px;
      transition: 0.2s ease all;
      background-color: ${props => props.theme.backgroundColor};
    }
  }
`;

export default InputsForm;
