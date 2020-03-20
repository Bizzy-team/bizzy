import React from "react";
import { Link } from "react-router-dom";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import Header from "../Header/Header";

function LogginSpace() {

  // function signInPage() {
  //   console.log("sign in page");
  // }

  // function signUpPage() {
  //   console.log("sign up page");
  // }

  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* <Header signIn={() => signInPage()}  signUp={() => signUpPage()}/> */}
      <LogginSpaceStyled className="loggin--space">
        <div className="loggin--space--mail">
          {/* <input type="mail" id="input--mail" className="form-control"  placeholder="email" required></input> */}
          <input type="mail" id="input--mail" placeholder="Email" required></input>
        </div>
        <div className="loggin--space--password">
          <input
            type="password"
            id="input--password"
            // className="form-control"
            minLength="6"
            placeholder="Password"
            required
          ></input>
          <p><small className="text-muted" style={{ fontSize: "0.4em" }}>6 characters minimum.</small></p>
        </div>
        <div className="loggin--space--btn">
          <button className="btn btn-secondary">Log in</button>
        </div>
        <p style={{ fontSize: "0.6em" }}>
          Not an account ? Time's to create <Link to="/subscription">one</Link>
        </p>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default LogginSpace;
