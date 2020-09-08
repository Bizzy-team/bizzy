import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import InputsForm from "../InputsForm/InputsForm";
import ModalStyled from "../../style/ModalStyled.style";
import ModalMessage from "./ModalMessage";

function Modal(props) {
  const inputOldPswd = React.useRef(null);
  const inputNewPswd = React.useRef(null);
  const inputCheckPswd = React.useRef(null);

  const [data, setData] = React.useState({
    btnDisabled: true,
    error: {},
    isDisabled: true,
    confirmModal: false
  });

  React.useEffect(() => {
    const arrInputId = ["inputOldPswd", "inputNewPswd", "inputCheckPswd"];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    return setData(newState);
  }, []); //eslint-disable-line

  function checkNewPswd(e) {
    e.preventDefault();

    const newState = { ...data };
    const inputIdTarget = e.target.id;

    if (e.type === "change") {
      if (!newState.error[inputIdTarget].accessToChange) {
        return;
      }
    }

    if (e.target.value === "") {
      if (newState.error[inputIdTarget].accessToChange) {
        return updateState(inputIdTarget, "Champs vide.");
      }
      return;
    }

    if (
      inputIdTarget === "inputOldPswd" ||
      inputIdTarget === "inputNewPswd" ||
      inputIdTarget === "inputCheckPswd"
    ) {
      if (e.target.value.length < 6)
        return updateState(inputIdTarget, "Le mot de passe doit faire 6 charactères");

      if (inputCheckPswd.current.value !== "") {
        if (inputNewPswd.current.value !== inputCheckPswd.current.value) {
          return updateState(inputCheckPswd.current.id, "La confirmation est incorrecte");
        }
      }
    }

    if (inputIdTarget === "inputCheckPswd") {
      if (e.target.value !== inputNewPswd.current.value)
        return updateState(inputIdTarget, "La confirmation est incorrecte");
    }

    if (!newState.error[inputIdTarget].accessToChange) {
      newState.error[inputIdTarget].accessToChange = true;
    }
    newState.error[inputIdTarget].error = false;
    newState.error[inputIdTarget].message = "";

    if (
      inputOldPswd.current.value !== "" &&
      inputNewPswd.current.value !== "" &&
      inputCheckPswd.current.value !== ""
    ) {
      const btnEnabled = Object.values(newState.error).every(el => !el.error);

      if (btnEnabled) {
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

  function changePswd() {
    const newState = { ...data };

    document.querySelector(".modal--reset--pswd").style.display = "none";

    newState.confirmModal = true;

    return setData(newState);
  }

  return (
    <>
      {
      data.confirmModal &&
        <ModalMessage
          closeModal={props.closeModal}
          modalTitle="Changer le mot de passe"
          modalMessage="Votre mot de passe a été changé ! Un mail vous a été envoyé à
          adresse@gmail.com contenant votre nouveau mot de passe."
          modalBtnValue="Ok"
        >
        </ModalMessage>
      }
      <ModalStyled btnDisabled={data.btnDisabled} className="modal--reset--pswd">
        <div className="pswd--reset--content">
          <div className="pswd--title">
            <div className="pswd--icon">
              <img src={GeometryImg} alt="icon--title"></img>
            </div>
            <h2>Changer le mot de passe</h2>
            <img
              src={CloseArrow}
              alt="icon--close"
              className="close--arrow"
              onClick={props.closeModal}
            ></img>
          </div>
          <div className="modal--inputs">
            <InputsForm
              type="password"
              inputId="inputOldPswd"
              inputRef={inputOldPswd}
              inputPlaceholder="Votre ancien mot de passe"
              inputCheckError={checkNewPswd}
              isError={data.error.inputOldPswd ? data.error.inputOldPswd : ""}
            ></InputsForm>
            <InputsForm
              type="password"
              inputId="inputNewPswd"
              inputRef={inputNewPswd}
              inputPlaceholder="Votre nouveau mot de passe"
              inputCheckError={checkNewPswd}
              isError={data.error.inputNewPswd ? data.error.inputNewPswd : ""}
            ></InputsForm>
            <InputsForm
              type="password"
              inputId="inputCheckPswd"
              inputRef={inputCheckPswd}
              inputPlaceholder="Votre ancien mot de passe"
              inputCheckError={checkNewPswd}
              isError={data.error.inputCheckPswd ? data.error.inputCheckPswd : ""}
            ></InputsForm>
          </div>
          <div className="buttons--actions">
            <input
              type="button"
              value="Changer"
              disabled={data.btnDisabled}
              className="btn--change"
              onClick={changePswd}
            ></input>
            <input
              type="button"
              value="Annuler"
              className="btn--cancel"
              onClick={props.closeModal}
            ></input>
          </div>
        </div>
      </ModalStyled>
    </>
  );
}

export default Modal;
