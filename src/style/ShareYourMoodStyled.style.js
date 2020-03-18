import styled from "styled-components";

export const ShareYourMoodStyledHeader = styled.header`
  background-image: url('https://images.unsplash.com/photo-1515092744438-961dffe687bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80');
  background-size: cover;
  width: 131vw;
  height: 30vh;
  h2 {
    color: white;
    font-family: 'Roboto';
    text-align: center;
    line-height: 198px;
  }
`;

export const ShareYourMoodSection = styled.section`
  background-color: white;
  border-radius: 10px;
  margin-top: 20%;
  margin-left: 54px;
  width: 90vw;
  height: 56vh;
  .mood--card {
    display: flex;
    flex-direction: column;
      div {
        margin-top: 10px;
        margin-left: 5%;
        opacity: 0.5;
          i {
            padding-right: 5%;
          }
      }
      .mood--card--avatar {
        display: flex;
        flex-direction: row;
          input[type='file'] {
            visibility: hidden;
          }
      }
      .mood--card--description {
        margin-bottom: 5px;
        margin-top: 30px;
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