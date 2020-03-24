import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordFormStyled from "../../style/ForgotPasswordFormStyled.style";

function ForgotPasswordForm() {
  return (
    <ForgotPasswordFormStyled>
      <h1>Forgot password</h1>
      <div className="icon--unlock">
        <i className="fas fa-unlock-alt"></i>
      </div>
      <p>Enter your email below to receive your password reset instructions.</p>
      <div className="input--mail">
        <input type="mail" placeholder="Your Email."></input>
      </div>
      <button>Send password</button>
      <div className="link--to--home">
        <Link to="/">I remember the password</Link>
      </div>
    </ForgotPasswordFormStyled>
  )
};

export default ForgotPasswordForm;