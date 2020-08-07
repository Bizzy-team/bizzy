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
          border-radius: 20px;
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
      /* justify-content: center; */
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
`;

export default ConfirmMailStyled;
