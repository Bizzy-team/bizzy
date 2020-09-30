import React from "react";
import FoodIcon from "../../img/food_mood.svg";
import UserAvatar from "../../img/user_avatar.svg";
import Like from "../../img/heart.svg";
import ParticipantIcon from "../../img/participant_icon.svg";
import HomeCardsStyled from "../../style/HomeCardsStyled.style";

function HomeCards() {
  return (
    <HomeCardsStyled>
      <div className="card--header">
        <div className="card--img">
          <img src={FoodIcon} alt="food-icon"></img>
        </div>
        <div className="card--title">
          <div className="card--title--name">
            <h2>Pizza pour l'après-midi</h2>
            <div className="card--title--like">
              <img src={Like} alt="like-icon"></img>
            </div>
          </div>
          <div className="card--author--about">
            <img src={UserAvatar} alt="avatar-icon"></img>
            <p>Par Sébastien, Content Manager</p>
          </div>
        </div>
      </div>
      <div className="card--tags">
        <div className="card--tags--participants">
          <div className="card--tags--participants--icon">
            <img src={ParticipantIcon} alt="participant-icon"></img>
          </div>
          <p>3</p>
        </div>
      </div>
      <div className="card--content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat
          massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut
          placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit
          mauris nunc in mi. Sit pulvinar proin egestas dolor a at.
        </p>
      </div>
    </HomeCardsStyled>
  );
}

export default HomeCards;
