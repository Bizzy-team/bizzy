import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ReactSVG } from "react-svg";
// import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import LoaderSvg from "../../img/loader.svg";
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
      errorIdInput: ""
    },
    aboutInput: {
      isBlurActivated: false,
      focusInputId: []
    }
  });
  // const [redirect, setRedirect] = React.useState(false);

  function checkUserSub(e) {
    e.preventDefault();

    console.log(e.type);

    if (e.type === "change") {
      if (!data.aboutInput.isBlurActivated) {
        return;
      }
    }

    // if (e.type === "blur") {
    //   if (data.error.active === true) {
    //     const newState = {...data};

    //     newState.aboutInput.focusInputId.push(e.target.id);

    //     return setData(newState);
    //   }
    // }

    if (e.target.value === "") {
      return setData({
        ...data,
        error: {
          active: true,
          errorMessage: "Empty field",
          errorIdInput: e.target.id
        },
        isBlurActivated: true
      });
    }

    if (e.target.id === "inputMail") {
      const newState = {...data};

      newState.aboutInput.focusInputId.push(e.target.id);

      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      ) {
        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Format mail incorrect",
            errorIdInput: "inputMail"
          },
          aboutInput: {
            isBlurActivated: true,
            focusInputId: data.aboutInput.focusInputId
          }
        });
      }
    }

    // Si blur sur un input, push dans l'arr focusInputId
    // Pour chaque input id donner accès au onChange
    // 


    if (e.target.id === "inputPswd") {
      if (e.target.value.length < 6) {
        const newState = {...data};

        newState.aboutInput.focusInputId.push(e.target.id);

        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Longueur du mot de passe insuffisante",
            errorIdInput: "inputPswd"
          },
          aboutInput: {
            isBlurActivated: true,
            focusInputId: data.aboutInput.focusInputId
          }
        });
      }

      if (e.target.value !== inputCheckPswd.current.value) {
        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Mot de passe ne correspond pas à la confirmation",
            errorIdInput: "inputPswd"
          },
          isBlurActivated: true
        });
      }
    }

    if (e.target.id === "inputCheckPswd") {
      if (e.target.value.length < 6) {
        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Longueur du mot de passe insuffisante",
            errorIdInput: "inputCheckPswd"
          },
          isBlurActivated: true
        });
      }

      if (e.target.value !== inputPswd.current.value) {
        return setData({
          ...data,
          error: {
            active: true,
            errorMessage: "Confirmation du mot de passe incorrecte",
            errorIdInput: "inputCheckPswd"
          },
          isBlurActivated: true
        });
      }
    }


    

    return setData({
      ...data,
      error: {
        active: false,
        errorMessage: "",
        errorIdInput: ""
      },
      aboutInput: {
        isBlurActivated: false,
        focusInputId: []
      }
    });

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
              inputCheckValue={checkUserSub}
              error={data.error}
            ></InputsForm>
            <InputsForm
              type="text"
              inputId="inputLastName"
              inputRef={inputLastName}
              inputPlaceholder="Nom"
              inputCheckError={checkUserSub}
              inputCheckValue={checkUserSub}
              error={data.error}
            ></InputsForm>
          </div>
          <InputsForm
            type="text"
            inputId="inputMail"
            inputRef={inputMail}
            inputPlaceholder="Mail"
            inputCheckError={checkUserSub}
            inputCheckValue={checkUserSub}
            error={data.error}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputPswd"
            inputRef={inputPswd}
            inputPlaceholder="Mot de passe"
            inputCheckValue={checkUserSub}
            inputCheckError={checkUserSub}
            error={data.error}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputCheckPswd"
            inputRef={inputCheckPswd}
            inputPlaceholder="Confirmer mot de passe"
            inputCheckValue={checkUserSub}
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
            <input type="submit" disabled={data.btnDisabled} value="Inscription"></input>
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
