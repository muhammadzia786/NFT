import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Navbar/Navbar.css";

export default function Bubble() {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto navbarmain"

                // navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                <Nav.Link href="#evolution">Evolution Madness</Nav.Link>
                <Nav.Link href="#ourteam">Our Team</Nav.Link>
                <Nav.Link href="#contact">Contact US</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ////////////////////////////// */}
        <Navbar variant="white">
          <Container></Container>
        </Navbar>
      </div>
    </div>
  );
}
