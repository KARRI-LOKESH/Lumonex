// src/pages/Poles.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Poles.css";
// Main image for the Poles category
import polesCategoryImg from "../assets/sectorscar/poles.webp";

// Import specific images for each pole type (place these in an appropriate directory, e.g., assets/poles)
import streetPoleImg from "../assets/poles/street.webp";
import highMastPoleImg from "../assets/poles/highmast.webp";
import trafficPoleImg from "../assets/poles/traffic.webp";
import decorativePoleImg from "../assets/poles/decorative.webp";
import stadiumMastImg from "../assets/poles/stadium.webp";
import flagMastImg from "../assets/poles/flag.webp";
import solarPoleImg from "../assets/poles/solar.webp";

// Array of objects with detailed content for each pole sub-category
const poleSubCategories = [
  {
    to: "street-lighting-pole",
    name: "Street Lighting Pole",
    image: streetPoleImg,
    desc: "Robust poles for public roads and highways, ensuring safety and visibility."
  },
  {
    to: "high-mast-pole",
    name: "High Mast Pole",
    image: highMastPoleImg,
    desc: "Tall, powerful masts for illuminating large areas like intersections and airports."
  },
  {
    to: "traffic-signal-pole",
    name: "Traffic Signal Pole",
    image: trafficPoleImg,
    desc: "Durable and reliable poles for traffic signals and surveillance cameras."
  },
  {
    to: "decorative-lighting-pole",
    name: "Decorative Lighting Pole",
    image: decorativePoleImg,
    desc: "Aesthetically pleasing poles that complement urban landscapes and public parks."
  },
  {
    to: "stadium-mast",
    name: "Stadium Mast",
    image: stadiumMastImg,
    desc: "Heavy-duty masts designed for high-intensity sports and stadium lighting."
  },
  {
    to: "flag-mast",
    name: "Flag Mast",
    image: flagMastImg,
    desc: "Elegant and sturdy masts for hoisting flags at government buildings and landmarks."
  },
  {
    to: "solar-lighting-pole",
    name: "Solar Lighting Pole",
    image: solarPoleImg,
    desc: "Integrated solar poles that provide sustainable and off-grid lighting solutions."
  },
];

const Poles = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">POLES</h2>
      <img src={polesCategoryImg} alt="Lighting Poles" className="product-main-image" />
      <p className="product-description">
        Our range of lighting poles and masts are built for durability and design,
        offering solutions for every kind of outdoor application. Made from high-quality materials,
        they are designed to withstand harsh weather conditions while complementing their surroundings.
      </p>
      
      {/* Grid of product cards */}
      <div className="product-sub-categories-grid">
        {poleSubCategories.map((item) => (
          <div key={item.to} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-title">{item.name}</h3>
            <p className="product-description-card">{item.desc}</p>
            <Link to={item.to} className="product-button">
              View More
            </Link>
          </div>
        ))}
      </div>
      
      <div className="back-link">
        <Link to="/products/led-lights">← Back to LED Lighting</Link>
      </div>
    </div>
  );
};

export default Poles;