import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-page" >
      
    <div className="text-center py-5 border-bottom shadow-sm" style={{backgroundColor: "#e1e8efff"}}>
        <h1 className="fw-bold text-primary mb-3">Contact Us</h1>
        <p className="lead text-dark">
          Have questions or want to plan your next adventure? We’d love to hear from you!
        </p>
      </div>

      <Container className="py-5">
        <Row>
          
          <Col md={6} className="mb-4">
            <Card className="shadow-sm p-4">
              <h4 className="fw-bold mb-3">Send us a Message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          
          <Col md={6}>
            <Card className="shadow-sm p-4 mb-4">
              <h4 className="fw-bold mb-3">Get in Touch</h4>
              <p className="text-dark mb-2"><i className="bi bi-geo-alt-fill text-primary me-2"></i>123 Wanderly Street, Travel City</p>
              <p className="text-dark mb-2"><i className="bi bi-envelope-fill text-primary me-2"></i>contact@wanderly.com</p>
              <p className="text-dark mb-2"><i className="bi bi-telephone-fill text-primary me-2"></i>+91 930XXXXXXX</p>
            </Card>

            
            <Card className="shadow-sm">
              <div style={{ height: "250px", backgroundColor: "#e9ecef" }} className="d-flex align-items-center justify-content-center">
                <p className="text-muted mb-0">📍 Google Map Placeholder</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
