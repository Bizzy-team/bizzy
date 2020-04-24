import styled from "styled-components";

const InputsForm = styled.div`
color: white;
div {
display: flex;
flex-direction: column;
margin-bottom: 10%;
  input {
    ${props => props.marginLeft && `margin-left: ${props.marginLeft}`};
    background: none;
    font-family: ${props => props.theme.fontFamilyText};
    font-weight: 200;
    color: white;
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
      left: 10%;
      opacity: 1;
    }
    &:focus ~ .placeholder--for--Password,
    &:not(:focus):valid ~ .placeholder--for--Password {
      top: 450px;
      left: 10%;
      opacity: 1;
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
`;

export default InputsForm;
