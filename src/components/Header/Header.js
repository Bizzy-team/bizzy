import React from "react";
import logo from "../../img/bizzy.png";
import HeaderStyled from "../../style/HeaderStyled.style";

function Header(props) {
  return (
    <HeaderStyled as="header">
      <div>
        <img src={logo} alt="logo"></img>
        <div className="buttons--sign">
          <div className="buttons--sign--in">
            <button onClick={props.switchPage}>Sign in</button>
          </div>
          <div className="buttons--sign--up">
            <button id="sign--up--btn" onClick={props.switchPage}>Sign up</button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
