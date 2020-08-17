import styled from "styled-components";

export const FeedStyle = styled.section`
  margin-bottom: 28%;
  .card {
    display: flex;
    margin-left: 20px;
    margin-bottom: 20px;
    color: black;
    width: 90%;
    background: ${props => props.theme.colorSecondary};
    border-radius: 7%;
    height: 33vh;
    .card--header {
      font-family: "Roboto";
      display: flex;
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: 5%;
      .card--name {
        margin-left: 18px;
        line-height: 5px;
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .card--desc {
      margin-left: 19px;
      font-family: "Nunito";
      line-height: 30px;
    }
    .user--infos {
      display: flex;
      justify-content: space-between;
      margin-top: 18px;
      i {
        margin-left: 10px;
        margin-top: 6px;
        font-size: 1.4em;
      }
      .card--user--distance {
        text-align: center;
        margin-right: 20px;
        p {
          color: ${props => props.theme.colorSecondary};
          width: 50px;
          height: 30px;
          text-align: center;
          padding: 6px 0;
          font-size: 12px;
          line-height: 1.428571429;
          border-radius: 15px;
          background-color: black;
        }
      }
    }
  }
`;

export const FooterStyle = styled.footer`
  background-color: ${props => props.theme.colorSecondary};
  border-top: solid 1px ${props => props.theme.color};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  color: ${props => props.theme.colorSecondary};
  text-align: center;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    i {
      color: black;
      margin-right: 24px;
      margin-left: 8%;
      font-size: 1.2em;
      margin-top: 15px;
    }
  }
`;
