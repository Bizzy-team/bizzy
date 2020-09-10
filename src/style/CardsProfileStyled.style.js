import styled from "styled-components";

const CardsProfileStyled = styled.div`
  background-color: ${props => props.theme.colorPrincipal};
  display: flex;
  flex-direction: column;
  /* width: 35vw; */
  /* height: 40vh; */
  /* margin-top: 12%; */
  box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
  border-radius: 20px;
  border: solid 3px rgba(247, 246, 247, 1);
  border-bottom-width: 8px;
  font-family: "Nunito";
  .card--title {
    display: flex;
    /* flex-direction: column; */
    /* position: relative; */
    /* margin-left: 48px; */
    .card--mood--img {
      /* width: 25%; */
      padding-top: 20px;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    .card--title--name {
      /* position: relative; */
      h2 {
        position: absolute;
        /* left: 130px; */
        /* top: 17px; */
        /* font-size: 1.2em; */
        font-family: "CeraPro Bold";
      }
    }
    .about--user {
      display: flex;
      align-items: center;
      /* margin-left: 12px; */
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      .about--user--content {
        /* margin-right: 12px; */
      }
      .about--user--identity {
        h3 {
          font-size: 1em;
        }
      }
    }
    .edit--icon {
      position: relative;
      img {
        position: absolute;
        /* left: 27px;
        top: 16px; */
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
  .badges--card {
    display: flex;
    justify-content: center;
    position: relative;
    span {
      position: absolute;
      /* bottom: 10px;
      left: 176px; */
      background: ${props => props.theme.colorLola};
      border-radius: 10px;
      padding: 3px 5px;
    }
  }
  .card--desc {
    /* margin-top: 14px; */
    line-height: 1.4;
    padding: 0 8px;
  }

  @media screen and (min-width: 300px) {
    width: 100%;
    .card--title {
      margin-left: 21px;
      .card--mood--img {
        width: 23%;
      }
      .card--title--name {
        h2 {
          top: 17px;
          left: 84px;
          font-size: .7em;
        }
      }
      .about--user {
        margin-left: 4px;
        margin-top: 15px;
        margin-bottom: 5px;
        .about--user--identity {
          h3 {
            font-size: .5em;
          }
        }
        .about--user--avatar {
          width: 18%;
        }
      }
      .edit--icon {
        width: 6%;
        img {
          left: 6px;
          top: 10px;
        }
      }

    }
    .badges--card {
      margin-top: 8px;
      span {
        font-size: .6em;
        bottom: 0px;
        left: 81px;
      }
    }
    .card--desc {
      margin-top: 8px;
      p {
        font-size: .9em;
      }
    }
  }

  @media screen and (min-width: 348px) {
    .card--title {
      .card--title--name {
        h2 {
          left: 102px;
        }
      }
      .about--user {
        .about--user--avatar {
          margin-left: 21px;
        }
      }
    }
    .badges--card {
      span {
        left: 95px;
      }
    }
  }

  @media screen and (min-width: 426px) {
    .card--title {
      .card--title--name {
        h2 {
          left: 130px;
          top: 23px;
          font-size: 1em;
        }
      }
      .about--user {
        margin-left: 0;
        .about--user--identity {
          font-size: 1.2em;
        }
      }
      .edit--icon {
        width: 7vw;
        img {
          left: 52px;
          top: 3px;
        }
      }
    }
    .badges--card {
      span {
        left: 125px;
        font-size: .8em;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .card--title {
      .card--title--name {
        h2 {
          left: 150px;
        }
      }
      .edit--icon {
        img {
          left: 98px;
        }
      }
    }
    .badges--card {
      span {
        left: 145px;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .card--title {
      .card--title--name {
        h2 {
          font-size: 1.3em;
          left: 157px;
        }
      }
      .about--user {
        width: 42%;
        .about--user--identity {
          font-size: 1.3em;
        }
      }
      .edit--icon {
        width: 5vw;
        img {
          left: 126px;
        }
      }
    }
    .badges--card {
      span {
        font-size: 1em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .card--title {
      .card--mood--img {
        width: 17%;
      }
      .card--title--name {
        h2 {
          font-size: 1.5em;

        }
      }
      .about--user {
        width: 100%;
        margin-top: 30px;
        .about--user--avatar {
          margin-left: 34px;
          width: 7%;
        }
        .about--user--identity {
          h3 {
            font-size: .8em;
          }
        }
      }
      .edit--icon {
        width: 5vw;
        img {
          /* left: 202px; */
          left: -21px;
        }
      }
    }
    .badges--card {
      span {
        font-size: 1em;
      }
    }
  }
`;

export default CardsProfileStyled;
