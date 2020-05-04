import React from "react";
import { Link, Redirect } from "react-router-dom";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import { ReactSVG } from "react-svg";
import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";
import FetchFunction from "../../utlis/FetchFunction";

function LogginSpace() {
  const inputMail = React.createRef(null);
  const inputPswd = React.createRef(null);
  const [data, setData] = React.useState({
    loader: false,
    error: false,
    errorMail: false,
    errorMessage: "",
    errorMessageMail: "",
    errorMessagePassword: ""
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
          errorMail: true,
          // error: true,
          errorMessageMail: "Wrong format email."
          // errorMessage: "Wrong format email."
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
    }
    return FetchFunction("/login", "POST", {
      credentials: 'include',
      body: {
        mail: inputMail.current.value,
        pswd: inputPswd.current.value
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

  console.log(data.errorMessageMail);
  

  if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: `${props => props.theme.backgroundColor}` }} />}
      {/* {data.error && (
        <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
          <p className="text-light">{data.errorMessage}</p>
        </div>
      )} */}
      <LogginSpaceStyled className="loggin--space">
        <h1>Welcome back.</h1>
        <InputsForm
          spaceName="loggin"
          type="mail"
          fieldName="mail"
          placeholderInput="Email"
          inputRef={inputMail}
        />
         {data.errorMail && (
            <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
              <p className="text-light">{data.errorMessageMail}</p>
            </div>
          )}
        <InputsForm
          spaceName="loggin"
          type="password"
          fieldName="password"
          placeholderInput="Password"
          inputRef={inputPswd}
        />
        {data.error && (
            <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
              <p className="text-light">{data.errorMessage}</p>
            </div>
          )}
        <p>
          <small className="text-muted">6 characters minimum.</small>
        </p>
        <div className="forgot--password">
          <p>
            <Link to="/forgot_password_form">
              {" "}
              <strong>Forgot password ?</strong>
            </Link>
          </p>
        </div>
        <div className="loggin--space--btn">
          <button onClick={() => userAuth()}>Log in</button>
        </div>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default LogginSpace;
