import React from "react";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle, FooterStyle } from "../../style/FeedStyled.style";

function Feed() {
  return (
    <React.Fragment>
      <HeaderFeedStyled as="header">
        <label className="el-switch">
          <input type="checkbox" name="switch"></input>
          <span className="el-switch-style"></span>
        </label>
        <img className="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" />
      </HeaderFeedStyled>
      <FeedStyle>
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedStyle>
      <FooterStyle as="footer">
        <div className="footer--elements">
          <i className="fas fa-home"></i>
          <i className="fas fa-bell"></i>
          <i className="far fa-comments"></i>
        </div>
      </FooterStyle>
    </React.Fragment>
  )
}

export default Feed