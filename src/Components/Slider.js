import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Slider({ start, end }) {
  return (
    <Carousel fade>
      {start.map((data, id) => {
        return (
          <CarouselItem key={id}>
            <img src={data} alt="id" />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}
