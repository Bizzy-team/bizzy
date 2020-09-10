import React from "react";
import Header from "../Header/Header";
import StartPageStyled from "../../style/StartPageStyle.styled";
import logoBizzy from "../../img/bizzy.png";
import imgTitle from "../../img/img_title.png";
import imgAfterwork from "../../img/img_afterwork.png";
import imgPosition from "../../img/img_position.png";
import imgMsg from "../../img/img_msg.png";
import ModalMessage from "../Modal/ModalMessage";

function StartPage(props) {
  const [data, setData] = React.useState({
    isModalDelete: props.location.state.isModalDelete
  })

  React.useEffect(() => {
    window.addEventListener("scroll", headerStyle);
  }, []);

  function headerStyle() {
    if (window.scrollY === 0) {
      document.querySelector("header").removeAttribute("style");
      return;
    }

    if (document.querySelector("header").hasAttribute("style")) {
      return;
    }

    document.querySelector("header").style =
      "box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18); transition: box-shadow .3s cubic-bezier(.35,0,.65,1) 0s";
  }

  function closeModal(e) {
    const newState = {...data};

    if (e.target.className === "btn--ok") {
      newState.isModalDelete = false;
      document.querySelector("body").style.overflow = "auto";
    }

    return setData(newState);
  }

  return (
    <>
      <Header />
      {
        data.isModalDelete &&
        <ModalMessage
          closeModal={closeModal}
          modalTitle="Votre profil est supprimé :("
          modalMessage="C'est dommage ! Votre profil a été supprimé, nous espérons vous revoir ! N'hésitez pas à envoyer votre retour pour améliorer nos services."
          modalBtnValue="Ok"
        ></ModalMessage>
      }
      <StartPageStyled as="main" className="startPage--about">
        <section>
          <div className="section--content">
            <h1>
              Welcome on <span>Bizzy !</span>
            </h1>
            <p>Bizzy ? Mais quelle est donc cette application ?</p>
          </div>
          <div className="section--img">
            <img src={imgTitle} alt="img--title"></img>
          </div>
        </section>
        <section>
          <div className="section--content">
            <h1>
              Réseau <span>Afterwork !</span>
            </h1>
            <p>
              C’est très facile: c’est une application permettant d’égager vos soirées
              d’afterwork, de les rendre décontractées mais aussi d’agrandir votre réseau
              social/professionnel en se basant sur votre mood : aller manger, faire du
              sport, boire un verre, aller au cinéma etc… !
            </p>
          </div>
          <div className="section--img">
            <img src={imgAfterwork} alt="img--afterwork"></img>
          </div>
        </section>
        <section>
          <div className="section--content">
            <h1>
              Autour de <span>vous !</span>
            </h1>
            <p>
              Trouvez des afterworks autour de vous en utilisant Bizzy! Choissisez une
              proposition dans votre feed de cartes, en fonction du mood. Pour faciliter
              le repérage des lieux, une carte sera aussi à votre disposition.
            </p>
          </div>
          <div className="section--img">
            <img src={imgPosition} alt="img--position"></img>
          </div>
        </section>
        <section>
          <div className="section--content">
            <h1>
              Rejoignez{" "}
              <img
                src={logoBizzy}
                alt="logo--about--msg"
                className="startPage--about--msg--logo"
              ></img>
              <span> !</span>
            </h1>
            <p>
              Et pour faciliter tout cela, il y a un tchat mis à disposition pour convenir
              de tous les détails ! Il est débloqué une fois que la personne qui a crée la
              carte a accepté votre demande. Alors qu’attendez-vous pour commencer vos
              soirées sur Bizzy ?{" "}
              <span role="img" aria-label="wink">
                😉
              </span>
            </p>
            <div className="section--btn">
              <button className="btn--connexion">Connexion</button>
              <button className="btn--inscription">Inscription</button>
            </div>
          </div>
          <div className="section--img">
            <img src={imgMsg} alt="img--msg"></img>
          </div>
        </section>
      </StartPageStyled>
    </>
  );
}

export default StartPage;
