import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import ModalMessageStyled from "../../style/ModalMessageStyled.style";

function ModalMessage(props) {
  return (
    <ModalMessageStyled>
      <div className="modal--content">
        <div className="modal--title">
          <div className="modal--icon">
            <img src={GeometryImg} alt="modal--title"></img>
          </div>
          <h2>Changer le mot de passe</h2>
          <img
            src={CloseArrow}
            alt="icon--close"
            className="close--arrow"
            onClick={props.closeModal}
          ></img>
        </div>
        <div className="modal--message">
          <p>
            Votre mot de passe a été changé ! Un mail vous a été envoyé à
            adresse@gmail.com contenant votre nouveau mot de passe.
          </p>
        </div>
        <div className="modal--btn">
          <input
            type="button"
            value="Ok"
            className="btn--ok"
            onClick={props.closeModal}
          ></input>
        </div>
      </div>
    </ModalMessageStyled>
  );
}

export default ModalMessage;
