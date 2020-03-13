import React from "react";
import UserProfileStyled from "../../style/UserProfileStyled.style";
import { FooterStyle } from "../../style/FeedStyled.style";
import { Link } from "react-router-dom";

function UserProfile() {
  function addInput(e) {
    if (e.keyCode === 13) {
      document.activeElement.blur();
    }
  }

  return (
    <>
      <UserProfileStyled as="section">
        <div className="user">
          <div className="user--avatar">
            <img
              className="avatar"
              alt="avatar"
              src="https://kitt.lewagon.com/placeholder/users/cveneziani"
            />
          </div>
          <div className="user--name">
            <h2>Username:</h2>
            <h3>Claudia Boudié</h3>
          </div>
          <div className="user--mail">
            <h2>Mail:</h2>
            <h3 contentEditable="true" onKeyDown={e => addInput(e)}>
              cc@hello.com
            </h3>
          </div>
          <div className="user--job">
            <h2>Job:</h2>
            <h3 contentEditable="true" onKeyDown={e => addInput(e)}>
              Kebabier
            </h3>
          </div>
        </div>
      </UserProfileStyled>
      <FooterStyle as="footer">
        <div className="footer--elements">
          <Link to="/feed" style={{ marginLeft: "8%" }}>
            <i className="fas fa-home"></i>
          </Link>
          <i className="fas fa-bell"></i>
          <i className="far fa-comments"></i>
        </div>
      </FooterStyle>
    </>
  );
}

export default UserProfile;
