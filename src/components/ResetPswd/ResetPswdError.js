import React from "react";
import { Link } from "react-router-dom";
import ResetPswdErrorStyled from "../../style/ResetPswdErrorStyled.style";

function ResetPswdError() {
  return(
    <ResetPswdErrorStyled as="div">
      <h1>Oops...! <i className="fas fa-exclamation-triangle"></i> Something went wrong.</h1>
      <p>Your link has expired, you need to make an other request, follow this <Link to="/forgot_password_form">link</Link></p>
    </ResetPswdErrorStyled >
  )
};

export default ResetPswdError;