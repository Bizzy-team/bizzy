import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../style/FooterStyled.style";
import HomeIcon from "../../img/icon_home_non_active.svg";
import FavorisIcon from "../../img/favoris_icon_non_active.svg";
import MessagerieIcon from "../../img/messagerie_non_active.svg";
import ProfileIcon from "../../img/profil_non_active.svg";

function Footer() {
  return (
    <FooterStyle as="footer">
      <div className="footer--elements">
        <div className="footer--elements--home">
          <img src={HomeIcon} alt="home--icon"></img>
          <span>Home</span>
        </div>
        <div className="footer--elements--favoris">
          <img src={FavorisIcon} alt="favoris--icon"></img>
          <span>Favoris</span>
        </div>
        <div className="footer--elements--messagerie">
          <img src={MessagerieIcon} alt="messagerie--icon"></img>
          <span>Messagerie</span>
        </div>
        <div className="footer--elements--profile">
          <img src={ProfileIcon} alt="profile--icon"></img>
          <span>Profil</span>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
