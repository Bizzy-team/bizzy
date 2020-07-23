import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";

function InputsForm(props) {
  return (
    <InputFormStyled as="div" isError={props.isError.error}>
        <input
          type={props.type}
          id={props.inputId}
          ref={props.inputRef}
          onBlur={props.inputCheckError}
          onChange={props.inputCheckError}
          required
        >
        </input>
        <span>
          {props.inputPlaceholder}
        </span>
        {
          props.isError.error && (
            <div>
              <small>{props.isError.message}</small>
            </div>
          )
        }
    </InputFormStyled>
  );
}

export default InputsForm;
