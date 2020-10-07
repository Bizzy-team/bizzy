import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../style/FooterStyled.style";
import HomeIcon from "../../img/icon_home_non_active.svg";
import HomeIconActive from "../../img/icon_home.svg";
import FavorisIcon from "../../img/favoris_icon_non_active.svg";
import FavorisIconActive from "../../img/favoris_icon.svg";
import MessagerieIcon from "../../img/messagerie_non_active.svg";
import MessagerieIconActive from "../../img/messagerie_icon.svg";
import ProfileIcon from "../../img/profil_non_active.svg";
import ProfileIconActive from "../../img/profil_active.svg";

function Footer(props) {
  return (
    <FooterStyle as="footer">
      <div className="footer--elements">
        <div className="footer--elements--home">
          {props.isUrlActive.url === "/home" ? (
            <img src={HomeIconActive} alt="home--icon"></img>
          ) : (
            <img src={HomeIcon} alt="home--icon"></img>
          )}
          <span>Home</span>
        </div>
        <div className="footer--elements--favoris">
          {props.isUrlActive.url === "/favoris" ? (
            <img src={FavorisIconActive} alt="home--icon"></img>
          ) : (
            <img src={FavorisIcon} alt="favoris--icon"></img>
          )}
          <span>Favoris</span>
        </div>
        <div className="footer--elements--messagerie">
          {props.isUrlActive.url === "/messagerie" ? (
            <img src={MessagerieIconActive} alt="home--icon"></img>
          ) : (
            <img src={MessagerieIcon} alt="messagerie--icon"></img>
          )}
          <span>Messagerie</span>
        </div>
        <div className="footer--elements--profile">
          {props.isUrlActive.path === "/:name" ? (
            <img src={ProfileIconActive} alt="home--icon"></img>
          ) : (
            <img src={ProfileIcon} alt="profile--icon"></img>
          )}
          <span>Profil</span>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
