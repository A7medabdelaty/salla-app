import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import image_1 from "../assets/images/image1.jpg";
import image_2 from "../assets/images/image2.jpg";
import image_3 from "../assets/images/image3.jpg";

export default function Slider() {
    return (
        <Carousel style={{ height: "300px", overflow: "hidden" }}>
          <Carousel.Item>
            <img className="d-block w-100" src={image_1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image_2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image_3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
