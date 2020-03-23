import React from "react";
import { Link } from "react-router-dom";
import {IntroductionLogginSpace, LogginSpaceStyled} from "../../style/LogginSpaceStyled.style";

function LogginSpace() {
  return (
    <React.Fragment>
      <IntroductionLogginSpace className="introduction">
        <h1>Welcome back</h1>
        <p>Enter yours informations to see who is around you.</p>
      </IntroductionLogginSpace>
      <LogginSpaceStyled className="loggin--space">
        <div className="loggin--space--mail">
          <input type="mail" id="input--mail" placeholder="Email" required></input>
        </div>
        <div className="loggin--space--password">
          <input
            type="password"
            id="input--password"
            minLength="6"
            placeholder="Password"
            required
          ></input>
          <p><small className="text-muted" style={{ fontSize: "0.4em" }}>6 characters minimum.</small></p>
        </div>
        <div className="loggin--space--btn">
          <button>Log in</button>
        </div>
        <div className="forgot--password">
          <p>
            <Link to="/subscription"> <strong>Forgot password ?</strong></Link>
          </p>
        </div>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default LogginSpace;
