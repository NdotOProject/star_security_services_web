//
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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

const sidebarId = "AppSidebar@19091872673";
const offcanvasNavLabelId = "Sidebar@NavLabel@01983625734";

function ServiceDropdownList() {
  const [services, setServices] = useState([{ id: 1, name: "Service 1" }]);

  return (
    <NavDropdown title="Services">
      {services.map((service, index) => {
        return (
          <NavDropdown.Item
            key={`NavDropdown.Item.${index}@Service.Id(${service.id})`}
          >
            {service.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

function SearchForm() {
  return (
    <Form className="d-flex">
      {/*  */}
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      {/*  */}
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

function Header(props, ref) {
  const expand = "md";

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
              <Nav.Link as={Link} to={links.home}>
                Home
              </Nav.Link>
              {/*  */}
              <ServiceDropdownList />
              {/*  */}
              <Nav.Link as={Link} href="#action2">
                About us
              </Nav.Link>
            </Nav>
            {/*  */}
            <SearchForm />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default forwardRef(Header);
