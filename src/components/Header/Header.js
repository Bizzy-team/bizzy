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
            <p onClick={props.switchPage}>Sign in</p>
          </div>
          <div className="buttons--sign--up">
            <p id="sign--up--btn" onClick={props.switchPage}>Sign up</p>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
