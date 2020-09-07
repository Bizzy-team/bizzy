import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import InputsForm from "../InputsForm/InputsForm";
import ModalStyled from "../../style/ModalStyled.style";

function Modal() {
  const inputOldPswd = React.useRef(null);
  const inputNewPswd = React.useRef(null);
  const inputCheckPswd = React.useRef(null);

  const [data, setData] = React.useState({
    btnDisabled: true,
    error: {},
    isDisabled: true
  });

  React.useEffect(() => {
    const arrInputId = [
      "inputOldPswd",
      "inputNewPswd",
      "inputCheckPswd"
    ];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    return setData(newState);
  }, []); //eslint-disable-line

  return (
    <ModalStyled as="section">
      <div className="pswd--title">
        <div className="pswd--icon">
          <img src={GeometryImg} alt="icon--title"></img>
        </div>
        <h2>Changer le mot de passe</h2>
        <img src={CloseArrow} alt="icon--close" className="close--arrow"></img>
      </div>
      <div>
        <InputsForm
          type="password"
          inputId="inputOldPswd"
          inputRef={inputOldPswd}
          inputPlaceholder="Votre ancien mot de passe"
          // inputCheckError={checkUserData}
          isError={data.error.inputOldPswd ? data.error.inputOldPswd : ""}
        ></InputsForm>
        <InputsForm
          type="password"
          inputId="inputNewPswd"
          inputRef={inputNewPswd}
          inputPlaceholder="Votre nouveau mot de passe"
          // inputCheckError={checkUserData}
          isError={data.error.inputNewPswd ? data.error.inputNewPswd : ""}
        ></InputsForm>
        <InputsForm
          type="password"
          inputId="inputCheckPswd"
          inputRef={inputCheckPswd}
          inputPlaceholder="Votre ancien mot de passe"
          // inputCheckError={checkUserData}
          isError={data.error.inputCheckPswd ? data.error.inputCheckPswd : ""}
        ></InputsForm>
      </div>
      <div className="buttons--actions">
      <input
        type="button"
        value="Changer"
        disabled={data.btnDisabled}
        className="btn--change"
        // onClick={confirmEdit}
      ></input>
      <input
        type="button"
        value="Annuler"
        className="btn--cancel"
        // onClick={confirmEdit}
      ></input>
      </div>
    </ModalStyled>
  )
}

export default Modal;