import React from "react";
import mapboxgl from 'mapbox-gl';
import HomeHeader from "./HomeHeader";

function Home() {

  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3ZpbjMzMjQiLCJhIjoiY2thaTZweWM2MDdpZTJzczBqdDE5YjVyeiJ9.bKdiEHmbDnDtQUnNU-jI7Q';

     new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 3 // starting zoom
    });
  })

  return (
    <>
      <HomeHeader/>
      <div>
        <div id="map" style={{position: 'absolute'}}></div>
      </div>
    </>
  );
}

export default Home;
