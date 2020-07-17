import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";
function InputsForm(props) {
  return (
    <InputFormStyled as="div">
        <input
          type={props.type}
          id={props.inputId}
          ref={props.inputRef}
          required={props.inputRequired}
        >
        </input>
        <span className={`placeholder--for--${props.inputLabel}`}>
          {props.inputPlaceholder}
        </span>
      {/* <div className={`space--${props.fieldName}`}>
        <input
          type={`${props.type}`}
          id={`input--${props.fieldName}`}
          ref={props.inputRef}
          required
        ></input>
        <span className={`placeholder--for--${props.placeholderInput}`}>
          {props.placeholderInput}
        </span>
      </div> */}
    </InputFormStyled>
  );
}

export default InputsForm;
