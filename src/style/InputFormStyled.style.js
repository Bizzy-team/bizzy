import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const InputsForm = styled(GlobalContainer)`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colorLola};
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  position: relative;
  input {
    /* ${props => props.marginLeft && `margin-left: ${props.marginLeft}`}; */
    font-family: ${props => props.theme.fontFamilyText};
    font-weight: 200;
    ${props =>
      props.isError
        ? `color: ${props => props.theme.colorRed};`
        : `color: ${props.theme.colorBtn};`}
    border: none;
    border-bottom: solid 1px ${props => props.theme.color};
    color: ${props => props.theme.colorText};
    border-color: ${props => props.theme.colorLola};
    /* padding: 26px 0 0 10px; */

    &:focus {
      border: solid 2px ${props => props.theme.color};
      outline: none;
    }
  }

  span {
    position: absolute;
    pointer-events: none;
    transition: 0.2s ease all;
    background-color: ${props => props.theme.colorPrincipal};
    color: grey;
  }

  .error--message {
    display: flex;
    justify-content: space-between;
    font-size: .9em;
    color: ${props => props.theme.colorRed};;
    margin-top: 16px;

    img {
      width: 18px;
    }
  }

@media screen and (min-width: 300px) {
  input {
    padding: 6px 0 0 10px;
    margin-right: 12px;
    width: 97%;

    &:focus {
      border: solid 2px ${props => props.theme.color};
      outline: none;
      border-color: ${props => props.theme.colorBtn};
    }

    &:focus ~ span,
    &:not(:focus):valid ~ span,
    &:focus ~ span,
    &:not(:focus):valid ~ span,
    &:focus ~ span,
    &:not(:focus):valid ~ span,
    &:focus ~ span,
    &:not(:focus):valid ~ span,
    &:focus ~ span,
    &:not(:focus):valid ~ span {
      top: -8px;
      left: 4%;
      opacity: 1;
    }
  }

    span {
      font-size: 0.8em;
      left: 20px;
      opacity: 0.3;
    }
}
`;

export default InputsForm;
