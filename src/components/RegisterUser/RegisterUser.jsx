import React from "react";
import { Link } from "react-router-dom";
import "./RegisterUser.scss";
import LogBar from "../LogBar/LogBar";

class RegisterUser extends React.Component {
  state = {
    email: "",
    password: "",
    repeatPassword: ""
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onRepeatPasswordChange = event => {
    this.setState({
      repeatPassword: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault(event);
  };

  render() {
    return (
      <>
        <LogBar />

        <Link to="/" className="register-form-back-to-main-page">
          Powrót na stronę główną
        </Link>

        <div class="register-form-container">
          <div className="register-form-container__title">Załóż konto</div>

          <div className="register-form-container__decoration-container">
            <div className="register-form-container__decoration" />
          </div>

          <form>
            <div>
              <input
                className="register-form-container__input"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </div>
            <div>
              <input
                className="register-form-container__input"
                type="password"
                placeholder="Hasło"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </div>
            <div>
              <input
                className="register-form-container__input"
                type="password"
                placeholder="Powtórz hasło"
                value={this.state.repeatPassword}
                onChange={this.onRepeatPasswordChange}
              />
            </div>
            <div>
              <div className="register-form-container__button">
                <button onSubmit={this.onFormSubmit}>Załóż konto</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterUser;
