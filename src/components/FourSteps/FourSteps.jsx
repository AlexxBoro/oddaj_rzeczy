import React from "react";
import { Link } from "react-router-dom";
import "./FourSteps.scss";

class FourSteps extends React.Component {
  render() {
    const fourSteps = [
      {
        title: "Wybierz rzeczy",
        icon: "far fa-lightbulb fa-2x",
        articles: "ubrania, zabawki, sprzęt i inne"
      },
      {
        title: "Spakuj je",
        icon: "fas fa-box-open fa-2x",
        articles: "skorzystaj z worków na śmieci"
      },
      {
        title: "Zdecyduj komu chcesz pomóc",
        icon: "fas fa-binoculars fa-2x",
        articles: "wybierz zaufane miejsce"
      },
      {
        title: "Zamów kuriera",
        icon: "fas fa-exchange-alt fa-2x",
        articles: "kurier przyjedzie w dogodnym terminie"
      }
    ];

    const boxesWithFourSteps = fourSteps.map((e, i) => {
      return (
        <div key={i} className="four-steps-container__box">
          <i className={e.icon} />
          <h1>{e.title}</h1>
          <p>{e.articles}</p>
        </div>
      );
    });

    return (
      <div id="four-steps" className="four-steps">
        <div className="four-steps-container">
          <div className="four-steps-container__title">
            Wystarczą 4 proste kroki
          </div>
          <div className="four-steps-container__decoration-container">
            <div className="four-steps-container__decoration" />
          </div>
          <div className="four-steps-container__boxes">
            {boxesWithFourSteps}
          </div>
          <Link className="four-steps-container__account-button" to="/register">
            załóż konto
          </Link>
        </div>
      </div>
    );
  }
}

export default FourSteps;
