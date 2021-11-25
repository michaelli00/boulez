import React from 'react';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/total-serialism" className="nav-link">Total Serialism</NavLink>
            <NavLink to="/pitch-multiplication" className="nav-link">Pitch Multiplication</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default Header;
