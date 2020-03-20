import React from "react";
import Footer from "../Footer/Footer";
import {
  ShareYourMoodStyledHeader,
  ShareYourMoodSection
} from "../../style/ShareYourMoodStyled.style";

function ShareYourMood(props) {

  document.querySelector("body").style = "overflow: hidden";

  return (
    <React.Fragment>
      <ShareYourMoodStyledHeader>
        <h2>Time to chill</h2>
      </ShareYourMoodStyledHeader>
      <div className="container">
        <ShareYourMoodSection as="section">
          <div className="mood--card">
            <div className="mood--card--avatar">
              <i className="far fa-user"></i>
              <label htmlFor="avatar">avatar</label>
              <input type="file" id="avatar"></input>
            </div>
            <div className="mood--card--name">
              <i className="far fa-id-badge"></i>
              <input placeholder="name"></input>
            </div>
            <div className="mood--card--location">
              <i className="fas fa-map-marker-alt"></i>
              <input placeholder="from to"></input>
            </div>
            <div className="mood--card--description">
              <textarea
                id="description"
                rows="5"
                cols="33"
                placeholder="give a short description"
              ></textarea>
            </div>
            <div className="mood--card--icon">
              <h6 className="mr-3">Your mood:</h6>
              <i className={`fas fa-${props.match.params.icon}`}></i>
            </div>
          </div>
          <div className="create--btn">
            <button className="btn btn-primary">Create</button>
          </div>
        </ShareYourMoodSection>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ShareYourMood;
