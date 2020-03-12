import styled from "styled-components";

const UserProfileStyled = styled.section`
background-color: ${props => props.theme.backgroundColor};
  div {
    background-color: white;
    border-radius: 15px;
    border: solid 1px ${props => props.theme.color};
    width: 90%;
    margin-left: 20px;
    margin-top: 20px;
      div {
        display: flex;
        justify-content: center;
        padding 10px 0;
        margin-bottom: 40px;
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
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 10%;
        margin-bottom: 10%;
      }
}`

export default UserProfileStyled