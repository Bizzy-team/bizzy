import React from "react";
import mapboxgl from "mapbox-gl";
import HomeHeader from "./HomeHeader";
import HomeStyled from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";

function Home() {
  const [data, setData] = React.useState({
    isCards: true,
    isMap: false
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
      bottom: "85px"
    }
  };

  React.useEffect(() => {
    document.querySelector("body").style.background = "#F7F6F7";
  });

  function displayMap() {
    mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAP_KEY;

    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 3 // starting zoom
    });
  }

  return (
    <>
      <HomeHeader />
      {data.isMap && (
        <HomeStyled>
          <div id="map"></div>
        </HomeStyled>
      )}
      <section style={sectionStyle.style}>
        <HomeCards></HomeCards>
        <HomeCards></HomeCards>
        <HomeCards></HomeCards>
        <button style={sectionStyle.styleBtn}>Voir sur la map</button>
      </section>
    </>
  );
}

export default Home;
