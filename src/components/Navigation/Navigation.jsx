import React from "react";
import "./Navigation.scss";
import { HashLink as Link } from "react-router-hash-link";

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHiddenMenu: false
    };
  }

  showHiddenMenu = () => {
    if (this.state.showHiddenMenu === false) {
      this.setState({
        showHiddenMenu: true
      });
    } else if (this.state.showHiddenMenu === true) {
      this.setState({
        showHiddenMenu: false
      });
    }
  };

  render() {
    const { showHiddenMenu } = this.state;
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
        <button onClick={e => this.showHiddenMenu(e)} className="hamburger">
          <nav id="hidden-menu" className={`nav-column-hidden ${showHiddenMenu ? 'nav-column-show': ''}`}>
              {navigationMap}
          </nav>
        </button>
        
        
      </>
    );
  }
}

export default Navigation;
