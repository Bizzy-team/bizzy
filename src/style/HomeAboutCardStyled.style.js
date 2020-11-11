import styled from "styled-components";

const HomeAboutCardStyled = styled.main`
  font-family: "Nunito";
  .about--card {
    .card--title {
      display: flex;
      align-items: center;
      .back--arrow {
        display: flex;
        align-items: center;
      }
      .card--title--name {
        h2 {
          font-family: "CeraPro Bold";
        }
      }
    }
    .card--tags {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card--tags--distance {
        span {
          background-color: ${props => props.theme.colorLola};
          border-radius: 10px;
        }
      }
      .card--tags--time {
        span {
          background-color: ${props => props.theme.colorLola};
          border-radius: 10px;
        }
      }
      .card--tags--participants {
        display: flex;
        background-color: ${props => props.theme.colorLola};
        border-radius: 10px;
        .card--tags--participants--icon {
          img {
            width: 100%;
            height: inherit;
            object-fit: cover;
          }
        }
      }
    }
    .card--about--author {
      display: flex;
      align-items: center;
      .card--about--author--img {
        img {
          width: 100%;
          height: inherit;
          object-fit: cover;
        }
      }
      p {
        margin: 0;
        font-weight: bold;
        text-decoration: underline;
      }
    }
    .card--participants {
      h3 {
        font-weight: bold;
      }
      div {
        display: flex;
        align-items: center;
        div {
          img {
            width: 100%;
            height: inherit;
            object-fit: cover;
          }
        }
        p {
          margin: 0;
          text-decoration: underline;
        }
      }
    }
    .buttons {
      display: flex;
      .btn--favorite {
        background-color: ${props => props.theme.colorLola};
        color: black;
        margin-right: 12px;
        padding: 0px 24px;
        border-radius: 10px;
        border-color: ${props => props.theme.colorBtn};
        width: 100%;
        font-size: 0.9em;
      }
      .btn--join {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
        padding: 10px 24px;
        border: none;
        border-radius: 10px;
        width: 100%;
        font-size: 0.9em;
      }
    }
  }

  #map {
    .mapboxgl-map {
      .mapboxgl-marker {
        z-index: 0 !important;
      }
      .mapboxgl-control-container {
        display: none;
      }
    }
  }

  @media screen and (min-width: 300px) {
    .about--card {
      .card--title {
        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.18);
        height: 8vh;
        .back--arrow {
          margin-right: 3%;
          margin-left: 6%;
        }
        .card--title--name {
          padding-left: 10px;
          h2 {
            font-size: 1.4em;
            margin: 0;
          }
        }
      }
      .card--tags {
        margin: 30px 0;
        .card--tags--distance {
          span {
            padding: 5px 25px;
          }
        }
        .card--tags--time {
          span {
            padding: 5px 25px;
          }
        }
        .card--tags--participants {
          padding: 5px 25px;
          .card--tags--participants--icon {
            width: 8vw;
            padding-right: 10px;
          }
        }
      }
      .card--about--author {
        margin-left: 4%;
        margin-bottom: 2%;
        .card--about--author--img {
          padding-right: 10px;
          width: 15vw;
        }
        p {
          font-size: 1.1em;
        }
      }
      .card--desc {
        padding: 0 15px;
      }
      .card--participants {
        margin-left: 4%;
        h3 {
          font-size: 1.2em;
        }
        div {
          padding-right: 10px;
          margin: 5px 0;
          div {
            margin-right: 16px;
            width: 12vw;
          }
        }
      }
      .buttons {
        margin-top: 11%;
        margin-bottom: 12%;
        padding: 4px 20px;
      }
    }
    #map {
      display: flex;
      justify-content: center;
      margin-bottom: 30%;
      .mapboxgl-map {
        border-radius: 15px;
        height: 30vh;
        width: 90vw;
      }
    }
  }

  @media screen and (min-width: 373px) {
    .about--card {
      .card--desc {
        padding: 0 19px;
      }
    }
  }

  @media screen and (min-width: 414px) {
    .about--card {
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 6vw;
          }
        }
      }
    }
  }

  @media screen and (min-width: 492px) {
    .about--card {
      .card--title {
        .card--title--name {
          padding-left: 29px;
        }
      }
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 6vw;
          }
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 12vw;
        }
      }
      .card--desc {
        padding: 0 25px;
      }
    }
    #map {
      margin-top: 5%;
    }
  }

  @media screen and (min-width: 538px) {
    #map {
      margin-bottom: 18%;
    }
  }

  @media screen and (min-width: 562px) {
    .about--card {
      .card--title {
        .card--title--name {
          padding-left: 44px;
        }
      }
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 5vw;
          }
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 9vw;
        }
      }
      .card--participants {
        div {
          div {
            width: 8vw;
          }
        }
      }
    }
  }

  @media screen and (min-width: 616px) {
    .about--card {
      .card--desc {
        padding: 0 30px;
      }
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 4vw;
          }
        }
      }
      .buttons {
        margin-top: 6%;
        margin-bottom: 7%;
      }
    }
  }

  @media screen and (min-width: 691px) {
    .about--card {
      .card--title {
        .card--title--name {
          padding-left: 88px;
        }
      }
    }
  }

  @media screen and (min-width: 785px) {
    .about--card {
      .card--title {
        .card--title--name {
          h2 {
            font-size: 2em;
          }
        }
      }
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 4vw;
          }
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 7vw;
        }
      }
      .card--participants {
        div {
          div {
            width: 6vw;
          }
        }
      }
      .card--desc {
        padding: 0 36px;
      }
    }
    #map {
      .mapboxgl-map {
        height: 40vh;
      }
    }
  }

  @media screen and (min-width: 876px) {
    .about--card {
      .card--title {
        .card--title--name {
          padding-left: 29px;
        }
      }
      .card--tags {
        .card--tags--participants {
          .card--tags--participants--icon {
            width: 3vw;
          }
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 6vw;
        }
      }
      .card--participants {
        div {
          div {
            width: 5vw;
          }
        }
      }
      .card--desc {
        padding: 0 42px;
      }
    }
  }

  @media screen and (min-width: 986px) {
    .about--card {
      .card--title {
        .card--title--name {
          padding-left: 180px;
        }
      }
    }
  }

  @media screen and (min-width: 1001px) {
    display: flex;
    .about--card {
      width: 75%;
      .card--title {
        .back--arrow {
          margin-left: 5%;
        }
        .card--title--name {
          padding-left: 20px;
          h2 {
            font-size: 1.7em;
          }
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 5vw;
        }
      }
      .card--desc {
        padding: 0 26px;
        margin-top: 4%;
        p {
          font-size: 1.15em;
        }
      }
      .card--participants {
        margin-top: 8%;
        div {
          div {
            width: 4vw;
          }
        }
      }
      .buttons {
        margin-top: 30%;
        .btn--favorite {
          margin-right: 50px;
        }
      }
    }

    #map {
      margin-top: 0;
      .mapboxgl-map {
        height: 100vh;
        width: 50vw;
      }
    }
  }

  @media screen and (min-width: 1104px) {
    .about--card .card--tags .card--tags--participants .card--tags--participants--icon {
      width: 2vw;
    }
  }

  @media screen and (min-width: 1150px) {
    .about--card {
      width: 75%;
      .card--title {
        .card--title--img {
          width: 9vw;
        }
        .card--title--name {
          padding-left: 45px;
        }
      }
      .card--about--author {
        .card--about--author--img {
          width: 4vw;
        }
      }
      .card--participants {
        div {
          div {
            width: 3vw;
          }
        }
      }
    }
    .section--map {
      #map {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 1236px) {
    .about--card {
      .card--desc {
        padding: 0 43px;
      }
    }
  }

  @media screen and (min-width: 1236px) {
    .about--card .card--title .card--title--img {
      width: 8vw;
    }
    .buttons {
      top: 10%;
    }
  }

  @media screen and (min-width: 1326px) {
    .about--card .card--title .card--title--img {
      width: 8vw;
    }
    .buttons {
      top: 5%;
      left: 5%;
    }
  }

  @media screen and (min-width: 1389px) {
    .about--card .card--title .card--title--img {
      width: 7vw;
    }
  }

  @media screen and (min-width: 1400px) {
    .about--card {
      width: 70%;
      .card--desc {
        padding: 0 48px;
      }
    }
  }

  @media screen and (min-width: 1466px) {
    .about--card {
      .buttons {
        margin-top: 20%;
      }
    }
  }

  @media screen and (min-width: 1500px) {
    .about--card {
      padding: 0;
      .card--participants {
        margin-top: 4%;
      }
    }
  }
`;

export default HomeAboutCardStyled;
