import React from "react";
import "../assets/css/Details.css";
import Anchor from "../assets/statics/Icon awesome-anchor.svg";
import Bookmark from "../assets/statics/Icon awesome-bookmark.svg";
import Brush from "../assets/statics/Icon awesome-brush.svg";
import Bell from "../assets/statics/Icon awesome-bell.svg";
import Bandcamp from "../assets/statics/Icon awesome-bandcamp.svg";
import BoxOpen from "../assets/statics/Icon awesome-box-open.svg";

export default function Details() {
  return (
    <>
      <div id="details" className="details">
        <div className="details__container">
          <h2 className="details__title">More details</h2>
          <p className="details__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            gravida felis, id tempor ex. Suspendisse congue purus eu neque
            auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
          </p>
          <div className="details__icons">
            <div className="icon__box">
              <img src={Anchor} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
            <div className="icon__box">
              <img src={Bookmark} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
            <div className="icon__box">
              <img src={Brush} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
            <div className="icon__box">
              <img src={Bell} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
            <div className="icon__box">
              <img src={Bandcamp} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
            <div className="icon__box">
              <img src={BoxOpen} alt="" className="box__icon" />
              <p className="box__description">
                Donec egestas tortor quis turpis finibus vestibulum vel nec ex.
                Nunc sed velit ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
