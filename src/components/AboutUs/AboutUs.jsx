import React from "react";
import "./AboutUs.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <div id="about-us" className="about-us">
        <div className="about-us-container">
          <div className="about-us-text">
            <h1 className="about-us-text__title">O nas</h1>

            <div className="about-us__decoration-container">
              <div className="about-us__decoration" />
            </div>

            <p className="about-us-text__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              nibh imperdiet, mollis metus sit amet, ornare quam. Sed malesuada
              tincidunt sapien.
            </p>
          </div>

          <div className="about-us__image" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
