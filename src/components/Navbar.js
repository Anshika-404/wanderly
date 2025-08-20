// Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
         <img 
            src="/logo.png" 
            alt="Wanderly Logo" 
            className="rounded-circle border border-secondary shadow-sm me-2"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        <Navbar.Brand href="/" className="fw-bold fs-4" style ={{color: "#4797b1ff" }}>Wanderly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Button variant="primary" className="ms-3">Book Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
