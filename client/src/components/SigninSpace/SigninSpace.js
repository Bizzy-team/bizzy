import React from "react";
import { Link } from "react-router-dom";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import Header from "../Header/Header";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> Applicated lint on files

function SigninSpace() {
  return (
    <React.Fragment>
      <Header />
      <LogginSpaceStyled className="loggin--space">
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
          <small class="text-muted" style={{ fontSize: "0.5em" }}>
            6 characters minimum.
          </small>
        </div>
        <div className="loggin--space--btn">
          <button className="btn btn-light">Sign in</button>
        </div>
        <p style={{ fontSize: "0.6em" }}>
          Already have an account ? <Link to="/"> Let's go</Link>
        </p>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default SigninSpace;
