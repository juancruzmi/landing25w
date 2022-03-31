import React from "react";
import "../assets/css/Products.css";
import Slider from "react-slick";

export default function Products() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="product" className="products">
        <div className="products__container">
          <h2 className="products__title">Products</h2>
          <p className="products__description">
            In eget tortor tempor mollis purus
          </p>
          <div className="products__carousel">
            <Slider {...settings}>
              <div>
                <div className="carousel__card">
                  <h4 className="card__title">Aliquam at dui lorem ipsum</h4>
                  <ul className="card__list">
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="carousel__card">
                  <h4 className="card__title">Aliquam at dui lorem ipsum</h4>
                  <ul className="card__list">
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="carousel__card">
                  <h4 className="card__title">Aliquam at dui lorem ipsum</h4>
                  <ul className="card__list">
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="carousel__card">
                  <h4 className="card__title">Aliquam at dui lorem ipsum</h4>
                  <ul className="card__list">
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                    <li>- Ut mattis gravida efficitur</li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
