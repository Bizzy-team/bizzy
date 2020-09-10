import React from "react";
import FoodMood from "../../img/food_mood.svg";
import UserAvatar from "../../img/user_avatar.svg";
import EditCard from "../../img/edit_card.svg";
import CardsProfileStyled from "../../style/CardsProfileStyled.style";

function CardsProfile() {
  return (
    <CardsProfileStyled className="card--content">
      <div className="card--title">
        <div className="card--mood--img">
          <img src={FoodMood} alt="food"></img>
        </div>
        <h2>Pizza's pour l'après-midi</h2>
        <div className="about--user">
          <div className="about--user--avatar">
            <img src={UserAvatar} alt="avatar"></img>
          </div>
          <h3>Par Katrine, Product Manager</h3>
        </div>
        <div className="edit--icon">
          <img src={EditCard} alt="icon"></img>
        </div>
      </div>
      <div className="badges--card">
        <span>3 participants</span>
      </div>
      <div className="card--desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat
          massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut
          placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit
          mauris nunc in mi. Sit pulvinar proin egestas dolor a at.
        </p>
      </div>
    </CardsProfileStyled>
  );
}

export default CardsProfile;
