import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle, FooterStyle } from "../../style/FeedStyled.style";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";

function Feed() {
  const [data, setData] = useState({
    iconsMood: false,
    moodLink: ["utensils", "running", "film", "beer"]
  });

  function displayIcons() {
    const newState = { ...data };

    if (newState.iconsMood === false) {
      newState.iconsMood = true;
      return setData(newState);
    }
    if (newState.iconsMood === true) {
      newState.iconsMood = false;
      return setData(newState);
    }
    return null;
  }

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header">
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={displayIcons}></input>
          <span className="el-switch-style"></span>
        </label>
        <Link to="/user_profile">
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
          />
        </Link>
      </HeaderFeedStyled>
      {data.iconsMood && (
        <IconsMoodStyled as="section">
          <h2>It's time to: </h2>
          <div className="icons--mood">
            {data.moodLink.map((icon, index) => (
              <p>
                <Link to={`createYourCard/${icon}`} key={index}>
                  <i className={`fas fa-${icon}`}></i>
                </Link>
              </p>
            ))}
          </div>
        </IconsMoodStyled>
      )}
      <FeedStyle>
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedStyle>
      <FooterStyle as="footer">
        <div className="footer--elements">
          <i className="fas fa-home"></i>
          <i className="fas fa-bell"></i>
          <i className="far fa-comments"></i>
        </div>
      </FooterStyle>
    </React.Fragment>
  );
}

export default Feed;
