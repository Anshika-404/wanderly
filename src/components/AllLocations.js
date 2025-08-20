import React from 'react';
import './PopularLocations.css';

const allLocations = [
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
  },
  {
    name: "Rome",
    image: "/images/rome.jpg",
    tagline: "The Eternal City.",
    details: "Visit the Colosseum, Vatican City, and ancient Roman ruins."
  },
  {
    name: "Sydney",
    image: "/images/sydney.jpg",
    tagline: "Harbor city with iconic Opera House.",
    details: "Enjoy Bondi Beach, Sydney Opera House, and vibrant waterfronts."
  },
  {
    name: "Zurich",
    image: "/images/zurich.jpg",
    tagline: "The heartbeat of Switzerland.",
    details: "A picturesque city in Switzerland with lakes and mountains."
  },
  {
    name: "Greece",
    image: "/images/greece.jpg",
    tagline: " Where history whispers and beauty blooms.",
    details: "Famous for its islands, blue seas, and rich history."
  },
  {
    name: "London",
    image: "/images/london.jpg",
    tagline: "The capital of England and the UK.",
    details: "A vibrant city blending tradition with modernity."
  },
  {
    name: "Costa Rica",
    image: "/images/costa-rica.jpg",
    tagline: "Pura Vida - The Rich Coast.",
    details: "Known for beaches, volcanoes, and biodiversity."
  },
  {
    name: "Finland",
    image: "/images/finland.jpg",
    tagline: " From Midnight Sun to Northern Lights.",
    details: "Land of lakes, forests, and the Northern Lights."
  },
  {
    name: "Budapest",
    image: "/images/budapest.jpg",
    tagline: "The Pearl of the Danube.",
    details: "Hungary’s capital, famous for its thermal baths and Danube views."
  },
  {
    name: "Dubai",
    image: "/images/dubai.jpg",
    tagline: "A city of innovation and luxury.",
    details: "Known for its modern architecture, luxury shopping, and vibrant nightlife."
  }
];

function AllLocations() {
  return (
    <section className="popular-section py-5"  style={{ backgroundColor: "#eaf0f6" }}>
      <div className="container">
        <h2 className="section-title text-center mb-5">Locations</h2>
        <div className="row g-4">
          {allLocations.map((loc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow location-card">
                <img src={loc.image} className="card-img-top" alt={loc.name} />
                <div className="card-body">
                  <h5 className="card-title">{loc.name}</h5>
                  <p className="card-text">{loc.tagline}</p>
                  <p className="card-text"><small>{loc.details}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllLocations;
