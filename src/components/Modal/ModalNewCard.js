import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import FoodMood from "../../img/food_mood.svg";
import DrinkMood from "../../img/drink_mood.svg";
import CultureMood from "../../img/culture_mood.svg";
import SportMood from "../../img/sport_mood.svg";
import OpenMindMood from "../../img/open_mind_mood.svg";
import InputsForm from "../InputsForm/InputsForm";
import ModalNewCardStyled from "../../style/ModalNewCardStyled.style";

function ModalNewCard() {
  const inputTitle = React.useRef(null);
  const inputAddress = React.useRef(null);
  const inputTime = React.useRef(null);
  const inputDesc = React.useRef(null);

  const [data, setData] = React.useState({
    error: {}
  })

  React.useEffect(() => {
    const arrInputId = [
      "inputTitle",
      "inputAddress",
      "inputTime",
      "inputDesc"
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
    <ModalNewCardStyled>
      <div className="card--content">
        <div className="card--title">
          <div className="card--img">
            <img src={GeometryImg} alt="icon"></img>
          </div>
          <div className="card--name">
            <h2>New card</h2>
          </div>
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
            // inputCheckError={checkUserData}
            isError={data.error.inputTitle ? data.error.inputTitle : ""}
          ></InputsForm>
          <InputsForm
            type="text"
            inputId="inputAddress"
            inputRef={inputAddress}
            inputPlaceholder="L'adresse"
            // inputCheckError={checkUserData}
            isError={data.error.inputAddress ? data.error.inputAddress : ""}
          ></InputsForm>
          <InputsForm
            type="text"
            inputId="inputTime"
            inputRef={inputTime}
            inputPlaceholder="L'heure"
            // inputCheckError={checkUserData}
            isError={data.error.inputTime ? data.error.inputTime : ""}
          ></InputsForm>
          <div className="card--desc">
            <textarea
              id="inputDesc"
              rows="6"
              cols="34"
              placeholder="Ajoutez une description"
              ref={inputDesc}
              // onBlur={checkUserData}
              // onChange={checkUserData}
            ></textarea>
          </div>
          <div className="card--buttons">
            <input type="button" value="Poster" className="btn--send"></input>
            <input type="button" value="Annuler" className="btn--cancel"></input>
          </div>
        </div>
      </div>
    </ModalNewCardStyled>
  );
}

export default ModalNewCard;
