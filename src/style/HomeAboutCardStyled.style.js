import styled from "styled-components";

const HomeAboutCardStyled = styled.section`
  font-family: "Nunito";
  .about--card {
    .card--title {
      display: flex;
      align-items: center;
      .back--arrow {
        display: flex;
        align-items: center;
      }
      .card--title--img {
        img {
          width: 100%;
          height: inherit;
          object-fit: cover;
        }
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
  }

  .section--map {
    display: flex;
    justify-content: center;
    #map {
      width: 90%;
      height: 23%;
      position: absolute;
      margin-bottom: 32%;
      margin-top: 3%;
      .mapboxgl-canvas-container {
        canvas {
          border-radius: 10px;
        }
      }
      .mapboxgl-control-container {
        display: none;
      }
    }
  }

  .buttons {
    margin-top: 60%;
    margin-bottom: 12%;
    display: flex;
    padding: 4px 20px;
    .btn--favorite {
      background-color: ${props => props.theme.colorLola};
      color: black;
      margin-right: 12px;
      padding: 0px 24px;
      border-radius: 10px;
      border-color: ${props => props.theme.colorBtn};
      width: 100%;
      font-size: 0.9em;
      /* opacity: ${props => (props.btnDisabled ? 0.5 : 1)}; */
      /* margin-bottom: 15%; */
    }
    .btn--join {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      /* opacity: ${props => (props.btnDisabled ? 0.5 : 1)}; */
      /* margin-bottom: 15%; */
    }
  }

  @media screen and (min-width: 300px) {
    .about--card {
      padding-top: 10%;
      .card--title {
        .back--arrow {
          margin-right: 3%;
          margin-left: 4px;
        }
        .card--title--img {
          width: 30vw;
        }
        .card--title--name {
          padding-left: 10px;
          h2 {
            font-size: 1.7em;
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
    }
  }

  @media screen and (min-width: 373px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 26vw;
        }
      }
    }
  }

  @media screen and (min-width: 384px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 22vw;
        }
      }
    }
  }

  @media screen and (min-width: 414px) {
    .buttons {
      margin-top: 48%;
    }
  }

  @media screen and (min-width: 492px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 20vw;
        }
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
    }
    .section--map {
      #map {
        height: 31%;
      }
    }
    .buttons {
      margin-top: 53%;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 562px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 16vw;
        }
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
    .section--map {
      #map {
        height: 36%;
        margin-bottom: 24%;
      }
    }
    .buttons {
      margin-top: 51%;
    }
  }

  @media screen and (min-width: 616px) {
    .section--map {
      #map {
        height: 40%;
        margin-bottom: 23%;
      }
    }
  }

  @media screen and (min-width: 691px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 14vw;
        }
        .card--title--name {
          padding-left: 88px;
        }
      }
    }
    .section--map {
      #map {
        height: 45%;
        margin-bottom: 22%;
      }
    }
    .buttons {
      margin-top: 52%;
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
    }
    .section--map {
      #map {
        height: 50%;
        margin-bottom: 19%;
      }
    }
  }

  @media screen and (min-width: 806px) {
    .about--card {
      padding-top: 5%;
    }
    .section--map {
      #map {
        height: 55%;
      }
    }
  }

  @media screen and (min-width: 876px) {
    .about--card {
      .card--title {
        .card--title--img {
          width: 12vw;
        }
        .card--title--name {
          padding-left: 130px;
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
    }
    .section--map {
      #map {
        height: 60%;
      }
    }
    .buttons {
      margin-top: 54%;
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
    .section--map {
      #map {
        height: 65%;
      }
    }
  }

  @media screen and (min-width: 1001px) {
    display: flex;
    .about--card {
      width: 75%;
      .card--title {
        .card--title--img {
          width: 10vw;
        }
        .card--title--name {
          padding-left: 33px;
        }
      }
      .card--tags {
        width: 66%;
      }
      .card--about--author {
        .card--about--author--img {
          width: 5vw;
        }
      }
      .card--desc {
        width: 55%;
        padding: 0 47px;
      }
      .card--participants {
        div {
          div {
            width: 4vw;
          }
        }
      }
    }

    .section--map {
      #map {
        height: 100%;
        width: 50%;
        margin: 0;
      }
    }
    .buttons {
      position: absolute;
      top: 15%;
      left: 2%;
      .btn--favorite {
        margin-right: 50px;
        padding: 0 60px;
      }
      .btn--join {
        padding: 0 60px;
      }
    }
  }

  @media screen and (min-width: 1058px) {
    .buttons {
      margin-top: 50%;
    }
  }

  @media screen and (min-width: 1104px) {
    .about--card .card--tags .card--tags--participants .card--tags--participants--icon {
      width: 2vw;
    }
    .buttons {
      margin-top: 48%;
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
      .card--tags {
        width: 60%;
      }
      .card--about--author {
        .card--about--author--img {
          width: 4vw;
        }
      }
      .card--desc {
        width: 55%;
        padding: 0 47px;
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
    .buttons {
      margin-top: 44%;
    }
  }

  @media screen and (min-width: 1236px) {
    .buttons {
      margin-top: 42%;
    }
  }

  @media screen and (min-width: 1236px) {
    .about--card .card--title .card--title--img {
      width: 8vw;
    }
    .buttons {
      margin-top: 40%;
    }
  }

  @media screen and (min-width: 1389px) {
    .about--card .card--title .card--title--img {
      width: 7vw;
    }
    .buttons {
      margin-top: 38%;
    }
  }

  @media screen and (min-width: 1400px) {
    .about--card {
      width: 70%;
    }
    .buttons {
      left: 4%;
    }
  }
`;

export default HomeAboutCardStyled;
