import React from "react";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import {FilterStyled, FeedStyle} from "../../style/FeedStyled.style";

function Feed() {
  return(
    <React.Fragment>
    <HeaderFeedStyled as="header">
      <img class="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani"/>
    </HeaderFeedStyled>
    <FilterStyled>
      <div className="status">
        <label class="el-switch">
          <input type="checkbox" name="switch"></input>
          <span class="el-switch-style"></span>
        </label>
      </div>
      <div className="location">
        <p>Bordeaux</p>
      </div>
      <div className="date">
        <p>Friday</p>
        <button type="button" class="btn btn-default btn-circle">2</button>
      </div>
    </FilterStyled>
    <FeedStyle>
      <p>kebab</p>
    </FeedStyle>
    </React.Fragment>
  )
}

export default Feed