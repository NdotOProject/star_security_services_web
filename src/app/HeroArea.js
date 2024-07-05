import React from "react";
import { Col, Row } from "react-bootstrap";

import images from "../assets/images";

import "./HeroArea.css";

export default function HeroArea() {
  return (
    <div className="hero_area--container">
      <Row className="hero_area">
        <Col lg={5} className="text_content--container">
          <span className="text_content--header">Welcome to Star</span>
          <p className="text_content--body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna magna, efficitur eget quam at, faucibus lobortis arcu. Mauris
            hendrerit dictum metus nec sollicitudin. Mauris massa mi, tincidunt
            vel congue mollis, iaculis id turpis. Morbi finibus aliquet magna,
            sit amet cursus dui luctus ut. Donec quis ornare felis. Cras vel
            gravida eros. Pellentesque a tincidunt sem.
          </p>
        </Col>
        <Col lg={7} className="images--container">
          <div className="images--top">
            <img className="img-small" src={images.image3} alt="" />
            <img className="img-big" src={images.image10} alt="" />
          </div>
          <div className="images--bottom">
            <img className="img-big" src={images.image9} alt="" />
            <img className="img-small" src={images.image6} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
