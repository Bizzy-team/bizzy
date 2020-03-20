import React from "react";
import { Link } from "react-router-dom";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";

function SigninSpace() {
  return (
    <React.Fragment>
      <LogginSpaceStyled className="loggin--space">
        <div className="loggin--space--username">
          <label htmlFor="input--username">Username</label>
          <input type="text" id="input--username" className="form-control" required></input>
        </div>
        <div className="loggin--space--mail">
          <label htmlFor="input--mail">Email</label>
          <input type="mail" id="input--mail" className="form-control" required></input>
        </div>
        <div className="loggin--space--password">
          <label htmlFor="input--password">Password</label>
          <input
            type="password"
            id="input--password"
            className="form-control"
            minLength="6"
            required
          ></input>
          <small className="text-muted" style={{ fontSize: "0.5em" }}>
            6 characters minimum.
          </small>
        </div>
        <div className="loggin--space--btn">
          <button className="btn btn-secondary">Sign in</button>
        </div>
        <p style={{ fontSize: "0.6em" }}>
          Already have an account ? <Link to="/"> Let's go</Link>
        </p>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default SigninSpace;
