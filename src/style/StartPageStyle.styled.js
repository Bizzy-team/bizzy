import styled from "styled-components";
import GlobalContainer from "../utlis/GlobalContainer";

const StartPageStyled = styled(GlobalContainer)`
margin-top: 30%;
font-family: ${props => props.theme.fontFamilyText};
img {
  width: 80%;
}
h1 {
  line-height: 3;
  font-family: "CeraPro";
  font-size: 2.3em;
  /* src: url("../utlis/CeraPro/CeraPro-Bold.ttf"); */
}
.startPage--about--title--img, .startPage--about--afterwork--img, .startPage--about--position--img, .startPage--about--msg--img  {
  display: flex;
  justify-content: center;
}

.startPage--about--title--about, .startPage--about--afterwork--about, .startPage--about--position--about, .startPage--about--msg--about {
  text-align: center;
}

.startPage--about--afterwork, .startPage--about--position, .startPage--about--msg {
  margin-top: 44%;
}

.startPage--about--position--about {
  h1 {
  line-height: 2;
  }
}

.startPage--about--msg--about {
  margin-bottom: 10%;
  img {
    width: 35%;
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
`;

export default StartPageStyled;