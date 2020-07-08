import React from "react";
import Header from "../Header/Header";
import StartPageStyled from "../../style/StartPageStyle.styled";
import logoBizzy from "../../img/bizzy.png";
import menuBurger from "../../img/menu_burger.png";
import imgTitle from "../../img/img_title.png";
import imgAfterwork from "../../img/img_afterwork.png";
import imgPosition from "../../img/img_position.png";
import imgMsg from "../../img/img_msg.png";
import Scroll from "../../img/scroll.svg";

function StartPage() {
  const [data, setData] = React.useState({
    showMenu: false
  })

  function displayMenu() {
    const newState = {...data};

    newState.showMenu = !newState.showMenu;
    setData(newState);
  }

  return (
    <>
    {
      (navigator.userAgent.includes("Mobile")) ?
        <Header option={<img src={menuBurger} className="menu--burger" onClick={() => displayMenu()} ></img>} showMenu={data.showMenu}></Header> :
        <Header
          option={
            <>
              <div className="menu--options--desktop">
                <p className="menu--options--desktop--support">Support</p>
                <p className="menu--options--desktop--connexion">Connexion</p>
                <p className="menu--options--desktop--inscription">Inscription</p>
              </div>
            </>
        }>
        </Header>
    }
      <StartPageStyled as="section" className="startPage--about">
        <section className="startPage--about--title">
          <div className="startPage--about--title--img">
            <img src={imgTitle} alt="img--title"></img>
          </div>
          <div className="startPage--about--title--about">
            <h1>Welcome on <span className="bizzy--name">Bizzy !</span></h1>
            <p>Bizzy ? Mais quelle est donc cette application ?</p>
            <div className="startPage--about--title--scroll">
              <img src={Scroll} alt="img--scroll"></img>
            </div>
          </div>
        </section>
        <section className="startPage--about--afterwork">
          <div className="startPage--about--afterwork--img">
            <img src={imgAfterwork} alt="img--afterwork"></img>
          </div>
          <div className="startPage--about--afterwork--about">
            <h1>Réseau <span>Afterwork !</span></h1>
            <p>
              C’est très facile: c’est une application permettant d’égager vos soirées d’afterwork, de les
              rendre décontractées mais aussi d’agrandir votre réseau social/professionnel en se
              basant sur votre mood : aller manger, faire du sport, boire un verre, aller au cinéma etc… !
            </p>
            <div className="startPage--about--afterwork--scroll">
              <img src={Scroll} alt="img--scroll"></img>
            </div>
          </div>
        </section>
        <section className="startPage--about--position">
          <div className="startPage--about--position--img">
            <img src={imgPosition} alt="img--position"></img>
          </div>
          <div className="startPage--about--position--about">
            <h1>Autour de <span>vous !</span></h1>
            <p>
              Trouvez des afterworks autour de vous en utilisant Bizzy!
              Choissisez une proposition dans votre
              feed de cartes, en fonction du
              mood.
              Pour faciliter le repérage des lieux,
              une carte sera aussi à votre disposition.
            </p>
            <div className="startPage--about--position--scroll">
              <img src={Scroll} alt="img--scroll"></img>
            </div>
          </div>
        </section>
        <section className="startPage--about--msg">
          <div className="startPage--about--msg--img">
            <img src={imgMsg} alt="img--msg"></img>
          </div>
          <div className="startPage--about--msg--about">
            <h1>Rejoignez <img src={logoBizzy} alt="logo--about--msg" className="startPage--about--msg--logo"></img><span> !</span></h1>
            <p>
              Et pour faciliter tout cela, il y a un tchat mis à disposition pour convenir de tous les détails !
              Il est débloqué une fois que la personne qui a crée la carte a accepté votre demande.
              Alors qu’attendez-vous pour commencer vos soirées sur Bizzy ? <span role="img" aria-label="wink">😉</span>
            </p>
            <div className="startPage--about--msg--about--btn">
            <button className="btn--connexion">Connexion</button>
            <button className="btn--inscription">Inscription</button>
            </div>
          </div>
        </section>
      </StartPageStyled>
    </>
  )
}

export default StartPage;