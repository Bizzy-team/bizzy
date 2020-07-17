import React, { useState } from "react";
import Header from "../Header/Header";
import LogginSpace from "../LogginSpace/LogginSpace";
import SigninSpace from "../SignUpSpace/SignUpSpace";

function Home() {
  const [data, setData] = useState({
    signUp: false
  });

  function switchPage(e) {
    if (e.target.id === "sign--up--btn") {
      return setData({
        signUp: true
      });
    }

    return setData({
      signUp: false
    });
  }

  return (
    <React.Fragment>
      <Header switchPage={e => switchPage(e)} />
      {data.signUp ? <SigninSpace /> : <LogginSpace />}
    </React.Fragment>
  );
}

export default Home;
