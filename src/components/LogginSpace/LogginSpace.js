import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  IntroductionLogginSpace,
  LogginSpaceStyled
} from "../../style/LogginSpaceStyled.style";
import { ReactSVG } from "react-svg";
import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";

function LogginSpace() {
  const inputMail = React.createRef(null);
  const inputPswd = React.createRef(null);
  const [data, setData] = React.useState({
    loader: false,
    error: false,
    errorMessage: ""
  });
  const [redirect, setRedirect] = React.useState(false);

  function userAuth() {
    if (inputMail.current.value === "" || inputPswd.current.value === "") {
      return setData({
        ...data,
        error: true,
        errorMessage: "Empty fields."
      });
    }

    if (inputMail.current.value !== "" && inputPswd.current.value !== "") {
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
      if (inputPswd.current.value.length < 6) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Wrong password length."
        });
      }
      setData({
        loader: true
      });

      return fetch("http://localhost:3000/api/login", {
      // return fetch("https://bizzy.now.sh/api/login", {
      // return fetch(`${process.env.APIKEY}/login`, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          mail: inputMail.current.value,
          pswd: inputPswd.current.value
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

          sessionStorage.setItem("UserToken", dataParsed.token);
          return setRedirect(true);
        })
    }
  }

  if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      <IntroductionLogginSpace className="introduction">
        <h1>Welcome back</h1>
        <p>It's time to log in and see who is around you</p>
      </IntroductionLogginSpace>
      {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: "#F9FAFA" }} />}
      {data.error && (
        <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
          <p className="text-light">{data.errorMessage}</p>
        </div>
      )}
      <LogginSpaceStyled className="loggin--space">
        <InputsForm
          spaceName="loggin"
          type="mail"
          fieldName="mail"
          placeholderInput="Email"
          inputRef={inputMail}
        />
        <InputsForm
          spaceName="loggin"
          type="password"
          fieldName="password"
          placeholderInput="Password"
          inputRef={inputPswd}
        />
        <p>
          <small className="text-muted" style={{ fontSize: "0.4em" }}>
            6 characters minimum.
          </small>
        </p>
        <div className="loggin--space--btn">
          <button onClick={() => userAuth()}>Log in</button>
        </div>
        <div className="forgot--password">
          <p>
            <Link to="/forgotPasswordForm">
              {" "}
              <strong>Forgot password ?</strong>
            </Link>
          </p>
        </div>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default LogginSpace;
