import React from "react";
import "./reset.scss";
import Header from "./Header/Header";
import YellowStatsStripe from "./YellowStatsStripe/YellowStatsStripe";
import FourSteps from "./FourSteps/FourSteps";
import AboutUs from "./AboutUs/AboutUs";
import Organisations from "./Organisations/Organisations";
import Contact from "./Contact/Contact";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <YellowStatsStripe />
        <FourSteps />
        <AboutUs />
        <Organisations />
        <Contact />
      </>
    );
  }
}

export default Main;
