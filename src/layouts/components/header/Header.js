//
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
//
import routes from "../../../configurations/routes";
import Logo from "../../../components/logo/Logo";
import clsx from "clsx";

import "./Header.css";

const links = {
  home: routes.client.home,
};

const styleClasses = {
  navbar: clsx("bg-body-tertiary", "mb-3", "navbar_bonus"),
  nav: clsx("justify-content-end", "flex-grow-1", "pe-3"),
};

export default forwardRef(function Header(props, ref) {
  const expand = "md";
  const sidebarId = "AppSidebar@19091872673";
  const offcanvasNavLabelId = "Sidebar@NavLabel@01983625734";

  const [activeLink, setActiveLink] = useState("home");
  const navbarRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      getHeight() {
        return navbarRef.current.clientHeight;
      },
    }),
    []
  );

  return (
    <Navbar
      ref={navbarRef}
      expand={expand}
      className={styleClasses.navbar}
      fixed="top"
    >
      <Container fluid="md">
        {/*  */}
        <Navbar.Brand as={Link} to={links.home}>
          <Logo />
        </Navbar.Brand>
        {/*  */}
        <Navbar.Toggle aria-controls={sidebarId} />
        {/*  */}
        <Navbar.Offcanvas
          id={sidebarId}
          aria-labelledby={offcanvasNavLabelId}
          placement="start"
        >
          {/*  */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={offcanvasNavLabelId}>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          {/*  */}
          <Offcanvas.Body>
            <Nav className={styleClasses.nav}>
              {/*  */}
              <Nav.Link
                href="#home"
                onClick={() => {
                  setActiveLink("home");
                }}
                active={activeLink === "home"}
              >
                Home
              </Nav.Link>
              {/*  */}
              <Nav.Link
                href="#services"
                onClick={() => {
                  setActiveLink("services");
                }}
                active={activeLink === "services"}
              >
                Services
              </Nav.Link>
              {/*  */}
              <Nav.Link
                href="#about-us"
                onClick={() => {
                  setActiveLink("about-us");
                }}
                active={activeLink === "about-us"}
              >
                About us
              </Nav.Link>
              {/*  */}
              <Nav.Link
                as={Link}
                to={routes.client.recruitmentNews}
                onClick={() => {
                  setActiveLink("recruitment-news");
                }}
                active={activeLink === "recruitment-news"}
              >
                Recruitment News
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
});
