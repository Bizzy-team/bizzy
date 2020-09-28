import styled from "styled-components";

const HomeStyled = styled.div`
  display: none;
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .mapboxgl-control-container {
      display: none;
    }
  }

  @media screen and (min-width: 300px) {
    #map {
      .mapboxgl-canvas-container {
        .mapboxgl-canvas {
          margin-top: 23%;
        }
      }
    }
  }

  @media screen and (min-width: 447px) {
    #map {
      .mapboxgl-canvas-container {
        .mapboxgl-canvas {
          margin-top: 16%;
        }
      }
    }
  }

  @media screen and (min-width: 610px) {
    #map {
      .mapboxgl-canvas-container {
        .mapboxgl-canvas {
          margin-top: 12%;
        }
      }
    }
  }

  @media screen and (min-width: 731px) {
    #map {
      .mapboxgl-canvas-container {
        .mapboxgl-canvas {
          margin-top: 10%;
        }
      }
    }
  }

  @media screen and (min-width: 871px) {
    #map {
      .mapboxgl-canvas-container {
        .mapboxgl-canvas {
          margin-top: 9%;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex !important;
    flex-direction: row-reverse;
    #map {
      width: 53vw;
      top: 5%;
    }
  }
`;

export default HomeStyled;
