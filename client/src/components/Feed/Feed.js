import React, {useState} from "react";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle, FooterStyle } from "../../style/FeedStyled.style";
import { Link } from "react-router-dom";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";

function Feed() {

  const [data, setData] = useState({
    iconsMood: false
  })

  function displayIcons() {
    const newState = {...data};
    // debugger;
    if (newState.iconsMood === false) {
      newState.iconsMood = true;
      return setData(newState);
    }
    if (newState.iconsMood === true) {
      newState.iconsMood = false;
      return setData(newState);
    }
  }

  console.log(data.iconsMood);

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header">
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={displayIcons}></input>
          <span className="el-switch-style"></span>
        </label>
        <Link to="/user_profile">
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
          />
        </Link>
      </HeaderFeedStyled>
      {
        function () {
          if (data.iconsMood === true) {
            return(
              <IconsMoodStyled>
                <h2>What's your mood ?</h2>
                <div>
                  <i className="fas fa-utensils"></i>
                  <i className="fas fa-running"></i>
                  <i className="fas fa-film"></i>
                  <i className="fas fa-beer"></i>
                </div>
              </IconsMoodStyled>
            )
          }
        }()
      }
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
  );
}

export default Feed;
