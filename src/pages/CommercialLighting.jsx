// src/pages/lighting/CommercialLighting.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductItems.css";

// Import local images
import retailImg from "../assets/commercial/retail.jpg";
import hotelImg from "../assets/commercial/hotel.jpg";
import educationImg from "../assets/commercial/education.jpg";
import hospitalImg from "../assets/commercial/hospital.jpg";
import warehouseImg from "../assets/commercial/warehouse.jpg";
import areaImg from "../assets/commercial/area.jpg";

// Category data
const commercialCategories = [
  {
    id: "retail-shopping-malls",
    name: "Retail & Shopping Malls",
    description:
      "Brighten up your retail space to attract customers and highlight products. Our solutions enhance the shopping experience.",
    image: retailImg,
  },
  {
    id: "hotels-hospitality",
    name: "Hotels & Hospitality",
    description:
      "Create the perfect ambiance for guests with elegant and efficient lighting. From lobbies to guest rooms, we set the mood.",
    image: hotelImg,
  },
  {
    id: "educational-facilities",
    name: "Educational Facilities",
    description:
      "Provide a comfortable and focused learning environment with lighting designed for classrooms, libraries, and common areas.",
    image: educationImg,
  },
  {
    id: "healthcare-hospitals",
    name: "Healthcare & Hospitals",
    description:
      "Specialized lighting solutions for patient rooms, operating theaters, and clinics that prioritize comfort, hygiene, and accuracy.",
    image: hospitalImg,
  },
  {
    id: "industrial-warehouses",
    name: "Industrial & Warehouses",
    description:
      "High-performance, durable lighting for demanding industrial environments to ensure safety, visibility, and productivity.",
    image: warehouseImg,
  },
  {
    id: "area-lighting",
    name: "Area Lighting",
    description:
      "Powerful and reliable outdoor lighting for parking lots, streets, and large open areas, enhancing security and safety.",
    image: areaImg,
  },
];

const CommercialLighting = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">COMMERCIAL LIGHTING</h2>
      <p className="product-description">
        Explore our comprehensive range of commercial lighting solutions tailored
        for various professional environments. We provide cutting-edge,
        energy-efficient fixtures that are designed to enhance productivity,
        safety, and ambiance.
      </p>

      <div className="product-sub-categories-grid">
        {commercialCategories.map((category) => (
          <div key={category.id} className="product-card">
            <img
              src={category.image}
              alt={category.name}
              className="product-image"
            />
            <h3 className="product-title">{category.name}</h3>
            <p className="product-description-card">{category.description}</p>
            <Link
  to={`/products/led-lights/commercial-lighting/${category.id}`}
  className="product-button"
>
  View More
</Link>

          </div>
        ))}
      </div>

      <div className="back-link">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default CommercialLighting;
