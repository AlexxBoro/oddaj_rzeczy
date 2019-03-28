import React from "react";
import { Link } from "react-router-dom";
import "./FormHeader.scss";

class FormHeader extends React.Component {
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

    return (
      <div className="form-header-container">
        <div className="form-header-container__navigation">
          <div
            onClick={e => this.showHiddenMenu(e)}
            className="form-header-container__navigation-user"
          >
            Witaj NAME
            <div
              className={`form-header-container__hidden-menu ${
                showHiddenMenu ? "form-header-container__hidden-menu--show" : ""
              }`}
            >
              <li>Profil</li>
              <li>Ustawienia</li>
              <li>Moje zbiórki</li>
              <li>Wyloguj</li>
            </div>
          </div>
          <i
            onClick={this.showHiddenMenu}
            className="form-header-container__navigation-icon fas fa-cogs"
          />
        </div>

        <Link to="/" className="form-header-container__navigation">
          Powrót na stronę główną
        </Link>

        <div className="form-header-container__title">
          Oddaj zbędne rzeczy
          <br />
          POTRZEBUJĄCYM <br />
        </div>

        <div className="form-header-container__decoration-container">
          <div className="form-header-container__decoration" />
        </div>

        <div className="form-header-container__subtitle">
          Wystarczą 4 proste kroki:
          <br />
        </div>

        <div className="form-header-container__squares">
          <div className="form-header-container__squares--box">
            <div className="form-header-container__squares--inside">
              <p className="form-header-container__squares--number">1</p>
              <p className="form-header-container__squares--text">
                Wybierz
                <br /> rzeczy
              </p>
            </div>
          </div>
          <div className="form-header-container__squares--box">
            <div className="form-header-container__squares--inside">
              <p className="form-header-container__squares--number">2</p>
              <p className="form-header-container__squares--text">
                Spakuj je
                <br /> w worki
              </p>
            </div>
          </div>
          <div className="form-header-container__squares--box">
            <div className="form-header-container__squares--inside">
              <p className="form-header-container__squares--number">3</p>
              <p className="form-header-container__squares--text">
                Wybierz
                <br />
                fundację
              </p>
            </div>
          </div>
          <div className="form-header-container__squares--box">
            <div className="form-header-container__squares--inside">
              <p className="form-header-container__squares--number">4</p>
              <p className="form-header-container__squares--text">
                Zamów <br />
                kuriera
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormHeader;
