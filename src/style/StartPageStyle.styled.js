import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const StartPageStyled = styled(GlobalContainer)`
font-family: ${props => props.theme.fontFamilyText};
margin-top: 10%;

span {
  color: ${props => props.theme.colorBtn};
}

h1 {
  line-height: 3;
  font-family: "CeraPro Bold";
  font-size: 2.3em;
}

.startPage--about--title, .startPage--about--afterwork, .startPage--about--position, .startPage--about--msg {
  display: flex;
  flex-direction: row-reverse;
}

.startPage--about--title {
  margin-bottom: 6%;
  .startPage--about--title--img {
    text-align: right;
    img {
      width: 75%;
    }
  }
  .startPage--about--title--about {
    margin-right: 3%;
    padding-top: 10%;
    text-align: center;
  }
  .startPage--about--title--scroll {
    margin-right: 3%;
  }
}

.startPage--about--afterwork {
  .startPage--about--afterwork--img {
    text-align: right;
    img {
      width: 30vw;
    }
  }
  .startPage--about--afterwork--about {
    width: 42%;
    margin-right: 8%;
  }
}

.startPage--about--position {
  margin-bottom: 15%;
  .startPage--about--position--img {
    img {
      width: 30vw;
    }
  }
  .startPage--about--position--about {
    width: 42%;
    margin-right: 8%;
  }
}

.startPage--about--msg {
  margin-bottom: 10%;
  .startPage--about--msg--img {
    img {
      width: 30vw;
    }
  }
  .startPage--about--msg--about {
    width: 42%;
    margin-right: 8%;
    .startPage--about--msg--logo {
      width: 21%;
    }
  }
  .startPage--about--msg--about--btn {
    text-align: center;
    margin-top: 5px;
      button {
        margin: 0 5px;
        padding: 10px 40px;
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
}

@media only screen and (max-width: 876px) {
  img {
    width: 80%;
  }

  h1 {
    font-size: 2em;
  }

  .startPage--about--title, .startPage--about--afterwork, .startPage--about--position, .startPage--about--msg {
    display: block;
    justify-content: center;

  }

  .startPage--about--title--img, .startPage--about--afterwork--img, .startPage--about--position--img, .startPage--about--msg--img  {
    display: flex;
    justify-content: center;
  }

  .startPage--about--title--about, .startPage--about--afterwork--about, .startPage--about--position--about, .startPage--about--msg--about {
    text-align: center;
  }

  .startPage--about--title {
    margin-top: 30%;
    margin-bottom: 0;
    .startPage--about--title--about {
      margin-right: 0;
    }
    .startPage--about--title--scroll {
      height: 22vh;
    }
  }

  .startPage--about--afterwork {
    .startPage--about--afterwork--img {
      img {
        width: 100%;
      }
    }
    .startPage--about--afterwork--about {
      width: 100%;
      margin-right: 0;
    }

    .startPage--about--afterwork--scroll {
      margin-top: -15%;
      height: 18vh;
    }
  }

  .startPage--about--position {
    margin-bottom: 0;
    .startPage--about--position--img {
      img {
        width: 75%;
      }
    }
    .startPage--about--position--about {
      width: 100%;
      margin-right: 0;
      h1 {
        line-height: 2;
      }
      .startPage--about--position--scroll {
        height: 17vh;
      }
      img {
        margin-top: -16%;
      }
    }
  }

  .startPage--about--msg {
    .startPage--about--msg--img {
      img {
        width: 75%;
      }
    }
    .startPage--about--msg--about {
      margin-bottom: 10%;
      margin-right: 0;
      width: 100%;
      img {
        width: 28%;
        margin-right: 10px;
        padding-bottom: 4px;
      }
      button {
        margin: 0 5px;
        padding: 10px 40px;
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
}
`;

export default StartPageStyled;