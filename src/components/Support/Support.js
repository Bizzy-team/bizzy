import React from "react";
import SupportStyled from "../../style/SupportStyled.style";
import GeometryImg from "../../img/geometry_desktop.svg";
import Header from "../Header/Header";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";

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
    errorMessage: ""
  });

  React.useEffect(() => {
    const arrInputId = [
      "inputFirstName",
      "inputLastName",
      "inputMail",
      "inputMessage"
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

  return(
    <>
      <Header />
      {/* <SupportStyled as="form" btnDisabled={data.btnDisabled}> */}
      <SupportStyled as="form">
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
            // inputCheckError={checkUserMail}
            isError={data.error.inputFirstName ? data.error.inputFirstName : ""}
            />
          <InputsForm
            type="text"
            inputId="inputLastName"
            inputRef={refInputLastName}
            inputPlaceholder="Nom"
            // inputCheckError={checkUserMail}
            isError={data.error.inputLastName ? data.error.inputLastName : ""}
            />
          </div>
        <InputsForm
          type="mail"
          inputId="inputMail"
          inputRef={refInputMail}
          inputPlaceholder="Mail"
          // inputCheckError={checkUserMail}
          isError={data.error.inputMail ? data.error.inputMail : ""}
        />
        <InputsForm
          type="text"
          inputId="inputMessage"
          inputRef={refInputMessage}
          inputPlaceholder="Message"
          // inputCheckError={checkUserMail}
          isError={data.error.inputMessage ? data.error.inputMessage : ""}
        />
        <div className="form--support--btn">
          {/* <input type="submit" disabled={data.btnDisabled} value="Envoyer"></input> */}
          <input type="submit" value="Envoyer"></input>
        </div>
      </SupportStyled>
    </>
  )
}

export default Support;