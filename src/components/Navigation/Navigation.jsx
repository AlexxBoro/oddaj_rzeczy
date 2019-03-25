import React from "react";
import "./Navigation.scss";
import { HashLink as Link } from "react-router-hash-link";

class Navigation extends React.Component {
  showHiddenMenu = e => {
    if (
      document.querySelector("#hidden-menu").className === "nav-column-hidden"
    ) {
      document
        .querySelector("#hidden-menu")
        .classList.remove("nav-column-hidden");
      document.querySelector("#hidden-menu").classList.add("nav-column-show");
    } else if (
      document.querySelector("#hidden-menu").className === "nav-column-show"
    ) {
      document
        .querySelector("#hidden-menu")
        .classList.remove("nav-column-show");
      document.querySelector("#hidden-menu").classList.add("nav-column-hidden");
    }
  };

  render() {
    const navigation = [
      { name: "O co chodzi?", id: "four-steps" },
      { name: "O nas", id: "about-us" },
      { name: "Fundacje i organizacje", id: "organisations" },
      { name: "Kontakt", id: "contact" }
    ];

    const navigationMap = navigation.map((e, i) => {
      return (
        <Link smooth to={`#${e.id}`} key={i} className="nav__element">
          {e.name}
        </Link>
      );
    });

    return (
      <>
        <nav className="nav">{navigationMap}</nav>
        <button onClick={this.showHiddenMenu} className="hamburger" />
        <nav id="hidden-menu" className="nav-column-hidden">
          {navigationMap}
        </nav>
      </>
    );
  }
}

export default Navigation;
