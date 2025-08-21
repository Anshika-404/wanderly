import React from "react";

const services = [
  { name: "Hotels", icon: "bi-building" },
  { name: "Flights", icon: "bi-airplane" },
  { name: "Trains", icon: "bi-train-front" },
  { name: "Bus", icon: "bi-bus-front" },
  { name: "Car Rentals", icon: "bi-car-front" },
  { name: "Travel Insurance", icon: "bi-shield-check" },
];

const Services = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#eaf0f6" }}>
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Our Services</h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-2 col-6 mb-4">
              <div
                className="p-3 bg-white shadow rounded text-center"
                style={{
                  border: "2px solid #333",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <i
                  className={`bi ${service.icon}`}
                  style={{ fontSize: "40px", color: "#007bff" }}
                ></i>
                <h6 className="mt-2 fw-bold">{service.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
