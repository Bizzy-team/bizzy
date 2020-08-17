import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const ConfirmMailStyled = styled(GlobalContainer)`
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  .title--mail {
    display: flex;
    .title--mail--img {
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    h3 {
      font-family: "CeraPro Bold";
    }
  }
  main {
    .mail--content {
      .mail--content--buttons {
        display: flex;
        button {
          padding: 10px 24px;
          border-radius: 15px;
          background-color: ${props => props.theme.colorPrincipal};
          border-color: ${props => props.theme.colorBtn};
          font-weight: 900;
        }
      }
    }
    .link--connection {
      display: flex;
      justify-content: center;
      text-align: center;
      p {
        a {
          color: ${props => props.theme.colorSecondary};
          text-decoration: revert;
        }
      }
    }
  }

  @media screen and (min-width: 300px) {
    .title--mail {
      margin-bottom: 22px;
      .title--mail--img {
        width: 10%;
      }
      h3 {
        font-size: 1.4em;
        margin-left: 15px;
      }
    }
    main {
      .mail--content {
        .mail--content--buttons {
          width: 100vw;
          margin-top: 10%;
          margin-bottom: 15%;
          button {
            width: 44vw;
            margin-right: 5px;
          }
        }
      }
      .link--connection {
        display: flex;
        justify-content: center;
        text-align: center;
        p {
          a {
            color: ${props => props.theme.colorSecondary};
            text-decoration: revert;
          }
        }
      }
    }
  }

  @media screen and (min-width: 359px) {
    .title--mail {
      h3 {
        margin-left: 34px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    .title--mail {
      h3 {
        margin-left: 50px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin-top: 42%;
    .title--mail {
      .title--mail--img {
        width: 8%;
      }
    }
  }

  @media screen and (min-width: 490px) {
    margin-top: 38%;
    .title--mail {
      .title--mail--img {
        width: 7%;
      }
      h3 {
        margin-left: 76px;
      }
    }
  }

  @media screen and (min-width: 546px) {
    .title--mail {
      h3 {
        margin-left: 101px;
      }
    }
  }

  @media screen and (min-width: 574px) {
    margin-top: 30%;
    text-align: center;
    .title--mail {
      margin-left: 21%;
      .title--mail--img {
        margin-right: 5%;
        width: 6%;
      }
      h3 {
        margin-left: 9px;
      }
    }
  }

  @media screen and (min-width: 634px) {
    main {
      .mail--content {
        .mail--content--buttons {
          width: 83vw;
        }
      }
    }
  }

  @media screen and (min-width: 678px) {
    main {
      .mail--content {
        .mail--content--buttons {
          width: 76vw;
        }
      }
    }
  }

  @media screen and (min-width: 762px) {
    margin-top: 25%;
    main {
      .mail--content {
        .mail--content--buttons {
          width: 68vw;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 25%;
    .title--mail {
      margin-left: 29%;
    }
    main {
      margin-left: 4%;
      .mail--content {
        .mail--content--buttons {
          width: 68vw;
          margin: 7% auto 6%;
        }
      }
    }
  }

  @media screen and (min-width: 832px) {
    margin-top: 22%;
    .title--mail {
      margin-left: 28%;
    }
    main {
      margin-left: 3%;
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 76vw;
    height: 63vh;
    margin-top: 12%;
    box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
    border-radius: 20px;
    border: solid 3px rgba(247, 246, 247, 1);
    border-bottom-width: 8px;
    background-color: ${props => props.theme.colorPrincipal};
  }

  @media screen and (min-width: 1132px) {
    .title--mail {
      margin-left: 31%;
    }
  }

  @media screen and (min-width: 1252px) {
    .title--mail {
      margin-left: 33%;
      margin-top: 3%;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 44vw;
    height: 46vh;
    margin-top: 15%;
    .title--mail {
      margin-left: 26%;
    }
    main {
      .mail--content {
        .mail--content--buttons {
          margin-left: 12%;
          width: 34vw;
          button {
            width: 15vw;
            margin-right: 28px;
          }
        }
      }
    }
  }
`;

export default ConfirmMailStyled;
