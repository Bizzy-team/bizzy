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
    error: false,
    errorMessage: "",
    errorElements: [],
    inputDataName: [
      {
        type: "text",
        inputId: "inputFirstName",
        inputRef: inputFirstName,
        inputLabel: "inputLabelFirstName",
        inputPlaceholder: "Prénom",
        inputRequired: true
      },
      {
        type: "text",
        inputId: "inputLasttName",
        inputRef: inputLastName,
        inputLabel: "inputLabelLastName",
        inputPlaceholder: "Nom",
        inputRequired: true
      }
    ],
    inputDataAccount: [
      {
        type: "mail",
        inputId: "inputMail",
        inputRef: inputMail,
        inputLabel: "inputLabelMail",
        inputPlaceholder: "Mail",
        inputRequired: true
      },
      {
        type: "password",
        inputId: "inputPswd",
        inputRef: inputPswd,
        inputLabel: "inputLabelPswd",
        inputPlaceholder: "Mot de passe",
        inputRequired: true
      },
      {
        type: "password",
        inputId: "inputCheckPswd",
        inputRef: inputCheckPswd,
        inputLabel: "inputLabelCheckPswd",
        inputPlaceholder: "Confirmer mot de passe",
        inputRequired: true
      }
    ]
  });
  const [redirect, setRedirect] = React.useState(false);

  
  function checkUserSub(e) {
    e.preventDefault();

    console.log(inputFirstName);
    console.log(inputLastName);
    console.log(inputMail);
    console.log(inputPswd);
    console.log(inputCheckPswd);
    if (
      inputFirstName.current.value === "" ||
      inputLastName.current.value === "" ||
      inputMail.current.value === "" ||
      (inputPswd.current.value === "" || inputCheckPswd.current.value === "")
    ) {
      return setData({
        ...data,
        errorElements: data.inputDataName.concat(data.inputDataAccount).filter(input => input.inputRef.current.value === "" && input.inputId)
      })
    }

    if (inputMail.current.value !== "" && inputPswd.current.value !== "") {
      console.log(inputMail);

      if (inputFirstName.current.value === "") {
        return setData({
          ...data,
          error: true,
          errorMessage: "Enter a firstName"
        });
      }

      if (inputLastName.current.value === "") {
        return setData({
          ...data,
          error: true,
          errorMessage: "Enter a last name"
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

      if (inputPswd.current.value.length < 6) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Wrong password length."
        });
      }

      if (inputPswd.current.value !== inputCheckPswd.current.value) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Confirm Password incorrect."
        });
      }

      setData({
        loader: true
      });

      // return FetchFunction("/register", "POST", {
      //   credentials: 'include',
      //   body: {
      //     mail: inputMail.current.value,
      //     pswd: pswd.current.value,
      //     username: inputUsername.current.value
      //   }
      // })
      // .then(dataParsed => {
      //   sessionStorage.setItem("UserToken", dataParsed.token);
      //   return setRedirect(true);
      // })
      // .catch(error => {
      //   setData({
      //     error: true,
      //     errorMessage: error.message
      //   })
      // })
    }
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
      {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: `${props => props.theme.backgroundColor}` }} />}
      <SignUpSpaceStyled as="form">
        <div className="form--inscription">
          <div className="form--inscription--title">
            <img src={GeometryImg} alt="img--inscription"></img>
            <h2>Inscription</h2>
          </div>
          <div className="input--data--name">
            {
              data.inputDataName.map((input, index) => {
                return (
                  <InputsForm
                  type={input.type}
                  inputId= {input.inputId}
                  inputRef={input.inputRef}
                  inputLabel= {input.inputLabel}
                  inputPlaceholder={input.inputPlaceholder}
                  inputRequired={input.inputRequired}
                  key={index}
                  >
                  </InputsForm>
                  )
                })
              }
            </div>
          {
            data.inputDataAccount.map((input, index) => {
              return (
                <InputsForm
                  type={input.type}
                  inputId= {input.inputId}
                  inputRef={input.inputRef}
                  inputLabel= {input.inputLabel}
                  inputPlaceholder={input.inputPlaceholder}
                  inputRequired={input.inputRequired}
                  key={index}
                >
                </InputsForm>
                )
            })
          }
          {data.error && (
            <div className="form--error p-2 ml-2">
              <p className="form--error--message">{data.errorMessage}</p>
              <p><img src={WarningIcon}></img></p>
            </div>
          )}
          <div className="form--inscription--conditions">
            <input type="checkbox"></input>
            <p>
              J'accepte <a href="/">les termes et conditions</a> et <a href="/">la politique de confidentialité</a>.
            </p>
          </div>
          <div className="form--inscription--btn">
            <button onClick={checkUserSub}>Inscription</button>
          </div>
          <div className="form--inscription--link">
            <p>J'ai déjà un compte</p>
            <p><a href="/">Connexion</a></p>
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
