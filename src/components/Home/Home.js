import React from "react";
import mapboxgl from "mapbox-gl";
import HomeStyled from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";
import UserProfileHeader from "../UserProfile/UserProfileHeader";

import FiltersImg from "../../img/filters.svg";
import FilterStyled from "../../style/FilterStyled.style";

function Home() {
  const [data, setData] = React.useState({
    isCards: true
  });

  const sectionStyle = {
    style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "10px"
    },
    styleBtn: {
      backgroundColor: "#283D80",
      color: "white",
      padding: "12px",
      border: "none",
      borderRadius: "10px",
      position: "fixed",
      bottom: "85px",
      left: "50%",
      transform: "translate(-50%, 0)"
    }
  };

  React.useEffect(() => {
    document.querySelector("body").style.background = "#F7F6F7";

    if (window.screen.width < 1000) {
      document.querySelector(".user--profile--header").style.display = "none";
    }

    if (window.screen.width > 1000) {
      document.querySelector(".section--map").style.display = "block";
      document.querySelector(".section--cards").style.width = "48%";

      mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAP_KEY;

      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 3 // starting zoom
      });
    }
  });

  function displayMap() {
    const newState = { ...data };

    if (data.isCards) {
      newState.isCards = false;
      document.querySelector(".section--map").style.display = "block";

      mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAP_KEY;

      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 3 // starting zoom
      });

      return setData(newState);
    }

    document.querySelector(".section--map").style.display = "none";
    newState.isCards = true;

    return setData(newState);
  }

  return (
    <>
      <UserProfileHeader></UserProfileHeader>
      <HomeStyled className="section--map">
        <div id="map"></div>
      </HomeStyled>
      {data.isCards ? (
        <>
          <FilterStyled>
            <div>
              <input type="text" placeholder="Paris 10"></input>
              <button className="btn--filters">
                <div>
                  <img src={FiltersImg} alt="filters-icon"></img>{" "}
                </div>
              </button>
              <button className="btn--create">New card</button>
            </div>
          </FilterStyled>
          <section style={sectionStyle.style} className="section--cards">
            <HomeCards></HomeCards>
            <HomeCards></HomeCards>
            <HomeCards></HomeCards>
            <button style={sectionStyle.styleBtn} onClick={displayMap}>
              Voir sur la map
            </button>
          </section>
        </>
      ) : (
        <button style={sectionStyle.styleBtn} onClick={displayMap}>
          Retour sur la liste
        </button>
      )}
    </>
  );
}

export default Home;
