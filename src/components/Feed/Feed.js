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
    const newState = { ...data };

    if (!newState.showUserMenu) {
      newState.showUserMenu = true;
      newState.marginBottomHeader = "22%";
      return setData(newState);
    }

    newState.showUserMenu = false;
    newState.marginBottomHeader = "20px";
    return setData(newState);
  }

  console.log(data.showUserMenu);

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header" marginBottom={data.marginBottomHeader}>
        <div className=" user--menu" onClick={(e) => showMenu(e)}>
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
          />

          {
            data.showUserMenu && (
              <div className="dropdown--links">
                <Link to="/user_profile">Parameters</Link>
                <button data-toggle="modal" data-target=".bs-example-modal-sm">Logout</button>
              </div>
            )
          }
        </div>
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={userAvailable}></input>
          <span className="el-switch-style"></span>
        </label>
      </HeaderFeedStyled>
      <div className="modal bs-example-modal-sm" tabIndex="-1" role="dialog" aria-hidden="true" style={{ marginTop: "70%" }}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header"><h4>Logout <i className="fa fa-lock"></i></h4></div>
            <div className="modal-body"><i className="fa fa-question-circle"></i> Are you sure you want to log-off?</div>
            <div className="modal-footer"><a href="*" className="btn btn-primary btn-block">Logout</a></div>
          </div>
        </div>
      </div>
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
