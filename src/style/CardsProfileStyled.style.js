import styled from "styled-components";

const CardsProfileStyled = styled.div`
  background-color: ${props => props.theme.colorPrincipal};
  display: flex;
  flex-direction: column;
  width: 35vw;
  /* height: 40vh; */
  margin-top: 12%;
  box-shadow: 0px 5px 5px 5px rgba(247, 246, 247, 1);
  border-radius: 20px;
  border: solid 3px rgba(247, 246, 247, 1);
  border-bottom-width: 8px;
  font-family: "Nunito";
  .card--title {
    display: flex;
    /* flex-direction: column; */
    position: relative;
    margin-left: 48px;
    .card--mood--img {
      width: 25%;
      padding-top: 20px;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    h2 {
      position: absolute;
      left: 130px;
      top: 17px;
      font-size: 1.2em;
      font-family: "CeraPro Bold";
    }
    .about--user {
      display: flex;
      align-items: center;
      margin-left: 12px;
      .about--user--content {
        margin-right: 12px;
      }
      h3 {
        font-size: 1em;
      }
    }
    .edit--icon {
      position: relative;
      img {
        position: absolute;
        left: 27px;
        top: 16px;
      }
    }

  }
  .badges--card {
    display: flex;
    justify-content: center;
    position: relative;
    span {
      position: absolute;
      bottom: 10px;
      left: 176px;
      background: ${props => props.theme.colorLola};
      border-radius: 10px;
      padding: 3px 5px;
    }
  }
  .card--desc {
    margin-top: 14px;
    line-height: 1.4;
    padding: 0 8px;
  }
`;

export default CardsProfileStyled;