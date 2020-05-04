import React from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "../../style/FeedStyled.style";

function Footer() {
  return (
    <FooterStyle as="footer">
      <div className="footer--elements">
        <Link to="/feed" style={{ marginLeft: "8%" }}>
          <i className="fas fa-home"></i>
        </Link>
        <i className="fas fa-bell"></i>
        <i className="far fa-comments"></i>
      </div>
    </FooterStyle>
  );
}

export default Footer;
