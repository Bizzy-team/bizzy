import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ModalStyled from "../../style/LogoutModalStyled.style";

function LogoutModal(props) {
  return(
    ReactDOM.createPortal(
      <ModalStyled>
        <div className="modal-content">
          <div className="modal-header"><h4>Logout <i className="fa fa-lock"></i></h4></div>
          <div className="modal-body"><i className="fa fa-question-circle"></i> Are you sure you want to log-off?</div>
          <div className="modal-footer"><Link to="/" className="btn btn-primary btn-block" onClick={() => props.clearSession()}>Logout</Link></div>
        </div>
      </ModalStyled>,
      document.querySelector("body")
    )
  )
};

export default LogoutModal;