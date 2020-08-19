import React from "react";
import { Link, Redirect } from "react-router-dom";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
// import { ReactSVG } from "react-svg";
// import LoaderSvg from "../../img/loader.svg";
import InputsForm from "../InputsForm/InputsForm";
// import FetchFunction from "../../utlis/FetchFunction";
import Header from "../Header/Header";
import GeometryImg from "../../img/geometry_desktop.svg";
import bcImg from "../../img/bc_desktop.svg";

function LogginSpace() {
  const inputMail = React.createRef(null);
  const inputPswd = React.createRef(null);
  const [data, setData] = React.useState({
    loader: false,
    error: {}
  });
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    const arrInputId = ["inputMail", "inputPswd"];
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

  function userAuth() {
    if (inputMail.current.value === "" || inputPswd.current.value === "") {
      return setData({
        ...data,
        error: true,
        errorMessage: "Empty fields."
      });
    }

    if (inputMail.current.value !== "" && inputPswd.current.value !== "") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          inputMail.current.value
        ) === false
      ) {
        return setData({
          ...data,
          errorMail: true,
          // error: true,
          errorMessageMail: "Wrong format email."
          // errorMessage: "Wrong format email."
        });
      }
      if (inputPswd.current.value.length < 6) {
        return setData({
          ...data,
          error: true,
          errorMessage: "Wrong password length."
        });
      }
      setData({
        loader: true
      });
    }
    // return FetchFunction("/login", "POST", {
    //   credentials: "include",
    //   body: {
    //     mail: inputMail.current.value,
    //     pswd: inputPswd.current.value
    //   }
    // })
    //   .then(dataParsed => {
    //     sessionStorage.setItem("UserToken", dataParsed.token);
    //     return setRedirect(true);
    //   })
    //   .catch(error => {
    //     setData({
    //       error: true,
    //       errorMessage: error.message
    //     });
    //   });
  }

  if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      <Header />
      <main>
        <LogginSpaceStyled as="form">
          <div className="form--connexion">
            <div className="form--connexion--title">
              <img src={GeometryImg} alt="img--connexion"></img>
              <h2>Connexion</h2>
            </div>
            <div className="input--data--name">
              <InputsForm
                type="text"
                inputId="inputMail"
                inputRef={inputMail}
                inputPlaceholder="Mail"
                // inputCheckError={checkUserSub}
                isError={data.error.inputMail ? data.error.inputMail : ""}
              ></InputsForm>
              <InputsForm
                type="password"
                inputId="inputPswd"
                inputRef={inputPswd}
                inputPlaceholder="Mot de passe"
                // inputCheckError={checkUserSub}
                isError={data.error.inputPswd ? data.error.inputPswd : ""}
              ></InputsForm>
              <div className="form--connexion--btn">
                <input
                  type="submit"
                  disabled={data.btnDisabled}
                  value="Connexion"
                ></input>
              </div>
              <div className="form--connexion--link">
                <p>J'ai déjà un compte</p>
                <p>
                  <a href="/">Connexion</a>
                </p>
              </div>
            </div>
          </div>
        </LogginSpaceStyled>
      </main>
    </React.Fragment>
  );
}

export default LogginSpace;
