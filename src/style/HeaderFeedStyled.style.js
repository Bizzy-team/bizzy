import styled from "styled-components";

const HeaderFeedStyled = styled.header`
  display: flex;
  background-color: ${props => props.theme.colorSecondary};
  border-bottom: solid 1px ${props => props.theme.color};
  height: 8vh;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  label {
    margin-top: 22px;
    margin-right: 4%;
  }
  img {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border-radius: 50%;
  }
  i {
    margin-left: 10px;
    font-size: 2em;
  }
  .user--menu {
    margin-left: 12px;
    width: 100%;
    i {
      position: absolute;
      opacity: 0.6em;
      top: 59px;
      left: 6px;
      color: ${props => props.theme.color};
    }
    .dropdown--links {
      width: 40%;
      opacity: 1;
      font-family: "Nunito";
      color: black;
      background-color: ${props => props.theme.colorSecondary};
      border: solid 1px ${props => props.theme.color};
      border-radius: 10px;
      padding: 10px 12px;
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: black;
      }
      button {
        font-weight: bold;
        color: black;
        font-size: 1.2em;
        padding: 0;
      }
    }
  }
`;

export default HeaderFeedStyled;
