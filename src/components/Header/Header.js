import React from "react";
import logo from "../../img/bizzy.png";
import HeaderStyled from "../../style/HeaderStyled.style";

function Header(props) {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" className="logo--app"></img>
      {/* <div className="header--options"> */}
        {props.option}
      {/* </div> */}
    </HeaderStyled>
  );
}

export default Header;
