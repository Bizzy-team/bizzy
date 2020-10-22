import React from "react";
import Footer from "../Footer/Footer";
import ParticipantIcon from "../../img/participant_icon.svg";
import BackArrow from "../../img/back_arrow.svg";
import HomeAboutCardStyled from "../../style/HomeAboutCardStyled.style";

function HomeAboutCard(props) {
  const [data, setData] = React.useState({
    card: props.location.state.cardDetails
  });

  return (
    <>
      <HomeAboutCardStyled>
        <div className="about--card">
          <div className="card--title">
            <div className="back--arrow">
              <img src={BackArrow} alt="back-arrow"></img>
            </div>
            <div className="card--title--img">
              <img src={data.card.card_user_mood} alt="icons-mood"></img>
            </div>
            <div className="card--title--name">
              <h2>{data.card.card_title}</h2>
            </div>
          </div>
          <div className="card--tags">
            <span>800m</span>
            <span>13h</span>
            <div className="card--tags--participants--icon">
              <img src={ParticipantIcon} alt="participant-icon"></img>
              <span>3</span>
            </div>
          </div>
          <div className="card--about--author">
            <div className="card--about--author--img">
              <img src={data.card.card_user_avatar} alt="user-avatar"></img>
            </div>
            <p>{data.card.card_user_name}</p>
            <p>{data.card.card_user_job}</p>
          </div>
          <div className="card--desc">
            <p>{data.card.card_desc}</p>
          </div>
          <div className="card--participants">
            {data.card.card_participants.map((participant, index) => {
              return (
                <>
                  <div
                    className={`participant--${participant.card_participant_id}`}
                    key={index}
                  >
                    <div className="card--participant--avatar">
                      <img src={participant.card_participant_avatar} alt="avatar"></img>
                    </div>
                    <h3>{participant.card_participant_name}</h3>
                    <p>{participant.card_participant_job}</p>
                  </div>
                </>
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
