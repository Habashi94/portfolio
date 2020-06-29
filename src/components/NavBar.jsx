import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link> */}

          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="navbar-items"
          >
            Main
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="navbar-items"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            id="navbar-items"
          >
            Contact
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
