import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordConfirmStyled from "../../style/ForgotPasswordConfirmStyled";

function ForgotPasswordConfirm() {
  return (
    <ForgotPasswordConfirmStyled as="div">
      <div className="success--title">
        <h1>Password recovered... !</h1>
      </div>
      <div className="success--content">
        <p>
          Your password Recovered Successfully, check your mailbox to follow instructions
          and
        </p>
        <p>Please login</p>
        <button>
          <Link to="/">Login</Link>
        </button>
      </div>
    </ForgotPasswordConfirmStyled>
  );
}

export default ForgotPasswordConfirm;
