import React from "react";
import logo from "../../img/bizzy.png";
import HeaderStyled from "../../style/HeaderStyled.style";

function Header(props) {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" className="logo--app"></img>
      <div className="menu">
        {props.option}
        {props.showMenu && (
          <div className="menu--options">
            <ul>
              <li>Connexion</li>
              <li>Inscription</li>
            </ul>
          </div>
        )}
      </div>
    </HeaderStyled>
  );
}

export default Header;
