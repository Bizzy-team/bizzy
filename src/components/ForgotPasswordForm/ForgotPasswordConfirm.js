import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordConfirmStyled from "../../style/ForgotPasswordConfirmStyled";

function ForgotPasswordConfirm() {
  return(
    <ForgotPasswordConfirmStyled as="div">
      <div className="success--icon">
        <i className="far fa-check-circle"></i>
      </div>
      <div className="success--title">
        <h2>Password recovered... !</h2>
      </div>
      <div className="success--content">
        <p>Your password Recovered Successfully, check yours mails and</p>
        <p>Please login</p>
        <button><Link to="/">Login</Link></button>
      </div>
    </ForgotPasswordConfirmStyled>
  )
};

export default ForgotPasswordConfirm;