import styled from "styled-components";

export const HomeStyled = styled.div`
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
      margin-top: 7%;
    }
  }

  @media screen and (min-width: 447px) {
    #map {
      margin-top: 0;
    }
  }


  @media screen and (min-width: 1000px) {
    display: flex !important;
    flex-direction: row-reverse;
    #map {
      width: 53vw;
      margin-top: 8%;
    }
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  .pagination {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 40px;
    cursor: pointer;
    a {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorBtn};
    }
    li {
      padding: 0 5px;
    }
    .pagination__link--disabled {
      a {
        color: ${props => props.theme.colorBtn};
        border: 1px solid ${props => props.theme.colorBtn};
        opacity: 0.2;
      }
      .pagination__link {
        font-weight: bold;
      }
    }
    .pagination__link--active {
      a {
        color: #fff;
        background: ${props => props.theme.colorBtn};
      }
    }
  }

  button {
    background-color: #283d80;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 10px;
    position: fixed;
    bottom: 85px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media screen and (min-width: 300px) {
    margin-bottom: 22%;
  }

  @media screen and (min-width: 1000px) {
    width: 46%;
    height: 440px;
    overflow: auto;
    margin-bottom: 0;
    button {
      display: none;
    }
  }
`;

export const TitlePageStyled = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    display: flex;
    padding: 6px 25px;
    width: 45%;
    justify-content: space-between;
    margin-bottom: 4%;
    h1 {
      font-family: "CeraPro Bold";
      font-size: 1.5em;
      width: 45%;
    }
    div {
      width: 7vw;
      img {
        width: 100%;
        height: inherit;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    h1 {
      font-size: 2em;
    }
    div {
      width: 5vw;
    }
  }
`;
