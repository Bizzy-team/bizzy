import styled from "styled-components";

const HeaderStyled = styled.header`
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20%;
  div {
    display: flex;
    flex-direction: row;
      img {
        width: 20%;
        height: 20%;
      }
    .buttons--sign {
      margin-left: 35%;
      div {
        padding-left: 10px;
        padding-top: 10px;
        font-size: 1.2em;
      }
    }
  }
`;

export default HeaderStyled;
