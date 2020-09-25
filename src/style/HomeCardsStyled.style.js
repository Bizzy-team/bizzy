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
`;

export default HomeCardsStyled;
