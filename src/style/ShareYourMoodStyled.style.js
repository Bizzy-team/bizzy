import styled from "styled-components";

export const ShareYourMoodStyledHeader = styled.header`
  background-image: url("https://images.unsplash.com/photo-1515092744438-961dffe687bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80");
  background-size: cover;
  height: 30vh;
  h2 {
    color: white;
    font-family: "Roboto";
    text-align: center;
    line-height: 198px;
  }
`;

export const ShareYourMoodSection = styled.section`
  background-color: white;
  border-radius: 34px;
  width: 90vw;
  height: 56vh;
  font-size: 1.3em;
  margin-top: 10%;
  margin-bottom: 28%;
  margin-left: 3px;
  .mood--card {
    display: flex;
    flex-direction: column;
    font-family: "Nunito";
    padding-top: 17px;
    padding-left: 36px;
    div {
      opacity: 0.5;
      margin-bottom: 10px;
      i {
        padding-right: 5%;
      }
    }
    .mood--card--avatar {
      display: flex;
      flex-direction: row;
      input[type="file"] {
        visibility: hidden;
      }
    }
    .mood--card--name,
    .mood--card--location {
      input {
        border: none;
      }
    }
    .mood--card--description {
      margin-bottom: 5px;
      margin-top: 30px;
      textarea {
        width: 95%;
      }
    }
    .mood--card--icon {
      display: flex;
      margin-top: 10px;
      margin-bottom: 5px;
      opacity: 1;
    }
  }
  .create--btn {
    display: flex;
    justify-content: center;
    margin-top: 10%;
    button {
      width: 80%;
    }
  }
`;
