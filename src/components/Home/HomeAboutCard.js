import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import Footer from "../Footer/Footer";
import ParticipantIcon from "../../img/participant_icon.svg";
import BackArrow from "../../img/back_arrow.svg";
import UserAvatar from "../../img/user_avatar.svg";
import HomeAboutCardStyled from "../../style/HomeAboutCardStyled.style";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_TOKEN_MAP_KEY,
  scrollZoom: false
});

function HomeAboutCard(props) {
  function backHome() {
    return props.history.push("/home");
  }

  function renderMarker() {
    return (
      <Marker coordinates={props.location.state.cardDetails.card_geometry.coordinates}>
        <div
          style={{
            display: "block",
            backgroundImage: `url(${props.location.state.imgSrcMap})`,
            backgroundRepeat: "no-repeat",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            backgroundPosition: "-3px -5px",
            backgroundSize: "60px"
          }}
        ></div>
      </Marker>
    );
  }

  return (
    <>
      <HomeAboutCardStyled>
        <section className="about--card">
          <div className="card--title">
            <div className="back--arrow" onClick={backHome}>
              <img src={BackArrow} alt="back-arrow"></img>
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
              <img
                src={UserAvatar}
                // src={props.location.state.cardDetails.card_user_avatar}
                alt="user-avatar"
              ></img>
            </div>
            <p>
              {props.location.state.cardDetails.card_user_name},{" "}
              {props.location.state.cardDetails.card_user_job}
            </p>
          </div>
          <div className="card--desc">
            <p>{props.location.state.cardDetails.card_desc}</p>
          </div>
          <div className="card--participants">
            <h3>Participants:</h3>
            {props.location.state.cardDetails.card_participants.map(
              (participant, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={`participant--${participant.card_participant_id}`}>
                      <div className="card--participant--avatar">
                        <img src={UserAvatar} alt="avatar"></img>
                        {/* <img src={participant.card_participant_avatar} alt="avatar"></img> */}
                      </div>
                      <p>
                        {participant.card_participant_name},{" "}
                        {participant.card_participant_job}
                      </p>
                    </div>
                  </React.Fragment>
                );
              }
            )}
          </div>
          <div className="buttons">
            <button className="btn--favorite">Mettre en favoris</button>
            <button className="btn--join">Rejoindre</button>
          </div>
        </section>
        <section id="map">
          <Map
            style="mapbox://styles/mapbox/streets-v11"
            zoom={[14]}
            center={[
              props.location.state.cardDetails.card_geometry.coordinates[0],
              props.location.state.cardDetails.card_geometry.coordinates[1]
            ]}
          >
            {renderMarker()}
          </Map>
        </section>
      </HomeAboutCardStyled>
      <Footer isUrlActive={props.match}></Footer>
    </>
  );
}

export default HomeAboutCard;
