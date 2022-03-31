import React from "react";
import "../assets/css/Services.css";
import IconWorld from "../assets/statics/Icon awesome-globe-americas.svg";
import IconCloud from "../assets/statics/Icon awesome-cloud-upload-alt.svg";
import IconHeadset from "../assets/statics/Icon awesome-headset.svg";
import IconFriends from "../assets/statics/Icon awesome-user-friends.svg";

export default function Services() {
  return (
    <>
      <div id="services" className="services">
        <div className="services__container">
          <div className="services__content">
            <h2 className="services__title">Services</h2>
            <p className="services__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              gravida felis, id tempor ex. Suspendisse congue purus eu neque
              auctor, eget dictum ipsum facilisis. Sed scelerisque sodales
              lorem,
            </p>
          </div>
          <div className="services__offer">
            <div className="services__card">
              <img src={IconWorld} alt="" className="services__icon" />
              <p className="icon__title">Stet clita kasd gubergren</p>
            </div>
            <div className="services__card">
              <img src={IconCloud} alt="" className="services__icon" />
              <p className="icon__title">Stet clita kasd gubergren</p>
            </div>
            <div className="services__card">
              <img src={IconHeadset} alt="" className="services__icon" />
              <p className="icon__title">Stet clita kasd gubergren</p>
            </div>
            <div className="services__card">
              <img src={IconFriends} alt="" className="services__icon" />
              <p className="icon__title">Stet clita kasd gubergren</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
