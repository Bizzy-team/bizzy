import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";
function InputsForm(props) {
  return (
    <InputFormStyled>
      <div className={`${props.spaceName}--space--${props.fieldName}`}>
        <input
          type={`${props.fieldName}`}
          id={`input--${props.fieldName}`}
          placeholder={`${props.placeholderInput}`}
          ref={props.inputRef}
          required
        ></input>
      </div>
    </InputFormStyled>
  );
}

export default InputsForm;
