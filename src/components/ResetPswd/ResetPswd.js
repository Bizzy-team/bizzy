import React from "react";
import { ReactSVG } from "react-svg";
import ResetPswdStyled from "../../style/ResetPswdStyled.style";
import InputFormStyled from "../../style/InputFormStyled.style";
import LoaderSvg from "../../img/loader.svg";
import { Redirect } from "react-router-dom";
import InputsForm from "../InputsForm/InputsForm";

function ResetPswd() {
  const pswd = React.createRef(null);
  const checkPswd = React.createRef(null);
  const [data, setData] = React.useState({
    error: false,
    errorMessage: ""
  });
  const [redirect, setRedirect] = React.useState(false);

  function checkNewPswd() {
    if (pswd.current.value === "" && checkPswd.current.value === "")
    {
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

      setData({
        loader: true
      });
      return setRedirect(true);
    }
  }

  if (redirect) return <Redirect to="/"></Redirect>;

  return(
    <section>
       <ResetPswdStyled className="resetPswd--space">
         <div className="icon--reset">
          <i class="fas fa-key"></i>
         </div>
         <div className="resetPswd--title">
          <h1>Reset Password</h1>
         </div>
         <div className="resetPswd--intro">
          <p>Enter a new password for your account.</p>
         </div>
        {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: "#F9FAFA" }} />}
        <InputFormStyled>
          <InputsForm spaceName="resetPswd" fieldName="password" placeholderInput="Password" inputRef={pswd} />
          <InputsForm spaceName="resetPswd" fieldName="password" placeholderInput="Confirm Password" inputRef={checkPswd} />
        </InputFormStyled>
        <p>
          <small className="text-muted" style={{ fontSize: "0.5em" }}>
            6 characters minimum.
          </small>
        </p>
        <div className="reset--space--sign--btn">
          <button onClick={() => checkNewPswd()}>Reset password</button>
        </div>
      </ResetPswdStyled>
    </section>
  )
};

export default ResetPswd;