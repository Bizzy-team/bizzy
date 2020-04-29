import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";
function InputsForm(props) {
  function infoPlaceholder() {
    if (props.error) {
      return `placeholder--for--${props.placeholderInput}--error`;
    }

    if (props.loader) {
      return `placeholder--for--${props.placeholderInput}--loader`;
    }

    return `placeholder--for--${props.placeholderInput}`;
  }

  return (
    <InputFormStyled>
      <div className={`${props.spaceName}--space--${props.fieldName}`}>
        <input
          type={`${props.type}`}
          id={`input--${props.fieldName}`}
          ref={props.inputRef}
          required
        ></input>
        <span className={infoPlaceholder()}>
          {props.placeholderInput}
        </span>
      </div>
    </InputFormStyled>
  );
}

export default InputsForm;
