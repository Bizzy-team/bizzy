import React from "react";

function ShareYourMood(props) {

  console.log(props.match.params.icon);
  return(
    <>
    <h1>Your Mood</h1>
    <i className={`fas fa-${props.match.params.icon}`}></i>
    </>
  )
}

export default ShareYourMood