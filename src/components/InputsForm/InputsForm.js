import React from "react";
import InputFormStyled from "../../style/InputFormStyled.style";
import WarningIcon from "../../img/warning.svg";

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
      ></input>
      <span>{props.inputPlaceholder}</span>
      {props.isError.error && (
        <div className="error--message">
          <small>{props.isError.message}</small>
          <img src={WarningIcon} alt="warning--icon"></img>
        </div>
      )}
    </InputFormStyled>
  );
}

export default InputsForm;
