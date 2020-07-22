import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";

function InputsForm(props) {
  return (
    <InputFormStyled as="div" error={props.error} inputId={props.inputId}>
        <input
          type={props.type}
          id={props.inputId}
          ref={props.inputRef}
          onBlur={props.inputCheckError}
          onChange={props.inputCheckValue}
          required
        >
        </input>
        <span>
          {props.inputPlaceholder}
        </span>
        {
          props.error.active && props.error.errorIdInput === props.inputId && (
            <div>
              <small>{props.error.errorMessage}</small>
            </div>
          )
        }
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
