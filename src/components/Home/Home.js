import React from "react";
import mapboxgl from "mapbox-gl";
import { HomeStyled, SectionStyled, TitlePageStyled } from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";
import UserProfileHeader from "../UserProfile/UserProfileHeader";
import SquigglesImg from "../../img/squiggles_colorful.svg";
import FoodIcon from "../../img/food_mood.svg";
import FiltersImg from "../../img/filters.svg";
import FilterStyled from "../../style/FilterStyled.style";

function Home() {
  const [data, setData] = React.useState({
    isCards: true
  });

  React.useEffect(() => {
    if (window.screen.width < 1000) {
      document.querySelector(".user--profile--header").style.display = "none";
      document.querySelector("body").style.background = "#F7F6F7";
    }

    if (window.screen.width > 1000) {
      document.querySelector("body").style.overflow = "hidden";

      mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAP_KEY;

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [2.37001, 48.83746], // starting position [lng, lat]
        zoom: 15 // starting zoom
      });

      const geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [2.365170, 48.835010]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        }]
      };

      // add markers to map
      geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.cssText = `background-image: url(${FoodIcon}); background-repeat: no-repeat; width: 84px; height: 84px; border-radius: 50%`;

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
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
        center: [2.37001, 48.83746], // starting position [lng, lat]
        zoom: 15 // starting zoom
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
          <TitlePageStyled className="title--page">
            <h1>Propositions autour de vous</h1>
            <div>
              <img src={SquigglesImg} alt="squiggles--img"></img>
            </div>
          </TitlePageStyled>
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
          <SectionStyled>
            <HomeCards></HomeCards>
            <HomeCards></HomeCards>
            <HomeCards></HomeCards>
            <button onClick={displayMap}>Voir sur la map</button>
          </SectionStyled>
        </>
      ) : (
        <SectionStyled>
          <button onClick={displayMap}>Retour sur la liste</button>
        </SectionStyled>
      )}
    </>
  );
}

export default Home;
