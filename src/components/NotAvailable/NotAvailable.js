import React from "react";
import NotAvailableStyled from "../../style/NotAvailableStyled.style";

function NotAvailable({ content }) {
  return (
    <NotAvailableStyled as="main">
      <h1>{content}</h1>
    </NotAvailableStyled>
  )
};

export default NotAvailable;