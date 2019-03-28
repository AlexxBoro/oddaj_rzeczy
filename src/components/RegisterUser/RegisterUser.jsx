import React from "react";
// import {Link} from 'react-router-dom';
import "./RegisterUser.scss";
import LogBar from "../LogBar/LogBar";
import Navigation from "../Navigation/Navigation";

class RegisterUser extends React.Component {
  state = {
    email: "",
    password: "",
    repeat_password: ""
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
      repeat_password: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <LogBar />

        <Navigation />

        <div class="rej_form_container">
          <div className="rej_tytul">Załóż konto</div>

          <div className="znaczek_container_rej">
            <div className="znaczek_rej" />
          </div>

          <form>
            <div>
              <input
                className="input_form_rej"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </div>
            <div>
              <input
                className="input_form_rej"
                type="password"
                placeholder="Hasło"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </div>
            <div>
              <input
                className="input_form_rej"
                type="password"
                placeholder="Powtórz hasło"
                value={this.state.repeat_password}
                onChange={this.onRepeatPasswordChange}
              />
            </div>
            <div>
              <div className="button_rej">
                <button
                  style={{ backgroundColor: "white", color: "rgb(82, 80, 80)" }}
                  onSubmit={this.onFormSubmit}
                >
                  Załóż konto
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterUser;
