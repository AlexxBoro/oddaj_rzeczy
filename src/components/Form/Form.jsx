import React from "react";
import "./Form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormOne: false,
      showFormTwo: false,
      showFormThreeA: false,
      showFormThreeB: false,
      changeBackgroundColor: false,
      showFormFour: false,
      showFormFive: false,
      showFormSix: false,

      street: "",
      city: "",
      postalCode: "",
      phone: "",
      date: "",
      hour: "",
      additionalInfo: "",

      amountOfClothes: 0
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      hideFormOne: !this.state.hideFormOne,
      showFormTwo: !this.state.showFormTwo
    });
  }

  handleToggleThreeA(e) {
    e.preventDefault();
    this.setState({
      showFormTwo: !this.state.showFormTwo,
      showFormThreeA: !this.state.showFormThreeA,

      amountOfClothes: document.querySelector("#amountOfClothes").value
    });
  }

  handleToggleThreeB(e) {
    e.preventDefault();
    this.setState({
      showFormThreeA: !this.state.showFormThreeA,
      showFormThreeB: !this.state.showFormThreeB
    });
  }

  handleToggleFour(e) {
    e.preventDefault();
    this.setState({
      showFormThreeB: !this.state.showFormThreeB,
      showFormFour: !this.state.showFormFour
    });
  }

  handleToggleFive(e) {
    e.preventDefault();
    this.setState({
      showFormFour: !this.state.showFormFour,
      showFormFive: !this.state.showFormFive,

      street: document.querySelector("#street").value,
      city: document.querySelector("#city").value,
      postalCode: document.querySelector("#postalCode").value,
      phone: document.querySelector("#phone").value,
      date: document.querySelector("#date").value,
      hour: document.querySelector("#hour").value,
      additionalInfo: document.querySelector("#additionalInfo").value
    });
  }

  handleToggleSix(e) {
    e.preventDefault();
    this.setState({
      showFormFive: !this.state.showFormFive,
      showFormSix: !this.state.showFormSix
    });
  }

  handleBackToFirstPartOfForm(e) {
    e.preventDefault();
    this.setState({
      hideFormOne: !this.state.hideFormOne,
      showFormTwo: !this.state.showFormTwo
    });
  }

  handleBackToSecondPartOfForm(e) {
    e.preventDefault();
    this.setState({
      showFormTwo: !this.state.showFormTwo,
      showFormThreeA: !this.state.showFormThreeA
    });
  }

  handleBackToThreeA(e) {
    e.preventDefault();
    this.setState({
      showFormThreeA: !this.state.showFormThreeA,
      showFormThreeB: !this.state.showFormThreeB
    });
  }

  handleBackToThreeB(e) {
    e.preventDefault();
    this.setState({
      showFormThreeB: !this.state.showFormThreeB,
      showFormFour: !this.state.showFormFour
    });
  }

  handleBackToFour(e) {
    e.preventDefault();
    this.setState({
      showFormFour: !this.state.showFormFour,
      showFormFive: !this.state.showFormFive
    });
  }

  changeBackgroundColor(e) {
    e.preventDefault();
    if (this.state.changeBackgroundColor === false) {
      this.setState({
        changeBackgroundColor: true
      });
    } else if (this.state.changeBackgroundColor === true) {
      this.setState({
        changeBackgroundColor: false
      });
    }
  }

  render() {
    const { hideFormOne } = this.state;
    const { showFormTwo } = this.state;
    const { showFormThreeA } = this.state;
    const { showFormThreeB } = this.state;
    const { changeBackgroundColor } = this.state;
    const { showFormFour } = this.state;
    const { showFormFive } = this.state;
    const { showFormSix } = this.state;

    return (
      <div className="form-content-container">
        <form>
            
          {/* 1/6 */}

          <div className={`form-part-one ${hideFormOne ? "hide-element" : ""}`}>
            <div className="alert">
              <p className="alert__important">Ważne!</p>
              <p className="alert__info">
                Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu
                będziemy wiedzieć komu najlepiej je przekazać.
              </p>
            </div>

            <div className="form-part-one__title">Zaznacz co chcesz oddac:</div>

            <div className="form-part-one__item">
              <label className="form-container" htmlFor="clothes">
                ubrania, które nadają się do ponownego użycia
                <input type="checkbox" name="clothes" id="clothes" />
                <span className="__input" />
              </label>
            </div>

            <div className="form-part-one__item">
              <label className="form-container" htmlFor="clothes-bin">
                ubrania do wyrzucenia
                <input type="checkbox" name="clothes-bin" id="clothes-bin" />
                <span className="__input" />
              </label>
            </div>

            <div className="form-part-one__item">
              <label className="form-container" htmlFor="toys">
                zabawki
                <input type="checkbox" name="toys" id="toys" />
                <span className="__input" />
              </label>
            </div>

            <div className="form-part-one__item">
              <label className="form-container" htmlFor="books">
                książki
                <input type="checkbox" name="books" id="books" />
                <span className="__input" />
              </label>
            </div>

            <div className="form-part-one__item">
              <label className="form-container" htmlFor="other">
                inne
                <input type="checkbox" name="other" id="other" />
                <span className="__input" />
              </label>
            </div>

            <button
              className="form-part-one__button"
              onClick={e => this.handleToggle(e)}
            >
              Dalej
            </button>
          </div>

          {/* 2/6 */}

          <div
            className={`form-part-two-container ${
              showFormTwo ? "show-element" : ""
            }`}
          >
            <div className="form-part-two">
              <div className="alert">
                <p className="alert__important">Ważne!</p>
                <p className="alert__info">
                  Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                  instrukcję jak zapakować rzeczy znajdziesz{" "}
                  <a href="#">TUTAJ</a>
                </p>
              </div>
              <div className="form-part-two__title">
                Podaj liczbę 60 l worków, w które spakowałeś rzeczy:
              </div>

              <div>
                <label htmlFor="worki" className="select-label">
                  Liczba 60 l worków:
                </label>
                <select name="worki" id="amountOfClothes">
                  <option value="0">- wybierz -</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value=">10">więcej</option>
                </select>
              </div>

              <div className="form-part-two__button-container">
                <button
                  className="form-part-two__button"
                  onClick={e => this.handleBackToFirstPartOfForm(e)}
                >
                  Wstecz
                </button>
                <button
                  className="form-part-two__button"
                  onClick={e => this.handleToggleThreeA(e)}
                >
                  Dalej
                </button>
              </div>
            </div>
          </div>

          {/* 3a/6 */}

          <div
            className={`form-part-3a-container ${
              showFormThreeA ? "show-element" : ""
            }`}
          >
            <div className="form-part-3a">
              <div className="alert">
                <p className="alert__important">Ważne!</p>
                <p className="alert__info">
                  Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę tej
                  organizacji w wyszukiwarce. Możesz też filtrować organizacje
                  po ich lokalizacji, bądź celu ich pomocy.
                </p>
              </div>

              <div className="form-part-3a__title">Lokalizacja:</div>

              <select name="lokalizacja" id="lokalizacja">
                <option value="0">- wybierz -</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Poznań">Poznań</option>
                <option value="Katowice">Katowice</option>
                <option value="Ustrzyki Dolne">Ustrzyki Dolne</option>
                <option value="Łeba">Łeba</option>
                <option value="Zakopane">Zakopane</option>
                <option value="Helsinki">Helsinki</option>
              </select>

              <div className="form-part-3a__title--smaller">
                Komu chcesz pomóc?
              </div>

              <div className="form-part-3a__button-container--for-small-buttons">
                <button
                  className={`form-part-3a__button--small-buttons ${
                    changeBackgroundColor
                      ? "change-background-color-to-yellow"
                      : ""
                  }`}
                  onClick={e => this.changeBackgroundColor(e)}
                >
                  dzieciom
                </button>
                <button
                  className={`form-part-3a__button--small-buttons ${
                    changeBackgroundColor
                      ? "change-background-color-to-yellow"
                      : ""
                  }`}
                  onClick={e => this.changeBackgroundColor(e)}
                >
                  samotnym matkom
                </button>
                <button className="form-part-3a__button--small-buttons">
                  bezdomnym
                </button>
              </div>

              <div className="form-part-3a__button-container--for-small-buttons">
                <button className="form-part-3a__button--small-buttons">
                  niepełnosprawnym
                </button>
                <button className="form-part-3a__button--small-buttons">
                  osobom starszym
                </button>
              </div>

              <div className="form-part-3a__title--smaller">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </div>
              <input type="textarea" />

              <div className="form-part-3a__button-container">
                <button
                  className="form-part-3a__button"
                  onClick={e => this.handleBackToSecondPartOfForm(e)}
                >
                  Wstecz
                </button>
                <button
                  className="form-part-3a__button"
                  onClick={e => this.handleToggleThreeB(e)}
                >
                  Szukaj
                </button>
              </div>
            </div>
          </div>

          {/* 3b/6 */}

          <div
            className={`form-part-3b-container ${
              showFormThreeB ? "show-element" : ""
            }`}
          >
            <div className="form-part-3b">
              <div className="alert">
                <p className="alert__important">Ważne!</p>
                <p className="alert__info">
                  Na podstwaie Twoich kryteriów oraz rzeczy, które masz do
                  oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz
                  jedną, do której trafi Twoja przesyłka.
                </p>
              </div>

              <div className="form-part-3b__title">
                Wybierz organizację, której chcesz pomóc:
              </div>

              <div className="information-container">
                <hr align="left" />
                <label
                  className="form-container-3b"
                  htmlFor="fundacjadbam-o-zdrowie"
                >
                  <input
                    type="checkbox"
                    name="fundacjadbam-o-zdrowie"
                    id="fundacjadbam-o-zdrowie"
                  />
                  <span className="__input" />
                </label>
                <div style={{ marginLeft: "3em" }}>
                  <p className="nazwa_org">Fundacja "Dbam o Zdrowie"</p>
                  <p className="cel_org">
                    Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                    życiowej.
                  </p>
                </div>
                <hr align="left" />
              </div>

              <div className="information-container">
                <label
                  className="form-container-3b"
                  htmlFor="fundacja-dla-dzieci"
                >
                  <input
                    type="checkbox"
                    name="fundacja-dla-dzieci"
                    id="fundacja-dla-dzieci"
                  />
                  <span className="__input" />
                </label>
                <div style={{ marginLeft: "3em" }}>
                  <p className="nazwa_org">Fundacja "Dla dzieci"</p>
                  <p className="cel_org">
                    Cel i misja: Pomoc dzieciom z ubogich rodzin.
                  </p>
                </div>
                <hr align="left" />
              </div>

              <div className="form-part-3b__button-container">
                <button
                  className="form-part-3b__button"
                  onClick={e => this.handleBackToThreeA(e)}
                >
                  Wstecz
                </button>
                <button
                  className="form-part-3b__button"
                  onClick={e => this.handleToggleFour(e)}
                >
                  Dalej
                </button>
              </div>
            </div>
          </div>

          {/* 4/6 */}
          <div
            className={`form-part-4-container ${
              showFormFour ? "show-element" : ""
            }`}
          >
            <div className="form-part-4">
              <div className="alert">
                <p className="alert__important">Ważne!</p>
                <p className="alert__info">
                  Podaj adres oraz termin odbioru rzeczy.
                </p>
              </div>

              <div className="form-part-4__title">
                Podaj adres oraz termin odbioru rzeczy przez kuriera
              </div>
              <div className="form-part-4__details">
                <div className="form-part-4__details-address">
                  <h1>Adres odbioru</h1>
                  <div className="form-part-4__item">
                    <label htmlFor="street">Ulica</label>
                    <input type="textarea" name="street" id="street" />
                  </div>
                  <div className="form-part-4__item">
                    <label htmlFor="city">Miasto</label>
                    <input type="textarea" name="city" id="city" />
                  </div>
                  <div className="form-part-4__item">
                    <label htmlFor="postal-code">Kod pocztowy</label>
                    <input type="textarea" name="postal-code" id="postalCode" />
                  </div>
                  <div className="form-part-4__item">
                    <label htmlFor="phone">Numer telefonu</label>
                    <input type="textarea" name="phone" id="phone" />
                  </div>
                </div>
                <div className="form-part-4__details-date">
                  <h1>Termin odbioru</h1>
                  <div className="form-part-4__item">
                    <label htmlFor="date">Data</label>
                    <input type="textarea" name="date" id="date" />
                  </div>
                  <div className="form-part-4__item">
                    <label htmlFor="hour">Godzina</label>
                    <input type="textarea" name="hour" id="hour" />
                  </div>
                  <div className="form-part-4__item">
                    <label htmlFor="additional-info">Uwagi dla kuriera</label>
                    <input
                      style={{ height: "7em" }}
                      type="textarea"
                      name="additional-info"
                      id="additionalInfo"
                    />
                  </div>
                </div>
              </div>

              <div className="form-part-4__button-container">
                <button
                  className="form-part-4__button"
                  onClick={e => this.handleBackToThreeB(e)}
                >
                  Wstecz
                </button>
                <button
                  className="form-part-4__button"
                  onClick={e => this.handleToggleFive(e)}
                >
                  Dalej
                </button>
              </div>
            </div>
          </div>

          {/* 5/6 */}

          <div
            className={`form-part-5-container ${
              showFormFive ? "show-element" : ""
            }`}
          >
            <div className="form-part-5">
              <div className="form-part-5__title">
                Podsumowanie Twojej darowizny:
              </div>

              <div className="form-part-5__details--upper">
                <div className="form-part-5__details-summary">
                  <h1>Oddajesz:</h1>
                  <div className="form-part-5__summary">
                    <div>{this.state.amountOfClothes} worki/ów rzeczy</div>
                  </div>
                </div>
              </div>

              <div className="form-part-5__details">
                <div className="form-part-5__details-address">
                  <h1>Adres odbioru</h1>
                  <div className="form-part-5__item">
                    <div>Ulica:</div>
                    <div>{this.state.street}</div>
                  </div>
                  <div className="form-part-5__item">
                    <div>Miasto:</div>
                    <div>{this.state.city}</div>
                  </div>
                  <div className="form-part-5__item">
                    <div>Kod pocztowy:</div>
                    <div>{this.state.postalCode}</div>
                  </div>
                  <div className="form-part-5__item">
                    <div>Numer telefonu:</div>
                    <div>{this.state.phone}</div>
                  </div>
                </div>
                <div className="form-part-5__details-date">
                  <h1>Termin odbioru</h1>
                  <div className="form-part-5__item">
                    <div>Data:</div>
                    <div>{this.state.date}</div>
                  </div>
                  <div className="form-part-5__item">
                    <div>Godzina:</div>
                    <div>{this.state.hour}</div>
                  </div>
                  <div className="form-part-5__item">
                    <div>Uwagi dla kuriera:</div>
                    <div>{this.state.additionalInfo}</div>
                  </div>
                </div>
              </div>

              <div className="form-part-5__button-container">
                <button
                  className="form-part-5__button"
                  onClick={e => this.handleBackToFour(e)}
                >
                  Wstecz
                </button>
                <button
                  className="form-part-5__button"
                  onClick={e => this.handleToggleSix(e)}
                >
                  Potwierdzam
                </button>
              </div>
            </div>
          </div>

          {/* 6/6 */}
          <div
            className={`form-part-6-container ${
              showFormSix ? "show-element" : ""
            }`}
          >
            <div className="form-part-6">
              <div className="form-part-6__title">
                <p>Dziękujemy za przesłanie formularza.</p>
                <p>Na maila prześlemy wszelkie informacje o odbiorze.</p>
              </div>

              <div className="form-part-6__decoration-container">
                <div className="form-part-6__decoration" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
