import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle } from "../../style/FeedStyled.style";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";
import Footer from "../Footer/Footer";

function Feed(props) {
  const [data, setData] = useState({
    iconsMood: false,
    moodLink: ["utensils", "running", "film", "beer"],
  });
  const [position, setPosition] = React.useState({
    userLat: "",
    userLong: ""
  });



  // console.log(props.coords.latitude);
  

  // function userPosition(pos) {
  //   console.log(pos.coords.latitude);
  //   console.log(pos.coords.longitude);
  // }

  
  function userLocation(pos) {
    return {
      userLat: pos.coords.latitude,
      userLong: pos.coords.longitude
    };
  }

  // function error(err) {
  //   console.warn(`ERREUR (${err.code}): ${err.message}`);
  // }



  function displayIcons(pos) {
    const newState = { ...data };

    if (newState.iconsMood) {
      newState.iconsMood = false;
      return setData(newState);
    }


    const newPosition = {...navigator.geolocation.getCurrentPosition(userLocation)};
    newState.iconsMood = true;
    setPosition(newPosition);
    return setData(newState);
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
              <p key={index}>
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
      <Footer />
    </React.Fragment>
  );
}

export default Feed;
