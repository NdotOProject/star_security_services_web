//
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import clsx from "clsx";

import Logo from "../components/logo/Logo";
import Icons from "../components/icons/Icons";

import routes from "../configurations/routes";

import "./layout.css";

export default function Layout({ children, activeLink: currentLink }) {
  const [activeLink, setActiveLink] = useState(
    currentLink ?? routes.client.home
  );

  const [headerHeight, setHeaderHeight] = useState(60);
  const headerRef = useRef();

  const sidebarId = "AppSidebar@19091872673";
  const offcanvasNavLabelId = "Sidebar@NavLabel@01983625734";
  const iconSize = 30;

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <div className="layout">
      <Navbar
        ref={headerRef}
        expand={"md"}
        className={clsx("mb-3", "navbar_bonus")}
        fixed="top"
      >
        <Container fluid="md">
          <Navbar.Brand as={Link} to={routes.client.home}>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={sidebarId} />
          <Navbar.Offcanvas
            id={sidebarId}
            aria-labelledby={offcanvasNavLabelId}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={offcanvasNavLabelId}>
                <Logo />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className={clsx("justify-content-end", "flex-grow-1", "pe-3")}
              >
                <Nav.Link
                  as={Link}
                  to={routes.client.home}
                  onClick={() => {
                    setActiveLink(routes.client.home);
                  }}
                  active={activeLink === routes.client.home}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href={routes.client.services}
                  onClick={() => {
                    setActiveLink(routes.client.services);
                  }}
                  active={activeLink === routes.client.services}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#about-us"
                  onClick={() => {
                    setActiveLink("#about-us");
                  }}
                  active={activeLink === "#about-us"}
                >
                  About us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={routes.client.recruitmentNews}
                  onClick={() => {
                    setActiveLink(routes.client.recruitmentNews);
                  }}
                  active={activeLink === routes.client.recruitmentNews}
                >
                  Recruitment News
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div
        style={{
          "--header-height": `${headerHeight}px`,
        }}
      >
        {children}
      </div>
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
    </div>
  );
}
