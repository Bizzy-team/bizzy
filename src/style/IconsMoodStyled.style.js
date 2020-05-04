import styled from "styled-components";

const IconsMoodStyled = styled.section`
  background-color: white;
  padding-left: 22px;
  margin-bottom: 20px;
  height: 28vh;
  div {
    display: flex;
    margin-top: 30px;
    p {
      padding-left: 45px;
      a {
        text-decoration: none;
        color: black;
        i {
          margin-top: 10%;
          font-size: 1.4em;
          padding-right: 10px;
        }
      }
    }
  }
  .filter--km {
    select {
      margin-left: 10px;
      margin-top: 12px;
      border: none;
      background: none;
      width: 13%;
      height: 13%;
    }
  }
`;

export default IconsMoodStyled;
