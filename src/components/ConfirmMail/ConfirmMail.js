import React from "react";
import Header from "../Header/Header";
import GeometryImg from "../../img/geometry_desktop.svg";
import ConfirmMailStyled from "../../style/ConfirmMailStyled.style";
import bcImg from "../../img/bc_desktop.svg";

function ConfirmMail() {
  React.useEffect(() => {
    if (!navigator.userAgent.includes("Mobile")) {
      document.querySelector("body").style = `background-image: url(${bcImg})`;
    }
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <ConfirmMailStyled as="section">
        <div className="title--mail">
          <div className="title--mail--img">
            <img src={GeometryImg} alt="icon--title--mail"></img>
          </div>
          <h3>Confirmez votre mail</h3>
        </div>
        <main>
          <div className="mail--content">
            <p>
              On vous envoyé un message à adresse@gmail.com. <br />
              Merci de confirmer cette adresse pour finaliser votre inscription.
            </p>
            <div className="mail--content--buttons">
              <button>Renvoyer le mail</button>
              <button>Changer l'adresse</button>
            </div>
          </div>
          <div className="link--connection">
            <p>
              Aller sur la page de <br />
              <a href="/">Connexion</a>
            </p>
          </div>
        </main>
      </ConfirmMailStyled>
    </React.Fragment>
  );
}

export default ConfirmMail;
