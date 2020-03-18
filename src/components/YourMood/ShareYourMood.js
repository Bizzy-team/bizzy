import React from "react";
import Footer from "../Footer/Footer";

function ShareYourMood(props) {
  return (
    <>
      <h1>Your Mood</h1>
      <i className={`fas fa-${props.match.params.icon}`}></i>
      <Footer />
    </>
  );
}

export default ShareYourMood;
