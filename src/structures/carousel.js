import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption1">
          <h3>Pharmacist Prescribing guide</h3>
          <p>Conditions/Drugs/Dosing</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel2.png"
          alt="Second slide"
        />

        <Carousel.Caption className="caption1">
          <h3>Adaptations</h3>
          <p>Rules/Rundown</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="caption1">
          <h3>COVID </h3>
          <p>2023 guide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

