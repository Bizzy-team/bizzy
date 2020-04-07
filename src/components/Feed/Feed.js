import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle } from "../../style/FeedStyled.style";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";
import Footer from "../Footer/Footer";

function Feed() {
  const [data, setData] = useState({
    iconsMood: false,
    moodLink: ["utensils", "running", "film", "beer"],
    showUserMenu: false,
    marginBottomHeader: "20px"
  });
  const [position, setPosition] = React.useState({
    userLat: "",
    userLong: "",
    filtersKm: ["2", "4", "6", "+8"],
    filterByUser: "2"
  });

  function userLocation(pos) {
    return setPosition({
      ...position,
      userLat: pos.coords.latitude,
      userLong: pos.coords.longitude
    });
  }

  function filterChoose(e) {
    return setPosition({
      ...position,
      filterByUser: e.target.value
    });
  }

  function userAvailable() {
    const newState = { ...data };

    if (newState.iconsMood) {
      newState.iconsMood = false;
      return setData(newState);
    }

    navigator.geolocation.getCurrentPosition(userLocation);
    newState.iconsMood = true;
    return setData(newState);
  }

  function showMenu(e) {
    const newState = {...data};

    
    if (!newState.showUserMenu) {
      console.log(e.target.parentNode);
      
      // document.querySelector("header").style = "opacity: 0.4";
      // document.querySelector("section").style = "opacity: 0.4";
      // document.querySelector("footer").style = "opacity: 0.4";
      document.querySelector("body").style = "opacity: 0.4";
      // document.querySelector(`.${e.target.parentNode.className}`).style = "filter: blur(0)";
      // document.querySelector("body").style = "background-color: rgba(0, 0, 0, .4); z-index: 10";
      newState.showUserMenu = true;
      newState.marginBottomHeader = "22%";
      return setData(newState);
    }
    
    newState.showUserMenu = false;
    newState.marginBottomHeader = "20px";
    document.querySelector(".dropdown--links").style = "opacity: 1.4";
    document.querySelector("body").style = "opacity: 1";
    return setData(newState);
  }

  console.log(data.showUserMenu);
  

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header" marginBottom={data.marginBottomHeader}>
        {/* <Link to="/user_profile"> */}
        
        {/* <div className="user--menu" onClick={() => props.height="20%" setData({...data, showUserMenu: !data.showUserMenu})}> */}
        <div className="user--menu" onClick={(e) => showMenu(e)}>
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
            />

            {
              data.showUserMenu && (
                <>
                  {/* <i className="fas fa-sort-up"></i> */}
                  <div className="dropdown--links">
                    <Link to="/user_profile">Parameters</Link>
                    <p>Logout</p>
                  </div>
                </>
              )
            }
        </div>
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={userAvailable}></input>
          <span className="el-switch-style"></span>
        </label>
        {/* </Link> */}
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
          <div className="filter--km">
            <h2>In which perimeter ?</h2>
            <select name="km" onChange={e => filterChoose(e)}>
              {position.filtersKm.map((filter, index) => {
                return (
                  <option value={filter} key={index}>
                    {filter}
                  </option>
                );
              })}
            </select>
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
