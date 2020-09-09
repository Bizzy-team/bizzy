import React from "react";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import ModalDeleteProfileStyled from "../../style/ModalDeleteProfileStyled.style";

function ModalDeleteProfile(props) {
  return(
    <ModalDeleteProfileStyled>
      <div className="modal--content">
        <div className="modal--title">
          <div className="modal--icon">
            <img src={GeometryImg} alt="modal--title"></img>
          </div>
          <h2>Supprimer mon profil</h2>
          <img
            src={CloseArrow}
            alt="icon--close"
            className="close--arrow"
            onClick={props.closeModal}
          ></img>
        </div>
        <div className="modal--message">
          <p>Attention ! Vous allez supprimer votre profil et ses données. Êtes-vous sûr de vouloir le supprimer ?</p>
        </div>
        <div className="modal--btn">
          <input
            type="button"
            value="Supprimer"
            className="btn--delete"
          ></input>
          <input
            type="button"
            value="Annuler"
            className="btn--cancel"
            onClick={props.closeModal}
          ></input>
        </div>
      </div>
    </ModalDeleteProfileStyled>
  )
}

export default ModalDeleteProfile;