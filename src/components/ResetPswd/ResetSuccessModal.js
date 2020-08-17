import React from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import ModalStyled from "../../style/LogoutModalStyled.style";

function ResetSuccessModal(props) {
  const [data, setData] = React.useState({
    redirectSuccess: false
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        redirectSuccess: true
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (data.redirectSuccess) return <Redirect to="/"></Redirect>;

  return ReactDOM.createPortal(
    <ModalStyled className="modal--logout">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{props.updateMessage}</h3>
        </div>
        <div className="modal-body">
          You will be redirected in 5s, to the log in page and if not, click on the
          button.
        </div>
        <div className="modal-footer">
          <Link to="/" className="btn btn-primary btn-block">
            Log in
          </Link>
        </div>
      </div>
    </ModalStyled>,
    document.querySelector("body")
  );
}

export default ResetSuccessModal;
