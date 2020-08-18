import React from "react";
import SupportStyled from "../../style/SupportStyled.style";
import GeometryImg from "../../img/geometry_desktop.svg";
import Header from "../Header/Header";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";
import WarningIcon from "../../img/warning.svg";


function Support() {
  const refInputFirstName = React.useRef(null);
  const refInputLastName = React.useRef(null);
  const refInputMail = React.useRef(null);
  const refInputMessage = React.useRef(null);

  const [data, setData] = React.useState({
    loader: false,
    btnDisabled: true,
    error: {},
    errorApi: false,
    errorMessage: "",
    errorDesc: false
  });

  React.useEffect(() => {
    const arrInputId = ["inputFirstName", "inputLastName", "inputMail", "inputMessage"];
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

  function checkUserInfos(e) {
    e.preventDefault();

    const newState = { ...data };
    const inputTargetId = e.target.id;

    if (e.type === "change") {
      if (!newState.error[inputTargetId].accessToChange) {
        return;
      }
    }

    console.log(inputTargetId);
    console.log(e.target.value);

    if (e.target.value === "") {
      if (!newState.error[inputTargetId].accessToChange) {
        newState.error[inputTargetId].error = true;
        newState.error[inputTargetId].message = "Le champ est vide.";

        if (!newState.error[inputTargetId].accessToChange) {
          newState.error[inputTargetId].accessToChange = true;
        }

        if (!newState.btnDisabled) {
          newState.btnDisabled = true;
        }

        return setData(newState);
      }
    }

    if (inputTargetId === "inputMail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      ) {
        newState.error[inputTargetId].error = true;
        newState.error[inputTargetId].message = "Format de mail incorrect.";

        if (!newState.error[inputTargetId].accessToChange) {
          newState.error[inputTargetId].accessToChange = true;
        }

        if (!newState.btnDisabled) {
          newState.btnDisabled = true;
        }

        return setData(newState);
      }
    }

    debugger;
    if (inputTargetId === "inputMessage") {
      if (e.target.value === "") {
        newState.errorDesc = true;
        newState.error[inputTargetId].error = true;
        newState.error[inputTargetId].message = "Le message est vide.";

        if (!newState.error[inputTargetId].accessToChange) {
          newState.error[inputTargetId].accessToChange = true;
        }

        if (!newState.btnDisabled) {
          newState.btnDisabled = true;
        }

        return setData(newState);
      }
    }

    if (refInputMail.current.value !== "") {
      if (!newState.error[inputTargetId].error) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    newState.error[inputTargetId].error = false;
    newState.error[inputTargetId].message = "";

    return setData(newState);
  }

  return (
    <>
      <Header />
      <SupportStyled as="form" btnDisabled={data.btnDisabled}>
      {/* <SupportStyled as="form"> */}
        <div className="form--support--title">
          <div className="form--support--img">
            <img src={GeometryImg} alt="img--icon--support"></img>
          </div>
          <h2>Contactez-nous !</h2>
        </div>
        <div className="form--support--identity">
          <InputsForm
            type="text"
            inputId="inputFirstName"
            inputRef={refInputFirstName}
            inputPlaceholder="Prénom"
            inputCheckError={checkUserInfos}
            isError={data.error.inputFirstName ? data.error.inputFirstName : ""}
          />
          <InputsForm
            type="text"
            inputId="inputLastName"
            inputRef={refInputLastName}
            inputPlaceholder="Nom"
            inputCheckError={checkUserInfos}
            isError={data.error.inputLastName ? data.error.inputLastName : ""}
          />
        </div>
        <div className="form--support--mail">
          <InputsForm
            type="mail"
            inputId="inputMail"
            inputRef={refInputMail}
            inputPlaceholder="Mail"
            inputCheckError={checkUserInfos}
            isError={data.error.inputMail ? data.error.inputMail : ""}
          />
        </div>
        <div className="form--support--message">
          <textarea
            id="inputMessage"
            rows="6"
            cols="34"
            placeholder="Décrivez votre demande."
            onBlur={checkUserInfos}
          ></textarea>
          {data.errorDesc ? (
            <div className="error--message">
              <small>{data.error.inputMessage.message}</small>
              <img src={WarningIcon} alt="warning--icon"></img>
            </div>
          ) : ""
        }
        </div>
        <div className="form--support--btn">
          <input type="submit" disabled={data.btnDisabled} value="Envoyer"></input>
          {/* <input type="submit" value="Envoyer"></input> */}
        </div>
      </SupportStyled>
    </>
  );
}

export default Support;
