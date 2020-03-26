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
    const newState = {...position}
    const crd = pos.coords;

    console.log('Votre position actuelle est :');
    newState.userLat = crd.latitude;
    console.log(`Latitude : ${newState.userLat}`);
    newState.userLong = crd.longitude;
    console.log(`Longitude : ${newState.userLong}`);
    // console.log(`La précision est de ${crd.accuracy} mètres.`);

    setData(newState);
  }

  // function error(err) {
  //   console.warn(`ERREUR (${err.code}): ${err.message}`);
  // }



  function displayIcons(pos) {
    const newState = { ...data };
    // const crd = pos.coords;


    if (newState.iconsMood === false) {
      // newState.userLat = crd.latitude;
      // newState.userLong = crd.longitude;
      navigator.geolocation.getCurrentPosition(userLocation);
      // navigator.geolocation.getCurrentPosition(userPosition);
      newState.iconsMood = true;
      // userLocation(pos);
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
