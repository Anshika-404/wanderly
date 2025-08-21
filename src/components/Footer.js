import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Logo + About */}
          <Col md={4}>
            <h4 className="fw-bold text-info">Wanderly</h4>
            <p className="small text-light">
              Explore the world with curated travel experiences, adventures, and memories that last a lifetime.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="/" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="/" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="/" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
              <a href="/" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/" className="text-white text-decoration-none">Destinations</a></li>
              <li><a href="/" className="text-white text-decoration-none">Adventures</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Subscribe to our Newsletter</h6>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="info" className="fw-bold">Subscribe</Button>
            </Form>
            <p className="small text-muted mt-2">
              Get the latest travel tips, guides, and offers.
            </p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row>
          <Col className="text-center small text-light">
            © 2025 Wanderly. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;
