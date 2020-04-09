import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle } from "../../style/FeedStyled.style";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";
import Footer from "../Footer/Footer";
import LogoutModal from "./LogoutModal";

function Feed() {
  const [data, setData] = useState({
    iconsMood: false,
    moodLink: ["utensils", "running", "film", "beer"],
    showUserMenu: false,
    marginBottomHeader: "20px",
    isModalOpen: false
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

  function showMenu() {
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

  function clearSession() {
    const newState = { ...data };

    if (!newState.isModalOpen) {
      newState.isModalOpen = true;
      return setData(newState);
    }

    newState.isModalOpen = false;
    sessionStorage.clear();
    return setData(newState);
  }

  function closeModal(e) {
    if (e.target === document.querySelector(".modal--logout")) {
      return setData({
        ...data,
        isModalOpen: false
      });
    }
  }

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header" marginBottom={data.marginBottomHeader}>
        <div className=" user--menu">
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
            onClick={() => showMenu()}
          />
          {data.showUserMenu && (
            <div className="dropdown--links">
              <Link to="/user_profile">Parameters</Link>
              <button className="btn--logout" onClick={e => clearSession(e)}>
                Logout
              </button>
            </div>
          )}
        </div>
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={userAvailable}></input>
          <span className="el-switch-style"></span>
        </label>
      </HeaderFeedStyled>
      {data.isModalOpen && (
        <LogoutModal
          clearSession={clearSession}
          closeModal={e => closeModal(e)}
        ></LogoutModal>
      )}
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
