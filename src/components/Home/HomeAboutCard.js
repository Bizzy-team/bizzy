import React from "react";
import Footer from "../Footer/Footer";
import ParticipantIcon from "../../img/participant_icon.svg";
import BackArrow from "../../img/back_arrow.svg";
import HomeAboutCardStyled from "../../style/HomeAboutCardStyled.style";

function HomeAboutCard(props) {
  return (
    <>
      <HomeAboutCardStyled>
        <div className="about--card">
          <div className="card--title">
            <div className="back--arrow">
              <img src={BackArrow} alt="back-arrow"></img>
            </div>
            <div className="card--title--img">
              <img src={props.location.state.cardDetails.card_user_mood} alt="icons-mood"></img>
            </div>
            <div className="card--title--name">
              <h2>{props.location.state.cardDetails.card_title}</h2>
            </div>
          </div>
          <div className="card--tags">
            <div className="card--tags--distance">
              <span>800m</span>
            </div>
            <div className="card--tags--time">
              <span>13h</span>
            </div>
            <div className="card--tags--participants">
              <div className="card--tags--participants--icon">
                <img src={ParticipantIcon} alt="participant-icon"></img>
              </div>
              <span>3</span>
            </div>
          </div>
          <div className="card--about--author">
            <div className="card--about--author--img">
              <img src={props.location.state.cardDetails.card_user_avatar} alt="user-avatar"></img>
            </div>
            <p>{props.location.state.cardDetails.card_user_name}, {props.location.state.cardDetails.card_user_job}</p>
          </div>
          <div className="card--desc">
            <p>{props.location.state.cardDetails.card_desc}</p>
          </div>
          <div className="card--participants">
            <h3>Participants:</h3>
            {props.location.state.cardDetails.card_participants.map((participant, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={`participant--${participant.card_participant_id}`}>
                    <div className="card--participant--avatar">
                      <img src={participant.card_participant_avatar} alt="avatar"></img>
                    </div>
                    <p>{participant.card_participant_name}, {participant.card_participant_job}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </HomeAboutCardStyled>

      <Footer isUrlActive={props.match}></Footer>
    </>
  );
}

export default HomeAboutCard;
