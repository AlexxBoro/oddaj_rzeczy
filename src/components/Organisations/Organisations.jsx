import React from "react";
import "./Organisations.scss";

class Organisations extends React.Component {
  handleClick = e => {
    if (e.target.innerText === "Fundacjom") {
      document.querySelector("#fundacje").classList.remove("hidden");
      document.querySelector("#pozarzadowe").classList.add("hidden");
      document.querySelector("#lokalne").classList.add("hidden");
    } else if (e.target.innerText === "Organizacjom pozarządowym") {
      document.querySelector("#fundacje").classList.add("hidden");
      document.querySelector("#pozarzadowe").classList.remove("hidden");
      document.querySelector("#lokalne").classList.add("hidden");
    } else if (e.target.innerText === "Lokalnym zbiórkom") {
      document.querySelector("#fundacje").classList.add("hidden");
      document.querySelector("#pozarzadowe").classList.add("hidden");
      document.querySelector("#lokalne").classList.remove("hidden");
    }
  };

  render() {
    const organisations = [
      "Fundacjom",
      "Organizacjom pozarządowym",
      "Lokalnym zbiórkom"
    ];

    const orgs = organisations.map((e, i) => {
      return (
        <div
          onClick={this.handleClick}
          className="organisations__options-container__option"
          key={i}
        >
          {e}
        </div>
      );
    });

    return (
      <div id="organisations" className="organisations">
        <div className="organisations__title">Komu pomagamy?</div>

        <div className="organisations__decoration" />

        <div className="organisations__options-container">{orgs}</div>

        <div className="organisations__text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </div>

        <div id="fundacje">
          <div className="organisations__information-container">
            <div className="organisations__names">
              <p className="organisations__names--title">
                Fundacja "Dbam o Zdrowie"
              </p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">
                Fundacja "Dla dzieci"
              </p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dzieciom z ubogich rodzin.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">Fundacja "Bez domu"</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
              </p>
              <hr align="left" />
            </div>
            <div className="organisations__articles">
              <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
              <hr />

              <p>ubrania, meble, zabawki</p>
              <hr />

              <p>ubrania, jedzenie, ciepłe koce</p>
              <hr />
            </div>
          </div>
        </div>

        <div id="pozarzadowe" className="hidden">
          <div className="organisations__information-container">
            <div className="organisations__names">
              <p className="organisations__names--title">Organizacja 1</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">Organizacja 2</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dzieciom z ubogich rodzin.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">Organizacja 3</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
              </p>
              <hr align="left" />
            </div>
            <div className="organisations__articles">
              <p>lorem, lorem, lorem</p>
              <hr />

              <p>lorem, lorem, lorem, lorem</p>
              <hr />

              <p>lorem, lorem</p>
              <hr />
            </div>
          </div>
        </div>

        <div id="lokalne" className="hidden">
          <div className="organisations__information-container">
            <div className="organisations__names">
              <p className="organisations__names--title">Lokalna zbiórka 1</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">Lokalna zbiórka 2</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dzieciom z ubogich rodzin.
              </p>
              <hr align="left" />

              <p className="organisations__names--title">Lokalna zbiórka 3</p>
              <p className="organisations__names--purpose">
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
              </p>
              <hr align="left" />
            </div>
            <div className="organisations__articles">
              <p>lorem, lorem, lorem, lorem</p>
              <hr />

              <p>lorem, lorem</p>
              <hr />

              <p>lorem, lorem</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organisations;
