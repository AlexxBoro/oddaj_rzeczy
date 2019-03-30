import React from "react";
import "./Organisations.scss";

class Organisations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fundationsAndLocalAreHidden: false
    };
  }

  // handleClick = e => {
  //   if (e.target.innerText === "Fundacjom") {
  //     document.querySelector("#fundacje").classList.remove("hidden");
  //     document.querySelector("#pozarzadowe").classList.add("hidden");
  //     document.querySelector("#lokalne").classList.add("hidden");
  //   } else if (e.target.innerText === "Organizacjom pozarządowym") {
  //     document.querySelector("#fundacje").classList.add("hidden");
  //     document.querySelector("#pozarzadowe").classList.remove("hidden");
  //     document.querySelector("#lokalne").classList.add("hidden");
  //   } else if (e.target.innerText === "Lokalnym zbiórkom") {
  //     document.querySelector("#fundacje").classList.add("hidden");
  //     document.querySelector("#pozarzadowe").classList.add("hidden");
  //     document.querySelector("#lokalne").classList.remove("hidden");
  //   }
  // };

  handleClickOrganisations(e) {
    this.setState({
      fundationsAndLocalAreHidden: !this.state.fundationsAndLocalAreHidden
    });
  }

  render() {
    const { fundationsAndLocalAreHidden } = this.state;
    // const organisations = ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]

    // const orgs = organisations.map((e, i) => {
    //   return (
    //     <div onClick={this.handleClick} className="opcja_section5" key={i}>
    //       {e}
    //     </div>
    //   );
    // });

    return (
      

      <div id="organisations" className="organisations">

        <div className="section5_container">
          <div className="title_section5">Komu pomagamy?</div>

          <div className="znaczek_section5" />

          <div className="opcje_section5">
              <div onClick={this.handleClickFundations} className="opcja_section5">
              Fundacjom
            </div>
            <div onClick={e => this.handleClickOrganisations(e)} className="opcja_section5">
              Organizacjom pozarządowym
            </div>
            <div onClick={e => this.handleClickLocal(e)} className="opcja_section5">
              Lokalnym zbiórkom
            </div>
          </div>

          <div className="text_section5">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </div>

          <div className="organizacje" >
            <div id="fundacje" className={`${fundationsAndLocalAreHidden ? 'hidden' : '' }`}>
              <div className="informacje">
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

            <div id="pozarzadowe" className="hidden" className={`${fundationsAndLocalAreHidden ? '' : 'visible' }`}>
              <div className="informacje">
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

            <div id="lokalne" className="hidden" >
              <div className="informacje">
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
        </div>
      </div>
    );
  }
}

export default Organisations;
