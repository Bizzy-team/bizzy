import React from "react";
import LogoApp from "../../img/bizzy_logo.svg";
import UserAvatar from "../../img/user_avatar.svg";
import UserProfileHeaderStyled from "../../style/UserProfileHeaderStyled.style";

function UserProfileHeader() {
  return (
    <UserProfileHeaderStyled className="user--profile--header" as="header">
      <div className="app--logo">
        <img src={LogoApp} alt="bizzy-logo"></img>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home">Accueil</a>
          </li>
          <li>
            <a href="/home">Support</a>
          </li>
          <li>
            <a href="/home">Messagerie</a>
          </li>
          <li>
            <a href="/home">Favoris</a>
          </li>
          <li>
            <a href="/home">
              <img src={UserAvatar} alt="avatar"></img>
              Katrine
            </a>
          </li>
        </ul>
      </nav>
    </UserProfileHeaderStyled>
  );
}

export default UserProfileHeader;
