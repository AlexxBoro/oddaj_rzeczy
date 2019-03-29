import React from "react";
import "./YellowStatsStripe.scss";

class YellowStatsStripe extends React.Component {
  render() {
    const stats = [
      {
        number: "10",
        text: "oddanych worków",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        number: "7",
        text: "wspartych organizacji",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        number: "5",
        text: "zorganizownych zbiórek",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    const boxesWithStats = stats.map((e, i) => {
      return (
        <div className="stats" key={i}>
          <p className="stats__item stats__item--number">{e.number}</p>
          <p className="stats__item stats__item--text">{e.text}</p>
          <p className="stats__item stats__item--description">
            {e.description}
          </p>
        </div>
      );
    });

    return <div className="stats-container">{boxesWithStats}</div>;
  }
}

export default YellowStatsStripe;
