import React from "react";
import "./YellowStatsStripe.scss";

class YellowStatsStripe extends React.Component {
  render() {
    const stats_numbers = this.props.stats_numbers.map((e, i) => {
      return (
        <div key={i}>
          <div>{e}</div>
        </div>
      );
    });
    const stats_text = this.props.stats_text.map((e, i) => {
      return (
        <div key={i}>
          <div>{e}</div>
        </div>
      );
    });
    const stats_descr = this.props.stats_descr.map((e, i) => {
      return (
        <div key={i}>
          <div>{e}</div>
        </div>
      );
    });

    return (
      <div id="section2">
        <div className="stat">
          <div className="stats_numbers">{stats_numbers[0]}</div>
          <div className="stats_text">{stats_text[0]}</div>
          <div className="stats_descr">{stats_descr[0]}</div>
        </div>

        <div className="stat">
          <div className="stats_numbers">{stats_numbers[1]}</div>
          <div className="stats_text">{stats_text[1]}</div>
          <div className="stats_descr">{stats_descr[1]}</div>
        </div>

        <div className="stat">
          <div className="stats_numbers">{stats_numbers[2]}</div>
          <div className="stats_text">{stats_text[2]}</div>
          <div className="stats_descr">{stats_descr[2]}</div>
        </div>
      </div>
    );
  }
}

export default YellowStatsStripe;
