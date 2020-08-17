import React from "react";
import logo from "../../img/bizzy.png";
import HeaderStyled from "../../style/HeaderStyled.style";
import menuBurger from "../../img/menu_burger.svg";

function Header() {
  const [data, setData] = React.useState({
    showMenu: false
  });

  function displayMenu() {
    const newState = { ...data };

    newState.showMenu = !newState.showMenu;
    setData(newState);
  }

  return (
    <HeaderStyled>
      <div className="mobile--logo">
        <img src={logo} alt="logo" className="logo--app"></img>
      </div>
      <div className="mobile--menu">
        <img src={menuBurger} className="menu--burger" onClick={() => displayMenu()} />
        {data.showMenu && (
          <div className="menu--options">
            <p>Connexion</p>
            <p>Inscription</p>
            <p>Support</p>
          </div>
        )}
      </div>
      <div className="desktop--menu">
        <p className="menu--options--desktop--support">Support</p>
        <p className="menu--options--desktop--connexion">Connexion</p>
        <p className="menu--options--desktop--inscription">Inscription</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
