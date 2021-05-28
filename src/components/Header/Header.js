import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../img/bizzy.png";
import LogoApp from "../../img/bizzy_logo.svg";
import UserAvatar from "../../img/user_avatar.svg";
import UserProfileHeaderStyled from "../../style/UserProfileHeaderStyled.style";
import HeaderStyled from "../../style/HeaderStyled.style";
import menuBurger from "../../img/menu_burger.svg";

function Header(props) {
  const [data, setData] = React.useState({
    showMenu: false
  });

  function displayMenu() {
    const newState = { ...data };

    newState.showMenu = !newState.showMenu;
    setData(newState);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {props.userData ? (
        <>
          <UserProfileHeaderStyled className="user--profile--header" as="header">
            <div className="app--logo">
              <img src={LogoApp} alt="bizzy-logo"></img>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Accueil</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
                <li>
                  <Link to="/home">Messagerie</Link>
                </li>
                <li>
                  <Link to="/home">Favoris</Link>
                </li>
                <li>
                  <Link to={`user/${props.userData._id}`}>
                    <img src={UserAvatar} alt="avatar"></img>
                    {`${capitalizeFirstLetter(props.userData.name)}`}
                  </Link>
                </li>
              </ul>
            </nav>
          </UserProfileHeaderStyled>
        </>
      ) : (
        <>
          <HeaderStyled>
            <div className="mobile--logo">
              <img src={logo} alt="logo" className="logo--app"></img>
            </div>
            <div className="mobile--menu">
              <img
                src={menuBurger}
                alt="burger--icon"
                className="menu--burger"
                onClick={() => displayMenu()}
              />
              {data.showMenu && (
                <div className="menu--options">
                  <p>
                    <Link to={"/connexion"}>Connexion</Link>
                  </p>
                  <p>
                    <Link to={"/inscription"}>Inscription</Link>
                  </p>
                  <p>
                    <Link to={"/support"}>Support</Link>
                  </p>
                </div>
              )}
            </div>
            <div className="desktop--menu">
              <p className="menu--options--desktop--support">
                <Link to={"/support"}>Support</Link>
              </p>
              <p className="menu--options--desktop--connexion">
                <Link to={"/connexion"}>Connexion</Link>
              </p>
              <p className="menu--options--desktop--inscription">
                <Link to={"/inscription"}>Inscription</Link>
              </p>
            </div>
          </HeaderStyled>
        </>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    userData: state.users.userConnected
  };
}

export default connect(mapStateToProps)(Header);
