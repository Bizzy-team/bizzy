import React from "react";
// import { Link, Redirect } from "react-router-dom";
import ForgotPasswordFormStyled from "../../style/ForgotPasswordFormStyled.style";
// import { ReactSVG } from "react-svg";
// import LoaderSvg from "../../img/loader.svg";
import Header from "../Header/Header";
import InputsForm from "../InputsForm/InputsForm";
import GeometryImg from "../../img/geometry_desktop.svg";
import bcImg from "../../img/bc_desktop.svg";
// import FetchFunction from "../../utlis/FetchFunction";

function ForgotPasswordForm() {
  const inputMail = React.useRef(null);
  const [data, setData] = React.useState({
    loader: false,
    btnDisabled: true,
    error: {
      inputMail: {
        error: false,
        message: "",
        accessToChange: false
      }
    }
  });
  // const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("screen and (min-width: 1000px)").matches) {
      document.querySelector("body").style = `background-image: url(${bcImg})`;
    }
  }, []);

  function checkUserMail(e) {
    e.preventDefault();

    const newState = { ...data };

    if (e.type === "change") {
      if (!newState.error.inputMail.accessToChange) {
        return;
      }
    }

    if (e.target.value === "") {
      if (newState.error.inputMail.accessToChange) {
        newState.error.inputMail.error = true;
        newState.error.inputMail.message = "Le champ est vide.";

        if (!newState.error.inputMail.accessToChange) {
          newState.error.inputMail.accessToChange = true;
        }

        if (!newState.btnDisabled) {
          newState.btnDisabled = true;
        }

        return setData(newState);
      }
    }

    if (e.target.id === "forgotPswd") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      ) {
        newState.error.inputMail.error = true;
        newState.error.inputMail.message = "Format de mail incorrect.";

        if (!newState.error.inputMail.accessToChange) {
          newState.error.inputMail.accessToChange = true;
        }

        if (!newState.btnDisabled) {
          newState.btnDisabled = true;
        }

        return setData(newState);
      }
    }

    if (inputMail.current.value !== "") {
      if (!newState.error.inputMail.error) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    newState.error.inputMail.error = false;
    newState.error.inputMail.message = "";

    return setData(newState);
  }

  // function checkMail() {
  //   if (inputMail.current.value === "") {
  //     return setData({
  //       ...data,
  //       error: true,
  //       errorMessage: "Please, enter an email."
  //     });
  //   }

  //   if (inputMail.current.value !== "") {
  //     if (
  //       /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //         inputMail.current.value
  //       ) === false
  //     ) {
  //       return setData({
  //         ...data,
  //         error: true,
  //         errorMessage: "Wrong format email."
  //       });
  //     }
  //     setData({
  //       loader: true
  //     });

  //     return FetchFunction("/forgot", "POST", {
  //       body: {
  //         mail: inputMail.current.value
  //       }
  //     })
  //     .then(dataParsed => {
  //       return setRedirect(true);
  //     })
  //     .catch(error => {
  //       setData({
  //         error: true,
  //         errorMessage: error.message
  //       })
  //     })
  //   }
  // }

  // if (redirect) return <Redirect to="/forgot_password_confirmation"></Redirect>;

  return (
    <>
      <Header />
      <ForgotPasswordFormStyled as="form" btnDisabled={data.btnDisabled}>
        <div className="form--forgot--pswd--title">
          <div className="form--forgot--pswd--img">
            <img src={GeometryImg} alt="img--forgot--pswd"></img>
          </div>
          <h2> Mot de passe oublié :(</h2>
        </div>
        {/* {data.loader && <ReactSVG src={LoaderSvg} style={{ backgroundColor: `${props => props.theme.backgroundColor}` }} />} */}
        <InputsForm
          type="mail"
          inputId="forgotPswd"
          inputRef={inputMail}
          inputPlaceholder="Mail"
          inputCheckError={checkUserMail}
          isError={data.error.inputMail ? data.error.inputMail : ""}
        />
        <div className="form--forgot--pswd--btn">
          <input type="submit" disabled={data.btnDisabled} value="Réinitialiser"></input>
        </div>
        <div className="form--forgot--link">
          <p>Retour à la page de</p>
          <p>
            <a href="/">Connexion</a>
          </p>
        </div>
      </ForgotPasswordFormStyled>
    </>
  );
}

export default ForgotPasswordForm;
