import React from "react";

function FeedCard() {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--avatar">
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
          />
        </div>
        <div className="card--name">
          <h4>Claudia Boudié</h4>
          <div className="card--city">
            <small>from Bordeaux</small>
          </div>
        </div>
      </div>
      <div className="card--desc">
        <p>
          Je suis op pour aller boire des bières pour décompresser de ma journée de
          réunion à l'ECV Digital...
        </p>
      </div>
      <div className="user--infos">
        <div className="user--mood">
          <i className="fas fa-beer"></i>
        </div>
        <div className="card--user--distance">
          <p>1.8km</p>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
