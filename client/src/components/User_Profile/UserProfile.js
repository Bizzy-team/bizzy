import React from "react";
import UserProfileStyled from "../../style/UserProfileStyled.style";

function UserProfile() {
  return(
    <UserProfileStyled as="section">
      <div className="user">
        <div className="user--avatar">
          <img className="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" />
        </div>
        <div className="user--name">
          <h3>Claudia Boudié</h3>
        </div>
      </div>
    </UserProfileStyled>
  )
}

export default UserProfile