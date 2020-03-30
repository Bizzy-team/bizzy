import styled from "styled-components";

const InputsForm = styled.div`
input {
  border-radius: 25px;
  background: white;
  border: solid 1px ${props => props.theme.color};
  padding: 5px 10px;
    &:focus {
      outline: none;
    }
}
`;

export default InputsForm;