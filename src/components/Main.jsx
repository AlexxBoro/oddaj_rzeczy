import React from "react";
import "./reset.scss";
import Header from "./Header/Header";
import YellowStatsStripe from "./YellowStatsStripe/YellowStatsStripe";
import FourSteps from "./FourSteps/FourSteps";
import AboutUs from "./AboutUs/AboutUs";
import Organisations from "./Organisations/Organisations";
import Contact from "./Contact/Contact";

class Main extends React.Component {
  state = {
    section5_org: [
      "Fundacjom",
      "Organizacjom pozarządowym",
      "Lokalnym zbiórkom"
    ]
  };

  render() {
    return (
      <>
        <Header />
        <YellowStatsStripe />
        <FourSteps />
        <AboutUs />
        <Organisations section5_org={this.state.section5_org} />
        <Contact />
      </>
    );
  }
}

export default Main;
