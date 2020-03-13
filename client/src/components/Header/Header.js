import React from "react";
import logo from "../../img/bizzy.png";
import HeaderStyled from "../../style/HeaderStyled.style";

function Header() {
  return (
    <HeaderStyled as="header">
      <img src={logo} alt="logo"></img>
    </HeaderStyled>
  );
}

export default Header;
