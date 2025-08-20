import React from "react";

function Adventures() {
  const adventures = [
    {
      title: "Mountain Hiking",
      image: "/images/mountain-hiking.jpg",
      desc: "Conquer scenic trails and breathtaking peaks."
    },
    {
      title: "Scuba Diving",
      image: "/images/scuba-diving.jpg",
      desc: "Explore the magical underwater world."
    },
    {
      title: "Safari Adventure",
      image: "/images/safari-adventure.jpeg",
      desc: "Experience the wild up close in natural habitats."
    },
    {
      title: "Sky Diving",
      image: "/images/sky-diving.jpg",
      desc: "Feel the thrill of freefalling from the sky."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#eaf0f6" }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Adventures</h2>
        <div className="row">
          {adventures.map((adv, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={adv.image}
                  className="card-img-top"
                  alt={adv.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{adv.title}</h5>
                  <p className="card-text text-muted small">{adv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Adventures;
