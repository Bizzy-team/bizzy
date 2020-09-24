import styled from "styled-components";

const HomeStyled = styled.div`
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .mapboxgl-canvas-container{
      .mapboxgl-canvas {
        margin-top: 23%;
      }
    }
    .mapboxgl-control-container {
      display: none;
    }
  }
`;

export default HomeStyled;