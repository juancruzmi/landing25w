import React from "react";
import "../assets/css/Hero.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../assets/statics/slide1-background.png";
import Banner2 from "../assets/statics/slide2-background.png";
import Banner3 from "../assets/statics/slide3-background.png";

export default function Hero() {
  return (
    <>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        swipeable
        infiniteLoop
        useKeyboardArrows
        showArrows={false}
        emulateTouch
        className="slider"
      >
        <div className="slide">
          <img className="slide__img" src={Banner1} alt="Banner 1" />
          <div className="slide__content">
            <h1 className="slide__title">
              Sed ut perspiciatis <br /> unde omnis iste natus
            </h1>
            <p className="slide__description">
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptatem accusantium doloremque.
            </p>
            <button
              className="slide__button btn
            "
            >
              Read More
            </button>
          </div>
        </div>
        <div className="slide">
          <img className="slide__img" src={Banner2} alt="Banner 1" />
          <div className="slide__content">
            <h1 className="slide__title">
              Sed ut perspiciatis <br /> unde omnis iste natus
            </h1>
            <p className="slide__description">
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptatem accusantium doloremque.
            </p>
            <button
              className="slide__button btn
            "
            >
              Read More
            </button>
          </div>
        </div>
        <div className="slide">
          <img className="slide__img" src={Banner3} alt="Banner 1" />
          <div className="slide__content">
            <h1 className="slide__title">
              Sed ut perspiciatis <br /> unde omnis iste natus
            </h1>
            <p className="slide__description">
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptatem accusantium doloremque.
            </p>
            <button
              className="slide__button btn
            "
            >
              Read More
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
}
