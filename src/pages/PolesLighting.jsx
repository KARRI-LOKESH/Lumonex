// src/pages/PolesLighting.jsx
import React from "react";
import "../styles/PolesLighting.css";
import { useParams, Link } from "react-router-dom";

// Import images for each pole sub-category
import street1 from "../assets/poles/street1.webp";
import street2 from "../assets/poles/street2.webp";

import highmast1 from "../assets/poles/highmast1.webp";
import highmast2 from "../assets/poles/highmast2.webp";

import traffic1 from "../assets/poles/traffic1.webp";
import traffic2 from "../assets/poles/traffic2.webp";

import decorative1 from "../assets/poles/decorative1.webp";
import decorative2 from "../assets/poles/decorative2.webp";

import stadium1 from "../assets/poles/stadium1.webp";
import stadium2 from "../assets/poles/stadium2.webp";

import flag1 from "../assets/poles/flag1.webp";
import flag2 from "../assets/poles/flag2.webp";

import solar1 from "../assets/poles/solar1.webp";
import solar2 from "../assets/poles/solar2.webp";

// Data for each sub-category
const polesDetails = {
  "street-lighting-pole": {
    title: "Street Lighting Pole",
    description: "Strong and durable poles designed for city roads, highways, and residential areas.",
    images: [street1, street2],
  },
  "high-mast-pole": {
    title: "High Mast Pole",
    description: "High masts engineered for wide-area lighting like airports, ports, and intersections.",
    images: [highmast1, highmast2],
  },
  "traffic-signal-pole": {
    title: "Traffic Signal Pole",
    description: "Reliable poles for traffic lights and surveillance cameras.",
    images: [traffic1, traffic2],
  },
  "decorative-lighting-pole": {
    title: "Decorative Lighting Pole",
    description: "Stylish poles that enhance public parks, streetscapes, and plazas.",
    images: [decorative1, decorative2],
  },
  "stadium-mast": {
    title: "Stadium Mast",
    description: "Massive masts engineered for sports arenas and stadiums.",
    images: [stadium1, stadium2],
  },
  "flag-mast": {
    title: "Flag Mast",
    description: "Tall and elegant masts for flags in public and government spaces.",
    images: [flag1, flag2],
  },
  "solar-lighting-pole": {
    title: "Solar Lighting Pole",
    description: "Eco-friendly poles with integrated solar panels for off-grid areas.",
    images: [solar1, solar2],
  },
};

const PolesLighting = () => {
  const { poleType } = useParams(); // get the URL param like street-lighting-pole
  const pole = polesDetails[poleType];

  if (!pole) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="pole-detail-page">
      <h2 className="pole-title">{pole.title}</h2>
      <p className="pole-description">{pole.description}</p>
      <div className="pole-images-grid">
        {pole.images.map((img, index) => (
          <img key={index} src={img} alt={`${pole.title} ${index + 1}`} className="pole-image" />
        ))}
      </div>
      <div className="back-link">
        <Link to="/products/poles">← Back to Poles</Link>
      </div>
    </div>
  );
};

export default PolesLighting;
