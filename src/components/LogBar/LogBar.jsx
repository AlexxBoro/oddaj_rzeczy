import React from "react";
import "./Logbar.scss";
import { Link } from "react-router-dom";

class LogBar extends React.Component {
  render() {
    return (
      <nav className="log-buttons">
        <Link to="/login">
          <div className="log-buttons__element">Zaloguj się</div>
        </Link>
        <Link to="/register">
          <div className="log-buttons__element--account">Załóż konto</div>
        </Link>
      </nav>
    );
  }
}

export default LogBar;
