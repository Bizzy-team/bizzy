import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";
function InputsForm(props) {
  return (
    <InputFormStyled marginLeft={`${props.marginLeft}`}>
      <input
        type={`${props.fieldName}`}
        id={`input--${props.fieldName}`}
        placeholder={`${props.placeholderInput}`}
        ref={props.inputRef}
        required
      />
    </InputFormStyled>
  );
}

export default InputsForm;
