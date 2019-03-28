import React from "react";
import "./Header.scss";
import "../Navigation/Navigation.scss";
import LogBar from "../LogBar/LogBar";
import Navigation from "../Navigation/Navigation";
import HeaderOptions from "../HeaderOptions/HeaderOptions";

class Header extends React.Component {
  render() {
    return (
      <>
        <div id="header">
          <LogBar />

          <Navigation />

          <div className="title">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          </div>

          <div className="decoration-container">
            <div className="decoration" />
          </div>

          <HeaderOptions />
        </div>
      </>
    );
  }
}

export default Header;
