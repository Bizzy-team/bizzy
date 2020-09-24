import React from "react";
import { Redirect } from "react-router-dom";
import GeometryImg from "../../img/geometry_desktop.svg";
import CloseArrow from "../../img/croix.svg";
import ModalDeleteProfileStyled from "../../style/ModalDeleteProfileStyled.style";

function ModalDeleteProfile(props) {
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("click", function modalClose(e) {
      if (e.target.className === "close--arrow" || e.target.className === "btn--cancel") {
        props.updateStateParent(props.isModalDeleteProfile);
        document.removeEventListener("click", modalClose);
        return;
      }

      if (document.querySelector(".modal--content") !== null) {
        if (document.querySelector(".modal--content").contains(e.target)) {
          return;
        } else {
          props.updateStateParent(props.isModalDeleteProfile);
          document.removeEventListener("click", modalClose);
        }
      }
    });
  }, []); //eslint-disable-line

  function deleteProfile() {
    let newState = { ...redirect };

    document.querySelector("body").style.overflow = "hidden";
    newState = true;

    return setRedirect(newState);
  }

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: "/",
          search: "?isModalDelete=true",
          state: { isModalDelete: redirect }
        }}
      ></Redirect>
    );

  return (
    <ModalDeleteProfileStyled>
      <div className="modal--content">
        <div className="modal--title">
          <div className="modal--icon">
            <img src={GeometryImg} alt="modal--title"></img>
          </div>
          <h2>Supprimer mon profil</h2>
          <img src={CloseArrow} alt="icon--close" className="close--arrow"></img>
        </div>
        <div className="modal--message">
          <p>
            Attention ! Vous allez supprimer votre profil et ses données. Êtes-vous sûr de
            vouloir le supprimer ?
          </p>
        </div>
        <div className="modal--btn">
          <input
            type="button"
            value="Supprimer"
            className="btn--delete"
            onClick={deleteProfile}
          ></input>
          <input type="button" value="Annuler" className="btn--cancel"></input>
        </div>
      </div>
    </ModalDeleteProfileStyled>
  );
}

export default ModalDeleteProfile;
