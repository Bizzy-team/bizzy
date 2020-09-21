import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import FoodMood from "../../img/food_mood.svg";
import DrinkMood from "../../img/drink_mood.svg";
import CultureMood from "../../img/culture_mood.svg";
import SportMood from "../../img/sport_mood.svg";
import OpenMindMood from "../../img/open_mind_mood.svg";
import WarningIcon from "../../img/warning.svg";
import InputsForm from "../InputsForm/InputsForm";
import ModalNewCardStyled from "../../style/ModalNewCardStyled.style";
import profanities from "profanities";
import ProfanitiesFr from "profanities/fr";

function ModalNewCard(props) {
  const inputTitle = React.useRef(null);
  const inputAddress = React.useRef(null);
  const inputTime = React.useRef(null);
  const inputDesc = React.useRef(null);

  const [data, setData] = React.useState({
    error: {},
    btnDisabled: true
  });

  React.useEffect(() => {
    const arrInputId = ["inputTitle", "inputAddress", "inputTime", "inputDesc"];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    document.addEventListener("click", function modalClose(e) {
      console.log(document.querySelector(".card--content"))
      if (document.querySelector(".card--content").contains(e.target)) {
        return;
      } else {
        props.updateStateParent(props.isModalNewCard);
        document.removeEventListener("click", modalClose);
      }
    });

    return setData(newState);
  }, []); //eslint-disable-line

  function checkCardData(e) {
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

    if (inputIdTarget === "inputTitle" || inputIdTarget === "inputDesc") {
      const newArr = e.target.value.split(" ");
      const includeBadWord = newArr.some(
        word => profanities.includes(word) || (ProfanitiesFr.includes(word) && true)
      );

      if (includeBadWord) {
        return updateState(inputIdTarget, "Insulte");
      }
    }

    if (!newState.error[inputIdTarget].accessToChange) {
      newState.error[inputIdTarget].accessToChange = true;
    }

    newState.error[inputIdTarget].error = false;
    newState.error[inputIdTarget].message = "";

    if (inputTitle.current.value !== "" && inputAddress.current.value !== "") {
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
    <ModalNewCardStyled
      btnDisabled={data.btnDisabled}
      isError={data.error.inputDesc ? data.error.inputDesc.error : false}
    >
      <div className="card--content">
        <div className="card--title">
          <div className="card--img">
            <img src={GeometryImg} alt="icon"></img>
          </div>
          <div className="card--name">
            <h2>New card</h2>
          </div>
          <img
            src={CloseArrow}
            alt="icon--close"
            className="close--arrow"
            onClick={props.closeModal}
          ></img>
        </div>
        <div className="card--moods">
          <h4>Choisissez votre mood:</h4>
          <div className="cards--moods--img">
            <img src={FoodMood} alt="food"></img>
            <img src={DrinkMood} alt="drink"></img>
            <img src={CultureMood} alt="culture"></img>
            <img src={SportMood} alt="sport"></img>
            <img src={OpenMindMood} alt="open--mind"></img>
          </div>
        </div>
        <div className="title--card">
          <InputsForm
            type="text"
            inputId="inputTitle"
            inputRef={inputTitle}
            inputPlaceholder="Titre de votre annonce"
            inputCheckError={checkCardData}
            isError={data.error.inputTitle ? data.error.inputTitle : false}
            marginSize
          ></InputsForm>
          <InputsForm
            type="text"
            inputId="inputAddress"
            inputRef={inputAddress}
            inputPlaceholder="L'adresse"
            inputCheckError={checkCardData}
            isError={data.error.inputAddress ? data.error.inputAddress : ""}
            marginSize
          ></InputsForm>
          <InputsForm
            type="time"
            id="default-picker"
            inputRef={inputTime}
            className="form-control"
            placeholder="L'heure"
            isError={data.error.inputTime ? data.error.inputTime : ""}
            marginSize
          ></InputsForm>
          <div className="card--desc">
            <textarea
              id="inputDesc"
              rows="6"
              cols="34"
              placeholder="Ajoutez une description"
              ref={inputDesc}
              onBlur={checkCardData}
              onChange={checkCardData}
            ></textarea>
            {data.error.inputDesc && (
              <div className="error--message">
                <small>{data.error.inputDesc.message}</small>
                <img src={WarningIcon} alt="warning--icon"></img>
              </div>
            )}
          </div>
          <div className="card--buttons">
            <input
              type="button"
              value="Poster"
              className="btn--send"
              disabled={data.btnDisabled}
            ></input>
            <input
              type="button"
              value="Annuler"
              className="btn--cancel"
              onClick={props.closeModal}
            ></input>
          </div>
        </div>
      </div>
    </ModalNewCardStyled>
  );
}

export default ModalNewCard;
