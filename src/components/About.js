
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../components/About.css";

const About = () => {
  return (
    <>

      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="/images/about.jpg"
                alt="About Wanderly"
                className="img-fluid rounded-4 shadow"
              />
            </Col>

            
            <Col md={6}>
              <h2 className="fw-bold text-primary mb-3">About Wanderly</h2>
              <p className="text-dark">
                Wanderly was created with one vision – to make travel more
                accessible, exciting, and unforgettable. From exotic beaches to
                thrilling adventures, we craft personalized journeys that
                connect you with places and people in the most authentic way.
              </p>
              <p className="text-dark">
                Whether you're a solo traveler seeking inspiration, a family
                planning a vacation, or an adventurer chasing the next thrill,
                Wanderly is your perfect travel companion.
              </p>
              <Button variant="info" className="fw-bold mt-3">
                Learn More
              </Button>
            </Col>
          </Row>

          
          <Row className="mt-5">
            <h3 className="fw-bold text-center mb-4">Meet Our Team</h3>

            <Col md={4} className="mb-3">
              <Card className="h-100 shadow border-0 text-center">
                <Card.Img
                  variant="top"
                  src="https://ui-avatars.com/api/?name=Anshika+Verma&background=random"
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Anshika Verma</Card.Title>
                  <Card.Text className="text-muted">Founder & CEO</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-3">
              <Card className="h-100 shadow border-0 text-center">
                <Card.Img
                  variant="top"
                  src="https://ui-avatars.com/api/?name=X+Y&background=random"
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>XYZ</Card.Title>
                  <Card.Text className="text-muted">Travel Expert</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-3">
              <Card className="h-100 shadow border-0 text-center">
                <Card.Img
                  variant="top"
                  src="https://ui-avatars.com/api/?name=A+B&background=random"
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>ABC</Card.Title>
                  <Card.Text className="text-muted">Adventure Guide</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default About;
