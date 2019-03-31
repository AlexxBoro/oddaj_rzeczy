import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onMessageChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault(event);
  };

  render() {
    return (
      <div id="contact" className="contact">
        <div className="contact__form-container">
          <div className="contact__form">
            <p className="contact__form__title">Skontaktuj się z nami</p>
            <div className="contact__form__decoration" />

            <form className="contact-form">
              <p className="contact__form__subtitle">formularz kontaktowy</p>
              <div className="contact-form__name-and-email">
                <input
                  className="contact-form__name-and-email--name"
                  type="text"
                  placeholder="Imię"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
                <input
                  className="contact-form__name-and-email--email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <br />
              </div>

              <input
                className="contact-form__message"
                type="text"
                placeholder="Wiadomość"
                value={this.state.message}
                onChange={this.onMessageChange}
              />
              <br />

              <div className="contact-form__button-container">
                <button
                  className="contact-form__button-container__button"
                  onSubmit={this.onFormSubmit}
                >
                  Wyslij
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <p className="footer__signature">
            Lorem ipsum lorem ipsum lorem lorem.
          </p>
          <div className="footer__logos">
            <a href="https://www.facebook.com/" target="blank">
              <i className="fab fa-facebook fa-2x footer__icon" />
            </a>
            <a href="https://twitter.com/?lang=en" target="blank">
              <i className="fab fa-twitter-square fa-2x footer__icon" />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <i className="fab fa-linkedin fa-2x footer__icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
