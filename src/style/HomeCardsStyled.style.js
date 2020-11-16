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
      return "position: fixed; margin: 5% auto; left: 0; right: 0; top: 68%; z-index: 1; box-shadow: none; border: none;";
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
        .card--author--about--img {
          display: flex;
          width: 6vw;
          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }
    }
  }
  .card--tags {
    display: flex;
    .card--tags--time {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme.colorLola};
      border-radius: 10px;
      padding: 0 14px;
      p {
        margin-bottom: 0;
      }
    }
    .card--tags--distance {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme.colorLola};
      border-radius: 10px;
      padding: 0 14px;
      p {
        margin-bottom: 0;
      }
    }
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
      ${props => {
        if (props.isModalCard) {
          return "margin-left: 16%; margin-top: 6px;";
        } else {
          return "margin-top: 8px; margin-left: 14%; font-size: .7em;";
        }
      }}
      .card--tags--time, .card--tags--distance {
        margin: 0 5px;
      }
      .card--tags--participants {
        margin: 0 5px;
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

  @media screen and (min-width: 360px) {
    .card--tags {
      margin-left: ${props => (props.isModalCard ? "18%;" : "17%;")};
    }
  }

  @media screen and (min-width: 370px) {
    #map {
      .modal--card--about {
        .card--header {
          .card--title {
            .card--title--name {
              ${props => {
                if (props.isModalCard) {
                  return "width: 62vw";
                }
              }}
            }
          }
        }
      }
    }
    .card--author--about {
      ${props => {
        if (props.isModalCard) {
          return "margin-left: 4px;";
        }
      }}
    }
    .card--tags {
      ${props => {
        if (props.isModalCard) {
          return "margin-left: 5%;";
        }
      }}
    }
  }

  @media screen and (min-width: 388px) {
    .card--header {
      .card--title {
        .card--title--name {
          ${props => props.isModalCard && "margin-left: 5px;"};
        }
      }
    }
  }

  @media screen and (min-width: 401px) {
    .card--tags {
      ${props => {
        if (props.isModalCard) {
          return "margin-left: 0; width: 83vw;";
        }
      }}
    }
  }

  @media screen and (min-width: 418px) {
    ${props => props.isModalCard && "top: 56%;"};
    .card--tags {
      ${props => !props.isModalCard && "margin-left: 18%;"};
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
      ${props => (!props.isModalCard ? "margin-right: 5%;" : "width: 79vw;")};
      .card--tags--participants {
        .card--tags--participants--icon {
          ${props => props.isModalCard && "width: 3vw;"};
        }
      }
    }
  }

  @media screen and (min-width: 464px) {
    .card--header {
      .card--title {
        .card--title--name {
          .card--title--like {
            ${props => props.isModalCard && "width: 5vw;"};
          }
        }
      }
    }
  }

  @media screen and (min-width: 500px) {
    .card--tags {
      ${props => props.isModalCard && "width: 72vw;"};
    }
  }

  @media screen and (min-width: 516px) {
    .card--tags {
      ${props => {
        if (!props.isModalCard) {
          return "margin-right: 11%; margin-top: 2px;";
        }
      }}
    }
  }

  @media screen and (min-width: 544px) {
    ${props => props.isModalCard && "padding: 16px 14px;"};
    .card--header {
      .card--img {
        width: 15vw;
      }
      .card--title {
        .card--title--name {
          h2 {
            ${props => props.isModalCard && "line-height: 1;"};
          }
          .card--title--like {
            width: 5vw;
          }
        }
      }
    }
    .card--tags {
      ${props =>
        props.isModalCard
          ? "margin-top: -12px; margin-left: 17%;"
          : "margin-right: 0; margin-left: 17%;"};
      .card--tags--participants {
        ${props => props.isModalCard && "margin-right: 50%;"};
        .card--tags--participants--icon {
          ${props => props.isModalCard && "width: 3vw;"};
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
      margin-right: 23%;
      .card--tags--participants {
        .card--tags--participants--icon {
          width: 3vw;
        }
      }
    }
  }

  @media screen and (min-width: 602px) {
    .card--tags {
      .card--tags--participants {
        ${props => props.isModalCard && "margin-right: 49%;"};
      }
    }
  }

  @media screen and (min-width: 649px) {
    .card--tags {
      ${props => props.isModalCard && "margin-left: 14%;"};
    }
  }

  @media screen and (min-width: 671px) {
    .card--header {
      height: 11vh;
    }
    .card--tags {
      margin-right: 28%;
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
      ${props =>
        !props.isModalCard && "margin-top: 4px; margin-right: 0; margin-left: 15%;"};
      .card--tags--participants {
        ${props => props.isModalCard && "margin-right: 55%;"};
      }
    }
  }

  @media screen and (min-width: 720px) {
    .card--header {
      .card--title {
        .card--author--about {
          .card--author--about--img {
            ${props => props.isModalCard && "width: 4vw;"};
          }
        }
      }
    }
    .card--tags {
      ${props => props.isModalCard && "margin-left: 13%; margin-top: -22px;"};
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
        .card--author--about {
          .card--author--about--img {
            ${props => !props.isModalCard && "width: 4vw; "};
          }
        }
      }
    }
    .card--tags {
      ${props =>
        props.isModalCard
          ? "justify-content: flex-start;"
          : "margin-top: 0; margin-left: 13%;"};
    }
  }

  @media screen and (min-width: 892px) {
    .card--header {
      .card--img {
        width: 10vw;
      }
      .card--title {
        margin-left: 15px;
        .card--author--about {
          .card--author--about--img {
            ${props => props.isModalCard && "width: 3vw;"};
          }
        }
      }
    }
    .card--tags {
      .card--tags--participants {
        .card--tags--participants--icon {
          ${props => props.isModalCard && "width: 2vw;"};
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    ${props => {
      if (props.isModalCard) {
        return "width: 45%; left: 48%; top: 68%;";
      }
    }}
    z-index: 4;
    .card--header {
      .card--img {
        width: 7vw;
      }
      .card--title {
        .card--title--name {
          width: 30vw;
        }
        .card--author--about {
          .card--author--about--img {
            ${props => !props.isModalCard && "width 3vw;"};
          }
        }
      }
    }
    .card--tags {
      margin-left: 19%;
      .card--tags--participants {
        .card--tags--participants--icon {
          width: 2vw;
        }
      }
    }
  }

  @media screen and (min-width: 1124px) {
    .card--tags {
      margin-right: 17%;
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
    .card--tags {
      margin-right: 23%;
    }
  }

  @media screen and (min-width: 1197px) {
    .card--tags {
      ${props => props.isModalCard && "margin-top: 0;"};
    }
  }

  @media screen and (min-width: 1227px) {
    .card--tags {
      ${props => props.isModalCard && "margin-top: -22px;"};
    }
  }

  @media screen and (min-width: 1400px) {
    .card--header {
      .card--title {
        .card--author--about {
          .card--author--about--img {
            ${props => props.isModalCard && "width: 2vw;"};
          }
        }
      }
    }
    .card--tags {
      ${props => (props.isModalCard ? "margin-top: -12px;" : "margin-top: 8px;")};
      margin-left: 18%;
      .card--tags--participants {
        .card--tags--participants--icon {
          width: 1.4vw;
        }
      }
    }
  }

  @media screen and (min-width: 1556px) {
    .card--header .card--title .card--author--about .card--author--about--img {
      ${props => !props.isModalCard && "width: 2vw;"};
    }
    .card--tags {
      ${props => !props.isModalCard && "margin-top: 0;"};
    }
  }

  @media screen and (min-width: 1641px) {
    .card--content {
      margin-top: 24px;
    }
  }

  @media screen and (min-width: 1660px) {
    ${props => props.isModalCard && "height: 18%;"};
  }

  @media screen and (min-width: 1848px) {
    ${props => {
      if (props.isModalCard) {
        return `
          height: 19%;
          .card--header {
            .card--title {
              margin-top: 10;
            }
          }
          .card--tags {
            margin-top: 4px;
          }
        `;
      }
    }}
  }

  @media screen and (min-width: 1870px) {
    .card--content {
      margin-top: 30px;
    }
  }

  @media screen and (min-width: 1920px) {
    ${props => {
      if (props.isModalCard) {
        return `
          height: 18%;
          .card--tags {
            margin-top: -6px;
            .card--tags--participants {
              .card--tags--participants--icon {
                width: 1vw;
              }
            }
          }
        `;
      }
    }}
  }
`;

export default HomeCardsStyled;
