import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ReactSVG } from "react-svg";
// import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import LoaderSvg from "../../img/loader.svg";
// import InputsForm from "../InputsForm/InputsForm";
import FetchFunction from "../../utlis/FetchFunction";
import Header from "../Header/Header";
import SignUpSpaceStyled from "../../style/SignUpSpaceStyled.style";
import GeometryImg from "../../img/geometry_desktop.svg";
import WarningIcon from "../../img/warning.svg";
import InputsForm from "../InputsForm/InputsForm";

function SignUpSpace() {
  const inputFirstName = React.useRef(null);
  const inputLastName = React.useRef(null);
  const inputMail = React.useRef(null);
  const inputPswd = React.useRef(null);
  const inputCheckPswd = React.useRef(null);
  const [data, setData] = useState({
    loader: false,
    btnDisabled: true,
    error: {
      active: false,
      errorMessage: "",
      errorIdInput: "",
    }
  });
  const [redirect, setRedirect] = React.useState(false);

  function checkUserSub(e) {
    e.preventDefault();

    if (
      (inputFirstName.current.value !== "" &&
        inputLastName.current.value !== "" &&
        inputMail.current.value !== "" &&
        inputPswd.current.value !== "" &&
        inputCheckPswd.current.value !== "")
    ) {
      // Check pas d'error
    }


    if (e.target.value === "") {
      return setData({
        ...data,
        error: {
          active: true,
          errorMessage: "Empty field",
          errorIdInput: e.target.id
        }
      })
    }

    if (e.target.id === "inputMail") {
      if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value) === false ) {
        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Wrong format email",
            errorIdInput: "inputMail"
          }
        })
      }
    }

    return setData({
      ...data,
      error: {
        active: false,
        errorMessage: "",
        errorIdInput: ""
      }
    })

    // Check if mail pas empty / Check si le format du mail est good
    // Check si la length du pswd est good

    // Checker si error
    // Si error: checker  l'array où ils sont
    // Update object
    // Render: les news arrays



    // if (inputMail.current.value !== "" && inputPswd.current.value !== "") {
    //   if (inputFirstName.current.value === "") {
    //     return setData({
    //       ...data,
    //       error: true,
    //       errorMessage: "Enter a firstName"
    //     });
    //   }

    //   if (inputLastName.current.value === "") {
    //     return setData({
    //       ...data,
    //       error: true,
    //       errorMessage: "Enter a last name"
    //     });
    //   }

    //   if (
    //     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    //       inputMail.current.value
    //     ) === false
    //   ) {
    //     return setData({
    //       ...data,
    //       error: true,
    //       errorMessage: "Wrong format email."
    //     });
    //   }

    //   if (inputPswd.current.value.length < 6) {
    //     return setData({
    //       ...data,
    //       error: true,
    //       errorMessage: "Wrong password length."
    //     });
    //   }

    //   if (inputPswd.current.value !== inputCheckPswd.current.value) {
    //     return setData({
    //       ...data,
    //       error: true,
    //       errorMessage: "Confirm Password incorrect."
    //     });
    //   }

    //   setData({
    //     loader: true
    //   });
    // }
  }

  // if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      {/* 
        - Header
        - Section pour icon + title.
        - Main avec form inside.
      */}
      <Header></Header>
      {data.loader && (
        <ReactSVG
          src={LoaderSvg}
          style={{ backgroundColor: `${props => props.theme.backgroundColor}` }}
        />
      )}
      <SignUpSpaceStyled as="form">
        <div className="form--inscription">
          <div className="form--inscription--title">
            <img src={GeometryImg} alt="img--inscription"></img>
            <h2>Inscription</h2>
          </div>
          <div className="input--data--name">
            <InputsForm
              type="text"
              inputId="inputFirstName"
              inputRef={inputFirstName}
              inputPlaceholder="Prénom"
              inputCheckError={checkUserSub}
              error={data.error}
            ></InputsForm>
            <InputsForm
              type="text"
              inputId="inputLastName"
              inputRef={inputLastName}
              inputPlaceholder="Nom"
              inputCheckError={checkUserSub}
              error={data.error}
            ></InputsForm>
          </div>
          <InputsForm
            type="text"
            inputId="inputMail"
            inputRef={inputMail}
            inputPlaceholder="Mail"
            inputCheckError={checkUserSub}
            error={data.error}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputPswd"
            inputRef={inputPswd}
            inputPlaceholder="Mot de passe"
            inputCheckError={checkUserSub}
            error={data.error}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputCheckPswd"
            inputRef={inputCheckPswd}
            inputPlaceholder="Confirmer mot de passe"
            inputCheckError={checkUserSub}
            error={data.error}
          ></InputsForm>
          <div className="form--inscription--conditions">
            <input type="checkbox"></input>
            <p>
              J'accepte <a href="/">les termes et conditions</a> et{" "}
              <a href="/">la politique de confidentialité</a>.
            </p>
          </div>
          <div className="form--inscription--btn">
            <input type="submit" disabled={data.btnDisabled} value="Submit"></input>
            {/* <button onClick={checkUserSub}>Inscription</button> */}
          </div>
          <div className="form--inscription--link">
            <p>J'ai déjà un compte</p>
            <p>
              <a href="/">Connexion</a>
            </p>
          </div>
        </div>
      </SignUpSpaceStyled>
      {/* <LogginSpaceStyled className="sign--up--space">
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
      </LogginSpaceStyled> */}
    </React.Fragment>
  );
}

export default SignUpSpace;
