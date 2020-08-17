import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";
import ResetPswdStyled from "../../style/ResetPswdStyled.style";
import InputFormStyled from "../../style/InputFormStyled.style";
import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";
import ResetPswdError from "./ResetPswdError";
import ResetSuccessModal from "./ResetSuccessModal";
import FetchFunction from "../../utlis/FetchFunction";

function ResetPswd() {
  const pswd = React.createRef(null);
  const checkPswd = React.createRef(null);
  const [data, setData] = React.useState({
    loader: false,
    submitLoader: false,
    successResetModal: false,
    error: false,
    errorMessage: "",
    urlToken: new URLSearchParams(window.location.search).get("token"),
    responseToken: ""
  });

  useEffect(() => {
    // fetch(`http://localhost:3000/api/resetpassword?token=${data.urlToken}`)
    // FetchFunction(`/resetpassword?token=${data.urlToken}`)

    fetch(`https://bizzy.sh.now/api/resetpassword?mode=dev&token=${data.urlToken}`)
      .then(response => {
        if (response.status >= 500 && response.status <= 600) {
          return setData({
            ...data,
            error: true,
            errorMessage: "Something went wrong with the server."
          });
        }
        return response.json();
      })
      .then(dataParsed => {
        setData({
          ...data,
          loader: true
        });
        if (dataParsed === undefined) {
          return setData({
            ...data,
            error: true,
            errorMessage:
              "Oops something went wrong with the server. Please try again in a few minutes or send me a message if the problem persists."
          });
        }

        if (dataParsed.error) {
          return setData({
            ...data,
            loader: true,
            error: dataParsed.error,
            errorMessage: dataParsed.message
          });
        }

        return setData({
          ...data,
          loader: true,
          responseToken: dataParsed.token
        });
      });
  }, []);

  function checkNewPswd() {
    if (pswd.current.value === "" && checkPswd.current.value === "") {
      return setData({
        ...data,
        error: true,
        errorMessage: "Empty fields."
      });
    }

    if (pswd.current.value !== "") {
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

      return FetchFunction("/resetpassword", "PUT", {
        headers: {
          Authorization: data.responseToken
        },
        body: {
          newpswd: pswd.current.value,
          token: data.urlToken
        }
      })
        .then(dataParsed => {
          if (!dataParsed.error) {
            return setData({
              ...data,
              submitLoader: true,
              successResetModal: true,
              errorMessage: dataParsed.message
            });
          }
          return setData({
            ...data,
            submitLoader: true
          });
        })
        .catch(error => {
          setData({
            error: true,
            errorMessage: error.message
          });
        });
    }
  }

  if (!data.loader)
    return <ReactSVG src={LoaderSvg} style={{ backgroundColor: "#F9FAFA" }} />;
  if (!data.responseToken) return <ResetPswdError></ResetPswdError>;
  if (data.successResetModal)
    return <ResetSuccessModal updateMessage={data.errorMessage}></ResetSuccessModal>;

  return (
    <section>
      <ResetPswdStyled className="resetPswd--space">
        <div className="user--icon--reset">
          <i className="far fa-user-circle"></i>
        </div>
        <div className="user--username--reset">
          <h3>John Doe</h3>
        </div>
        {data.error && (
          <div className="form-group bg-danger rounded p-2 ml-1" style={{ width: "90%" }}>
            <p className="text-light">{data.errorMessage}</p>
          </div>
        )}
        {data.submitLoader && (
          <ReactSVG src={LoaderSvg} style={{ backgroundColor: "#F9FAFA" }} />
        )}
        <div className="resetPswd">
          <div className="resetPswd--title">
            <h1>Reset Password</h1>
          </div>
          <div className="resetPswd--intro mb-5">
            <p>Enter a new password for your account.</p>
          </div>
          {data.loader && (
            <ReactSVG
              src={LoaderSvg}
              style={{ backgroundColor: `${props => props.theme.backgroundColor}` }}
            />
          )}
          <InputFormStyled>
            <InputsForm
              spaceName="resetPswd"
              type="password"
              fieldName="password"
              placeholderInput="Password"
              inputRef={pswd}
            />
            <InputsForm
              spaceName="resetPswd"
              type="password"
              fieldName="confirm--password"
              placeholderInput="Confirm Password"
              inputRef={checkPswd}
            />
          </InputFormStyled>
          <p>
            <small className="text-muted" style={{ fontSize: "0.5em" }}>
              6 characters minimum.
            </small>
          </p>
          <div className="reset--space--sign--btn">
            <button onClick={() => checkNewPswd()}>Reset password</button>
          </div>
        </div>
      </ResetPswdStyled>
    </section>
  );
}

export default ResetPswd;
