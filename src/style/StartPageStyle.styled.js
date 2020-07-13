import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const StartPageStyled = styled(GlobalContainer)`
  font-family: ${props => props.theme.fontFamilyText};

  span {
    color: ${props => props.theme.colorBtn};
  }

  h1 {
    font-family: "CeraPro Bold";
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    .section--content {
      /* width: 50%; */
      /* p {
        padding-right: 25%;
      } */
      /* img {
        width: 21%;
      } */
    }
    .section--img {
      /* width: 47%; */
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    .section--btn {
      /* margin-top: 5px; */
      button {
        /* margin: 0 5px; */
        /* padding: 10px 40px; */
        border-radius: 10px;
        border: solid 2px ${props => props.theme.colorBtn};
      }
      .btn--connexion {
        background-color: ${props => props.theme.colorPrincipal};
        color: black;
      }
      .btn--inscription {
        background-color: ${props => props.theme.colorBtn};
        color: ${props => props.theme.colorPrincipal};
      }
    }
  }

  @media only screen and (min-width: 300px) {
   section {
     flex-direction: column-reverse;
     justify-content: center;
     .section--content {
        margin-top: 8%;
        text-align: center;
       h1 {
         font-size: 1.9em;
       }
       p {
         font-size: .8em;
       }
       img {
         width: 27%;
       }
     }
     .section--img {
       width: 80%;
     }
     .section--btn {
       button {
        margin: 0 5px;
        padding: 6px 27px;
       }
     }
   }
  }

  @media only screen and (min-width: 478px) {
    section {
      .section--img {
        width: 60%;
      }
    }
  }
`;

export default StartPageStyled;
