import React from "react";
import mapboxgl from "mapbox-gl";
import HomeHeader from "./HomeHeader";
import HomeStyled from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";

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
  });

  function displayMap() {
    const newState = {...data};

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
      <HomeHeader />
        <HomeStyled className="section--map">
          <div id="map"></div>
        </HomeStyled>
      {
        data.isCards ?
        <section style={sectionStyle.style}>
          <HomeCards></HomeCards>
          <HomeCards></HomeCards>
          <HomeCards></HomeCards>
          <button style={sectionStyle.styleBtn} onClick={displayMap}>Voir sur la map</button> 
        </section> :
        <button style={sectionStyle.styleBtn} onClick={displayMap}>Retour sur la liste</button>
      }
    </>
  );
}

export default Home;
