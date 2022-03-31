import React from "react";
import "../assets/css/About.css";
import AboutImage from "../assets/statics/image-1.png";

export default function About() {
  return (
    <>
      <div id="about"></div>
      <div className="about">
        <div className="about__container">
          <div className="about__image">
            <img src={AboutImage} alt="" />
          </div>
          <div className="about__content">
            <h2 className="about__title">
              About us <br />
              <span>We Help Businesses</span>
            </h2>
            <p className="about__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <button className="about__button btn">More info</button>
          </div>
        </div>
      </div>
    </>
  );
}
