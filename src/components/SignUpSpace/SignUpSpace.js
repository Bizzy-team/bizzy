import React, { useState } from "react";
import http from "../../utlis/http";
import { Redirect } from "react-router-dom";
import { ReactSVG } from "react-svg";
import LoaderSvg from "../../img/loader.svg";
import Header from "../Header/Header";
import SignUpSpaceStyled from "../../style/SignUpSpaceStyled.style";
import GeometryImg from "../../img/geometry_desktop.svg";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";

function SignUpSpace() {
  const refInputFirstName = React.useRef(null);
  const refInputLastName = React.useRef(null);
  const refInputMail = React.useRef(null);
  const refInputPswd = React.useRef(null);
  const refInputCheckPswd = React.useRef(null);
  const refInputConditions = React.useRef(null);
  const [data, setData] = useState({
    loader: false,
    btnDisabled: true,
    error: {},
    errorApi: false,
    errorMessage: ""
  });
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    const arrInputId = [
      "inputFirstName",
      "inputLastName",
      "inputMail",
      "inputPswd",
      "inputCheckPswd"
    ];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    if (window.matchMedia("screen and (min-width: 1000px)").matches) {
      document.querySelector("body").style = `background-image: url(${bcImg})`;
    }

    return setData(newState);
  }, []); //eslint-disable-line

  function checkUserSub(e) {
    e.preventDefault();

    const newState = { ...data };
    const inputIdTarget = e.target.id;

    if (e.type === "change" && inputIdTarget !== "input--conditions") {
      if (!newState.error[inputIdTarget].accessToChange) {
        return;
      }
    }

    if (e.target.value === "" && inputIdTarget !== "input--conditions") {
      if (newState.error[inputIdTarget].accessToChange) {
        return updateState(inputIdTarget, "Field empty");
      }
      return;
    }

    if (inputIdTarget === "inputMail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      )
        return updateState(inputIdTarget, "Format mail incorrect");
    }

    if (inputIdTarget === "inputPswd") {
      if (e.target.value.length < 6)
        return updateState(inputIdTarget, "Le mot de passe doit faire 6 charactères");

      if (refInputCheckPswd.current.value !== "") {
        if (refInputPswd.current.value !== refInputCheckPswd.current.value) {
          return updateState(
            refInputCheckPswd.current.id,
            "La confirmation est incorrecte"
          );
        }
      }
    }

    if (inputIdTarget === "inputCheckPswd") {
      if (e.target.value !== refInputPswd.current.value)
        return updateState(inputIdTarget, "La confirmation est incorrecte");
    }

    if (inputIdTarget !== "input--conditions") {
      if (!newState.error[inputIdTarget].accessToChange) {
        newState.error[inputIdTarget].accessToChange = true;
      }
      newState.error[inputIdTarget].error = false;
      newState.error[inputIdTarget].message = "";
    }

    if (
      refInputFirstName.current.value !== "" &&
      refInputLastName.current.value !== "" &&
      refInputMail.current.value !== "" &&
      refInputPswd.current.value !== "" &&
      refInputCheckPswd.current.value !== ""
    ) {
      const btnEnabled = Object.values(newState.error).every(el => !el.error);

      if (btnEnabled && refInputConditions.current.checked) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    return setData(newState);
  }

  function updateState(inputId, errorMessage) {
    const newState = { ...data };

    newState.error[inputId].error = true;
    newState.error[inputId].message = errorMessage;

    if (!newState.error[inputId].accessToChange) {
      newState.error[inputId].accessToChange = true;
    }

    if (!newState.btnDisabled) {
      newState.btnDisabled = true;
    }

    return setData(newState);
  }

  async function createUser(e) {
    e.preventDefault()

    try {
      const data = await http.post('auth/register', {
        name: refInputFirstName.current.value,
        familyName: refInputLastName.current.value,
        mail: refInputMail.current.value,
        password: refInputPswd.current.value
      })

      localStorage.setItem('userData', JSON.stringify(data.data.user));
      setRedirect(true);
    } catch (error) {
      alert(error)
    }
  }

  if (redirect) return <Redirect to="/home"></Redirect>;

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
      <SignUpSpaceStyled
        as="form"
        btnDisabled={data.btnDisabled}
        onSubmit={createUser}
      >
        <div className="form--inscription">
          <div className="form--inscription--title">
            <img src={GeometryImg} alt="img--inscription"></img>
            <h2>Inscription</h2>
          </div>
          <div className="input--data--name">
            <InputsForm
              type="text"
              inputId="inputFirstName"
              inputRef={refInputFirstName}
              inputPlaceholder="Prénom"
              inputCheckError={checkUserSub}
              isError={data.error.inputFirstName ? data.error.inputFirstName : ""}
            ></InputsForm>
            <InputsForm
              type="text"
              inputId="inputLastName"
              inputRef={refInputLastName}
              inputPlaceholder="Nom"
              inputCheckError={checkUserSub}
              isError={data.error.inputLastName ? data.error.inputLastName : ""}
            ></InputsForm>
          </div>
          <InputsForm
            type="text"
            inputId="inputMail"
            inputRef={refInputMail}
            inputPlaceholder="Mail"
            inputCheckError={checkUserSub}
            isError={data.error.inputMail ? data.error.inputMail : ""}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputPswd"
            inputRef={refInputPswd}
            inputPlaceholder="Mot de passe"
            inputCheckError={checkUserSub}
            isError={data.error.inputPswd ? data.error.inputPswd : ""}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputCheckPswd"
            inputRef={refInputCheckPswd}
            inputPlaceholder="Confirmer mot de passe"
            inputCheckError={checkUserSub}
            isError={data.error.inputCheckPswd ? data.error.inputCheckPswd : ""}
          ></InputsForm>
          <div className="form--inscription--conditions">
            <input
              type="checkbox"
              ref={refInputConditions}
              id="input--conditions"
              onChange={checkUserSub}
            ></input>
            <p>
              J'accepte <a href="/">les termes et conditions</a> et{" "}
              <a href="/">la politique de confidentialité</a>.
            </p>
          </div>
          <div className="form--inscription--btn">
            <input type="submit" disabled={data.btnDisabled} value="Inscription"></input>
          </div>
          <div className="form--inscription--link">
            <p>J'ai déjà un compte</p>
            <p>
              <a href="/">Connexion</a>
            </p>
          </div>
        </div>
      </SignUpSpaceStyled>
    </React.Fragment>
  );
}

export default SignUpSpace;
