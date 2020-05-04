import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ReactSVG } from "react-svg";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";
import FetchFunction from "../../utlis/FetchFunction";

function SigninSpace() {
  const inputUsername = React.createRef(null);
  const inputMail = React.createRef(null);
  const pswd = React.createRef(null);
  const checkPswd = React.createRef(null);
  const [data, setData] = useState({
    loader: false,
    error: false,
    errorMessage: ""
  });
  const [redirect, setRedirect] = React.useState(false);

  function checkUserSub() {
    if (
      inputMail.current.value === "" ||
      (pswd.current.value === "" && checkPswd.current.value === "")
    ) {
      return setData({
        ...data,
        error: true,
        errorMessage: "Empty fields."
      });
    }

    if (inputMail.current.value !== "" && pswd.current.value !== "") {
      if (inputUsername.current.value === "") {
        return setData({
          ...data,
          error: true,
          errorMessage: "Enter a username"
        });
      }

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

      if (pswd.current.value.length < 6) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Wrong password length."
        });
      }

      if (pswd.current.value !== checkPswd.current.value) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Confirm Password incorrect."
        });
      }

      setData({
        loader: true
      });

      return FetchFunction("/register", "POST", {
        credentials: 'include',
        body: {
          mail: inputMail.current.value,
          pswd: pswd.current.value,
          username: inputUsername.current.value
        }
      })
      .then(dataParsed => {
        sessionStorage.setItem("UserToken", dataParsed.token);
        return setRedirect(true);
      })
      .catch(error => {
        setData({
          error: true,
          errorMessage: error.message
        })
      })
    }
  }

  if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: `${props => props.theme.backgroundColor}` }} />}
      {data.error && (
        <div className="form-group bg-danger rounded p-2 ml-2">
          <p className="text-light">{data.errorMessage}</p>
        </div>
      )}
      <LogginSpaceStyled className="sign--up--space">
        <h1>Welcome,</h1>
        <InputsForm
          type="text"
          fieldName="username"
          placeholderInput="Username"
          inputRef={inputUsername}
        />
        <InputsForm
          type="mail"
          fieldName="mail"
          placeholderInput="Email"
          inputRef={inputMail}
        />
        <InputsForm
          type="password"
          fieldName="password"
          placeholderInput="Password"
          inputRef={pswd}
          minLength="6"
        />
        <InputsForm
          type="password"
          fieldName="confirm--password"
          placeholderInput="Confirm Password"
          inputRef={checkPswd}
          minLength="6"
        />
        <p>
          <small className="text-muted">6 characters minimum.</small>
        </p>
        <div className="loggin--space--sign--btn">
          <button onClick={() => checkUserSub()}>Sign in</button>
        </div>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default SigninSpace;
