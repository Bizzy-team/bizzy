import styled from "styled-components";

const HomeCardsStyled = styled.div`
  background-color: ${props => props.theme.colorPrincipal};
  padding: 10px 6px;
  box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
  border-radius: 20px;
  border: solid 3px rgba(247, 246, 247, 1);
  border-bottom-width: 8px;
  font-family: "Nunito";
  width: 90%;
  ${props => {
    if (props.isModalCard) {
      return "position: fixed; bottom: 82px; z-index: 1; box-shadow: none;";
    }
  }}
  .card--header {
    display: flex;
    .card--img {
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .card--title {
      display: flex;
      flex-direction: column;
      .card--title--name {
        display: flex;
        justify-content: space-between;
        width: 68vw;
        h2 {
          font-size: 1em;
          line-height: 1.7;
          font-family: "CeraPro Bold";
        }
        .card--title--like {
          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }
      .card--author--about {
        display: flex;
        align-items: center;
      }
    }
  }
  .card--tags {
    display: flex;
    justify-content: center;
    .card--tags--participants {
      display: flex;
      justify-content: center;
      background-color: ${props => props.theme.colorLola};
      border-radius: 10px;
      .card--tags--participants--icon {
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
      p {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (min-width: 300px) {
    .card--header {
      .card--img {
        width: 20vw;
      }
      .card--title {
        margin-left: 6px;
        .card--title--name {
          .card--title--like {
            width: 7vw;
          }
        }
        .card--author--about {
          p {
            margin-bottom: 0;
            font-size: 0.8em;
            padding-left: 8px;
          }
        }
      }
    }
    .card--tags {
      margin-top: 8px;
      .card--tags--participants {
        margin-right: 38%;
        padding: 0px 14px;
        .card--tags--participants--icon {
          width: 5vw;
          padding-right: 4px;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
    .card--content {
      margin-top: 5px;
    }
  }

  @media screen and (min-width: 445px) {
    .card--header {
      .card--img {
        width: 17vw;
      }
      .card--title {
        .card--title--name {
          h2 {
            font-size: 1.3em;
          }
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 46%;
      }
    }
  }

  @media screen and (min-width: 544px) {
    .card--header {
      .card--img {
        width: 15vw;
      }
      .card--title {
        .card--title--name {
          .card--title--like {
            width: 5vw;
          }
        }
      }
    }
  }

  @media screen and (min-width: 593px) {
    .card--header {
      .card--title {
        margin-left: 10px;
        .card--title--name {
          h2 {
            font-size: 1.4em;
          }
        }
        .card--author--about {
          p {
            font-size: 0.9em;
          }
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 52%;
        .card--tags--participants--icon {
          width: 3vw;
        }
      }
    }
  }

  @media screen and (min-width: 688px) {
    .card--header {
      .card--img {
        width: 13vw;
      }
      .card--title {
        margin-left: 10px;
        .card--title--name {
          h2 {
            font-size: 1.5em;
          }
          .card--title--like {
            width: 4vw;
          }
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 59%;
      }
    }
  }

  @media screen and (min-width: 785px) {
    .card--header {
      .card--img {
        width: 11vw;
      }
      .card--title {
        .card--title--name {
          .card--title--like {
            width: 3vw;
          }
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 66%;
      }
    }
  }

  @media screen and (min-width: 892px) {
    .card--header {
      .card--img {
        width: 10vw;
      }
      .card--title {
        margin-left: 15px;
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 69%;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .card--header {
      .card--img {
        width: 7vw;
      }
      .card--title {
        .card--title--name {
          width: 30vw;
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        margin-right: 46%;
        margin-top: 10px;
        .card--tags--participants--icon {
          width: 2vw;
        }
      }
    }
  }

  @media screen and (min-width: 1227px) {
    .card--header {
      .card--title {
        .card--title--name {
          .card--title--like {
            width: 2vw;
          }
        }
      }
    }
  }
`;

export default HomeCardsStyled;
