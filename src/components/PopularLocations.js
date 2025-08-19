import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './PopularLocations.css';

const locations = [
  {
    name: "Paris",
    image: "/images/paris.jpg",
    tagline: "The city of lights and love.",
    details: "Explore iconic landmarks like the Eiffel Tower, Louvre Museum, and charming cafés along the Seine."
  },
  {
    name: "Tokyo",
    image: "/images/tokyo.jpeg",
    tagline: "Experience the heart of Japan's culture.",
    details: "Discover ancient temples, neon-lit skyscrapers, and sushi experiences in Shinjuku."
  },
  {
    name: "New York",
    image: "/images/newyork.jpg",
    tagline: "The city that never sleeps.",
    details: "Explore Times Square, Central Park, and the buzzing energy of Manhattan."
  }
];

function PopularLocations() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="popular-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Popular Locations</h2>
        <div className="row g-4">
          {locations.map((loc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow location-card">
                <img src={loc.image} className="card-img-top" alt={loc.name} />
                <div className="card-body d-flex flex-column position-relative">
                  <h5 className="card-title">{loc.name}</h5>
                  <p className="card-text">{loc.tagline}</p>

                  {activeIndex === index && (
                    <div className="card-details mt-2">
                      <p>{loc.details}</p>
                    </div>
                  )}

                  <button
                    className="toggle-btn-icon"
                    onClick={() => toggleCard(index)}
                    aria-label="Toggle Details"
                  >
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularLocations;
