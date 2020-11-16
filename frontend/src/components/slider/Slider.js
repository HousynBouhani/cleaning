import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
import slider1 from "../../assets/images/slide1.jpg";
import slider2 from "../../assets/images/slide2.png"
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item  interval={5000} className="slide-item">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} className="slide-item">
        <img
          className="d-block w-100"
          src={slider2}
          alt="second  slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
