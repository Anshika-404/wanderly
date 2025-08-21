import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";  
import "./Reviews.css";   

const reviews = [
  {
    name: "Sophia Miller",
    location: "Santorini, Greece",
    review:
      "The whitewashed houses with blue domes were magical! The sunsets here are unforgettable, and the locals are so welcoming.",
    image: "/images/santorini-sophia.jpg",
    rating: 5
  },
  {
    name: "James Anderson",
    location: "Zurich, Switzerland",
    review:
      "Zurich is a beautiful mix of modern and traditional. The lake views are breathtaking, and Swiss chocolate is unmatched.",
    image: "/images/zurich-james.jpeg",
    rating: 4
  },
  {
    name: "Ava Johnson",
    location: "Costa Rica",
    review:
      "Adventure everywhere! From rainforests to volcano hikes, Costa Rica is a paradise for thrill seekers.",
    image: "/images/costaRica-ava.jpeg",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <Container>
        <h2 className="reviews-title">What Our Travellers Say</h2>
        <Row>
          {reviews.map((review, idx) => (
            <Col md={4} key={idx}>
              <Card className="border-0 shadow-sm h-100 review-card">
                <div className="d-flex">
                  {/* Destination Thumbnail */}
                  <img
                    src={review.image}
                    alt={review.location}
                    className="review-img"
                  />

                  {/* User Info + Review */}
                  <div className="p-3">
                    <h6 className="fw-bold mb-1">{review.name}</h6>
                    <p className="text-muted small mb-1">{review.location}</p>

                    {/*  Rating stars */}
                    <div className="mb-2 text-warning">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < review.rating ? "bi-star-fill" : "bi-star"
                          }`}
                        ></i>
                      ))}
                    </div>

                    <p className="review-text mb-0">{review.review}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
