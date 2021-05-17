import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import LogoApp from "../../img/bizzy_logo.svg";
import UserAvatar from "../../img/user_avatar.svg";
import UserProfileHeaderStyled from "../../style/UserProfileHeaderStyled.style";

function UserProfileHeader(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
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
            <Link to="/home">Support</Link>
          </li>
          <li>
            <Link to="/home">Messagerie</Link>
          </li>
          <li>
            <Link to="/home">Favoris</Link>
          </li>
          {
            props.userData !== null &&
            <li>
              <Link to={`${props.userData.name}`}>
                <img src={UserAvatar} alt="avatar"></img>
                {`${capitalizeFirstLetter(props.userData.name)}`}
              </Link>
            </li>
          }
        </ul>
      </nav>
    </UserProfileHeaderStyled>
  );
}

function mapStateToProps (state) {
  return {
    userData: state.users.userConnected
  }
}

export default connect(
  mapStateToProps,
)(UserProfileHeader);