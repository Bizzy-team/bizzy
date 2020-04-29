import React from "react";
import { Link, Redirect } from "react-router-dom";
import ForgotPasswordFormStyled from "../../style/ForgotPasswordFormStyled.style";
import { ReactSVG } from "react-svg";
import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";

function ForgotPasswordForm() {
  const inputMail = React.createRef(null);
  const [data, setData] = React.useState({
    loader: false,
    error: false,
    errorMessage: ""
  });
  const [redirect, setRedirect] = React.useState(false);

  function checkMail() {
    if (inputMail.current.value === "") {
      return setData({
        ...data,
        error: true,
        errorMessage: "Please, enter an email."
      });
    }

    if (inputMail.current.value !== "") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          inputMail.current.value
        ) === false
      ) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Wrong format email."
        });
      }
      setData({
        loader: true
      });
      return fetch("http://localhost:3000/api/forgot", {
        // return fetch("https://bizzy.now.sh/api/password/forgot", {
        method: "POST",
        body: JSON.stringify({
          mail: inputMail.current.value
        })
      })
        .then(response => {
          if (response.status >= 500 && response.status <= 600) {
            return setData({
              error: true,
              errorMessage: "Something went wrong with the server."
            });
          }
          return response.json();
        })
        .then(dataParsed => {
          if (dataParsed === undefined) {
            return setData({
              error: true,
              errorMessage:
                "Oops something went wrong with the server. Please try again in a few minutes or send me a message if the problem persists."
            });
          }
          if (dataParsed.error) {
            return setData({
              error: dataParsed.error,
              errorMessage: dataParsed.message
            });
          }
          return setRedirect(true);
        });
    }
  }

  if (redirect) return <Redirect to="/forgot_password_confirmation"></Redirect>;

  return (
    <ForgotPasswordFormStyled>
      <h1>Forgot password</h1>
      {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: "#F9FAFA" }} />}
      {data.error && (
        <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
          <p className="text-light">{data.errorMessage}</p>
        </div>
      )}
      <p>Enter your email below to receive your password reset instructions.</p>
      <InputsForm
        spaceName="forgotPswd"
        type="mail"
        fieldName="mail"
        placeholderInput="Email"
        error={data.error}
        inputRef={inputMail}
      />
      <button onClick={() => checkMail()}>Send password</button>
      <div className="link--to--home">
        <Link to="/">I remember the password</Link>
      </div>
    </ForgotPasswordFormStyled>
  );
}

export default ForgotPasswordForm;
