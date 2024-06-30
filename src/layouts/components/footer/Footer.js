import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Icons from "../../../components/icons/Icons";
import Logo from "../../../components/logo/Logo";

import "./Footer.css";
import clsx from "clsx";

export default function Footer() {
  const iconSize = 30;

  return (
    <footer className={clsx("footer-container")}>
      <Container>
        <Row>
          <Col size={12} sm={6}>
            <Logo />
          </Col>
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon">
              <a className={clsx("footer-icon")} href="/">
                <Icons.Facebook size={iconSize} />
              </a>
              <a className={clsx("footer-icon")} href="/">
                <Icons.Twitter size={iconSize} />
              </a>
              <a className={clsx("footer-icon")} href="/">
                <Icons.Instagram size={iconSize} />
              </a>
            </div>
            <p>
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
