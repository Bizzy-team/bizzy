import React from "react";
import LogoApp from "../../img/bizzy_logo.svg";
import UserAvatar from "../../img/user_avatar.svg";
import UserProfileHeaderStyled from "../../style/UserProfileHeaderStyled.style";

function UserProfileHeader() {
  return(
    <UserProfileHeaderStyled className="user--profile--header">
      <div>
        <div className="app--logo">
          <img src={LogoApp} alt="bizzy-logo"></img>
        </div>
        <div className="menu--options">
          <nav>
            <a href="/home">Accueil</a>
            <a href="/home">Support</a>
            <a href="/home">Messagerie</a>
            <a href="/home">Favoris</a>
            <a href="/home">
              <img src={UserAvatar} alt="avatar"></img>
              Katrine
            </a>
          </nav>
        </div>
      </div>
    </UserProfileHeaderStyled>
  )
};

export default UserProfileHeader;