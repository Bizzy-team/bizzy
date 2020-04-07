import styled from "styled-components";

const HeaderFeedStyled = styled.header`
  display: flex;
  background-color: white;
  border-bottom: solid 1px ${props => props.theme.color};
  height: 8vh;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  label {
    margin-right: 72%;
    margin-top: 22px;
    margin-left: 8px;
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
  .el-switch {
    margin-left: 84%;
    position: fixed;
  }
  .user--menu {
    margin-left: 12px;
      i {
        position: absolute;
        opacity: 0.6em;
        top: 59px;
        left: 6px;
        color: ${props => props.theme.color};
      }
    .dropdown--links {
      opacity: 1;
      font-family: "Nunito";
      color: black;
      // margin-top: 12%;
      background-color: rgba(255, 255, 255, 1.5);
      // background-color: white;
      border: solid 1px ${props => props.theme.color};
      border-radius: 10px;
      padding: 6px 12px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

export default HeaderFeedStyled;
