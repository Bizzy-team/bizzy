import React, {useState} from "react";
import {IntroductionLogginSpace, LogginSpaceStyled} from "../../style/LogginSpaceStyled.style";

function SigninSpace() {
  const pswd = React.createRef(null);
  const checkPswd = React.createRef(null);
  const [data, setData] = useState({
    inputError: false
  })

  function checkPassword() {
    console.log(pswd.current.value);
    console.log(checkPswd.current.value);
    if (pswd.current.value !== checkPswd.current.value) {
      const newState = {...data};
      newState.inputError = true;

      setData(newState);
    }
  }

  return (
    <React.Fragment>
      <IntroductionLogginSpace className="introduction">
        <h1>Welcome,</h1>
        <p>It's time to register and share your mood.</p>
      </IntroductionLogginSpace>
      <LogginSpaceStyled className="loggin--space">
        <div className="loggin--space--username">
          <input type="text" id="input--username" placeholder="Username" required></input>
        </div>
        <div className="loggin--space--mail">
          <input type="mail" id="input--mail" placeholder="Emaill" required></input>
        </div>
        <div className="loggin--space--password">
          <input
            type="password"
            id="input--password"
            minLength="6"
            placeholder="Password"
            ref={pswd}
            required
          ></input>
        </div>
        <div className="loggin--space--confirm--password">
          <input
            type="password"
            minLength="6"
            placeholder="Confirm Password"
            ref={checkPswd}
            required
          ></input>
        </div>
        <p>
          <small className="text-muted" style={{ fontSize: "0.5em" }}>
            6 characters minimum.
          </small>
        </p>
        {
          data.inputError && (
				    <p style={{margin: "0", color: "red"}}>
              <small>
                Confirm password incorrect
              </small>
            </p>
          )
        }
        <div className="loggin--space--sign--btn">
          <button onClick={() => checkPassword()}>Sign in</button>
        </div>
      </LogginSpaceStyled>
    </React.Fragment>
  );
}

export default SigninSpace;
