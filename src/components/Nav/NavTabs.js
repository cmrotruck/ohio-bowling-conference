import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavTabs() {
  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-md-center"
        >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown id="nav-dropdown" title="Member Schools">
              <NavDropdown.Item href="https://ohiostatebuckeyes.com/">
                Ohio State
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Robert Morris
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Shawnee State
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Toledo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Schedule">2021-2022 Schedule</Nav.Link>
            <Nav.Link href="#womens">Women's Standings</Nav.Link>
            <Nav.Link href="#men">Men's Standings</Nav.Link>
            <NavDropdown id="nav-dropdown" title="More">
              <NavDropdown.Item href="#action/3.1">
                Constitution
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                20-21 Schedule & Results
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                USBC Collegiate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
