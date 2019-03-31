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
        <div onClick={this.handleClick} className="organisations__options-container__option" key={i}>
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
                <div className="informacje1">
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Fundacja "Dbam o Zdrowie"</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc osobom znajdującym się w trudnej
                      sytuacji życiowej.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Fundacja "Dla dzieci"</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dzieciom z ubogich rodzin.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Fundacja "Bez domu"</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dla osób nie posiadających miejsca
                      zamieszkania.
                    </p>
                    <hr align="left" />
                  </div>
                </div>
                <div className="informacje2">
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">
                      ubrania, jedzenie, sprzęt AGD, meble, zabawki
                    </p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">
                      ubrania, meble, zabawki
                    </p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">
                      ubrania, jedzenie, ciepłe koce
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>

            <div id="pozarzadowe" className="hidden">
              <div className="organisations__information-container">
                <div className="informacje1">
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Organizacja 1</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc osobom znajdującym się w trudnej
                      sytuacji życiowej.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Organizacja 2</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dzieciom z ubogich rodzin.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Organizacja 3</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dla osób nie posiadających miejsca
                      zamieszkania.
                    </p>
                    <hr align="left" />
                  </div>
                </div>
                <div className="informacje2">
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">lorem, lorem, lorem</p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">
                      lorem, lorem, lorem, lorem
                    </p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">lorem, lorem</p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>

            <div id="lokalne" className="hidden">
              <div className="organisations__information-container">
                <div className="informacje1">
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Lokalna zbiórka 1</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc osobom znajdującym się w trudnej
                      sytuacji życiowej.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Lokalna zbiórka 2</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dzieciom z ubogich rodzin.
                    </p>
                    <hr align="left" />
                  </div>
                  <div className="informacje1_kontenerek">
                    <p className="nazwa_org">Lokalna zbiórka 3</p>
                    <p className="cel_org">
                      Cel i misja: Pomoc dla osób nie posiadających miejsca
                      zamieszkania.
                    </p>
                    <hr align="left" />
                  </div>
                </div>
                <div className="informacje2">
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">
                      lorem, lorem, lorem, lorem
                    </p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">lorem, lorem</p>
                    <hr />
                  </div>
                  <div className="informacje2_kontenerek">
                    <p className="informacje2_artykuly">lorem, lorem</p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>

          </div>
    );
  }
}

export default Organisations;
