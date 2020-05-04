import styled from "styled-components";

const UserProfileStyled = styled.section`
  div {
    background-color: ${props => props.theme.colorSecondary};
// background-color: ${props => props.theme.backgroundColor};
background-color: red;
height: 79vh;
margin-top: 50%;
  .user {
    // background-color: white;
    border-radius: 15px;
    // border: solid 1px ${props => props.theme.color};
    width: 90%;
    margin-left: 20px;
    // margin-top: 20px;
      .user--avatar {
        display: flex;
        justify-content: center;
        padding 10px 0;
        margin-bottom: 40px;
        margin-top: -25%;
        img {
          width: 150px;
          height: 150px;
          border-radius: 10%;
          margin-top: -18%;
          margin-bottom: 10%;
        }
      }
    h2 {
      font-size: 1.5em;
      font-family: ${props => props.theme.fontFamilyTitle}
    }
    h3 {
      font-size: 1.4em;
      margin-left: 12px;
      margin-top: 2px;
      font-family: ${props => props.theme.fontFamilyText}
    }
}`;

export default UserProfileStyled;
