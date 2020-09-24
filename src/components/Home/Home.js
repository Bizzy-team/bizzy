import React from "react";
import mapboxgl from "mapbox-gl";
import HomeHeader from "./HomeHeader";
import HomeStyled from "../../style/HomeStyled.style";
import CardsProfile from "../Cards/CardsProfile";

function Home() {
  const [data, setData] = React.useState({
    isCards: true,
    isMap: false
  })

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
      {
        data.isMap &&
        <HomeStyled>
          <div id="map"></div>
        </HomeStyled>
      }
    </>
  );
}

export default Home;
