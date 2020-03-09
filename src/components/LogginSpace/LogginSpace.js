import React from "react";
import LogginSpaceStyled from "../../style/LogginSpaceStyled.style";
import {Link} from "react-router-dom";

function LogginSpace() {
  return(
    <LogginSpaceStyled className="loggin--space">
      <div className="loggin--space--mail">
        <label htmlFor="input--mail">Email</label>
        <input type="mail" id="input--mail" className="form-control" required></input>
      </div>
      <div className="loggin--space--password">
        <label htmlFor="input--password">Password</label>
        <input type="password" id="input--password" className="form-control" minLength="6" required></input>
        <small class="text-muted" style={{fontSize: "0.5em"}}>6 characters minimum.</small>
      </div>
      <div className="loggin--space--btn">
        <button className="btn btn-light">Log in</button>
      </div>
      <p style={{fontSize: "0.6em"}}>Not an account ? Time's to create <Link to="/subscription">one</Link></p>
    </LogginSpaceStyled>
  )
}

export default LogginSpace