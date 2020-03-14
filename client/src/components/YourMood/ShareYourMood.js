import React from "react";

function ShareYourMood(props) {
  return (
    <>
      <h1>Your Mood</h1>
      <i className={`fas fa-${props.match.params.icon}`}></i>
    </>
  );
}

export default ShareYourMood;
