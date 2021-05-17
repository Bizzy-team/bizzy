import React from "react";
import { connect } from 'react-redux';
import SupportStyled from "../../style/SupportStyled.style";
import GeometryImg from "../../img/geometry_desktop.svg";
import Header from "../Header/Header";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";
import WarningIcon from "../../img/warning.svg";

function Support(props) {
  const refInputFirstName = React.useRef(null);
  const refInputLastName = React.useRef(null);
  const refInputMail = React.useRef(null);
  const refInputMessage = React.useRef(null);

  const [data, setData] = React.useState({
    loader: false,
    btnDisabled: true,
    error: {},
    errorApi: false,
    errorMessage: ""
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

    if (e.target.value === "") {
      if (newState.error[inputTargetId].accessToChange) {
        return updateState(inputTargetId, "Field empty");
      }
      return;
    }

    if (inputTargetId === "inputMail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      )
        return updateState(inputTargetId, "Format mail incorrect");
    }

    if (!newState.error[inputTargetId].accessToChange) {
      newState.error[inputTargetId].accessToChange = true;
    }

    newState.error[inputTargetId].error = false;
    newState.error[inputTargetId].message = "";

    if (
      refInputFirstName.current.value !== "" &&
      refInputLastName.current.value !== "" &&
      refInputMail.current.value !== "" &&
      refInputMessage.current.value !== ""
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

  return (
    <>
      <Header />
      <main>
        <SupportStyled as="form" btnDisabled={data.btnDisabled}>
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
              ref={refInputMessage}
              onBlur={checkUserInfos}
              onChange={checkUserInfos}
            ></textarea>
            {data.error.inputMessage && data.error.inputMessage.error && (
              <div className="error--message">
                <small>{data.error.inputMessage.message}</small>
                <img src={WarningIcon} alt="warning--icon"></img>
              </div>
            )}
          </div>
          <div className="form--support--btn">
            <input type="submit" disabled={data.btnDisabled} value="Envoyer"></input>
          </div>
        </SupportStyled>
      </main>
    </>
  );
}

function mapStateToProps (state) {
  return {
    userData: state.users.userConnected
  }
}

export default connect(
  mapStateToProps,
)(Support);
