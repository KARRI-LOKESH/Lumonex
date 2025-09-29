// src/pages/CommercialTypeDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductItems.css";

// Import images from a local assets folder
// Note: Adjust these paths if your file structure is different.
import retailImg1 from "../assets/commercial/retail_1.jpg";
import retailImg2 from "../assets/commercial/retail_2.jpg";

import hospitalityImg1 from "../assets/commercial/hospitality_1.jpg";
import hospitalityImg2 from "../assets/commercial/hospitality_2.jpg";

import educationalImg1 from "../assets/commercial/educational_1.jpg";
import educationalImg2 from "../assets/commercial/educational_2.jpg";

import healthcareImg1 from "../assets/commercial/healthcare_1.jpg";
import healthcareImg2 from "../assets/commercial/healthcare_2.jpg";

import shoppingImg1 from "../assets/commercial/shopping_1.jpg";
import shoppingImg2 from "../assets/commercial/shopping_2.jpg";

import areaImg1 from "../assets/commercial/area_1.jpg";
import areaImg2 from "../assets/commercial/area_2.jpg";

const commercialDetails = {
  "retail-shopping-malls": {
    title: "Retail & Shopping Malls",
    description:
      "Our lighting solutions for retail and shopping malls are designed to enhance product appeal, create an inviting atmosphere, and improve customer flow. We focus on high Color Rendering Index (CRI) to make colors pop and accent lighting to guide the customer's eye.",
    features: [
      "High CRI for vibrant colors",
      "Dynamic accent and track lighting",
      "Energy-efficient and dimmable systems",
      "Customizable layouts for brand identity",
      "Long lifespan and low maintenance",
    ],
    gallery: [
      { src: retailImg1, alt: "Modern retail store lighting" },
      { src: retailImg2, alt: "Bright shopping mall atrium" },
    ],
  },
  "hotels-hospitality": {
    title: "Hotels & Hospitality",
    description:
      "Set the perfect mood with our hospitality lighting. From grand lobbies to cozy guest rooms, our solutions combine aesthetics with functionality to create a memorable and comfortable experience for your guests.",
    features: [
      "Warm, ambient lighting for relaxation",
      "Energy-saving controls and automation",
      "Decorative and architectural fixtures",
      "Seamless integration into interior design",
    ],
    gallery: [
      { src: hospitalityImg1, alt: "Hotel lobby with warm lighting" },
      { src: hospitalityImg2, alt: "Luxury hotel room lighting" },
    ],
  },
  "educational-facilities": {
    title: "Educational Facilities",
    description:
      "Our lighting for schools and universities is designed to support learning and well-being. We provide glare-free, uniform lighting that reduces eye strain and improves concentration for students and staff.",
    features: [
      "Uniform, glare-free illumination",
      "Tunable white light for circadian rhythm support",
      "Durable and low-maintenance fixtures",
      "Motion sensors for energy savings",
    ],
    gallery: [
      { src: educationalImg1, alt: "School classroom with modern lighting" },
      { src: educationalImg2, alt: "University library with reading lights" },
    ],
  },
  "healthcare-hospitals": {
    title: "Healthcare & Hospitals",
    description:
      "Lighting in healthcare is critical for patient care and accurate diagnoses. Our fixtures provide a clean, sterile, and comfortable light environment, with features that support patient recovery and help medical staff perform tasks precisely.",
    features: [
      "Anti-bacterial and easy-to-clean surfaces",
      "High CRI for accurate color rendering",
      "Patient-friendly, non-glare illumination",
      "Supports circadian rhythm for patient well-being",
    ],
    gallery: [
      { src: healthcareImg1, alt: "Clinic examination room lighting" },
      { src: healthcareImg2, alt: "Hospital patient room" },
    ],
  },
 "shopping-malls": {
    title: "Shopping Malls",
    description:
      "Our specialized lighting for shopping malls is designed to create a vibrant and inviting atmosphere. We focus on enhancing the visual appeal of retail spaces, guiding customer traffic, and improving overall safety and security.",
    features: [
      "High-power spotlights for product display",
      "Architectural lighting for aesthetic appeal",
      "Energy-efficient and cost-effective solutions",
      "Advanced lighting control systems",
    ],
    gallery: [
      { src: shoppingImg1, alt: "Modern shopping mall interior" },
      { src: shoppingImg2, alt: "Shopping mall with dynamic lighting" },
    ],
  },
  "area-lighting": {
    title: "Area Lighting",
    description:
      "Our area lighting products are engineered to provide powerful and uniform illumination for parking lots, streets, and other outdoor spaces. This enhances safety and security while being highly energy-efficient.",
    features: [
      "High-power LED floodlights and streetlights",
      "Durable, weather-resistant construction",
      "Wide and uniform light distribution",
      "Motion sensors and smart controls for security",
    ],
    gallery: [
      { src: areaImg1, alt: "Outdoor street lighting at night" },
      { src: areaImg2, alt: "Parking lot with pole lights" },
    ],
  },
};

const CommercialTypeDetail = () => {
  const { commercialType } = useParams();
  const detail = commercialDetails[commercialType];

  if (!detail) {
    return (
      <div className="product-page">
        <h2 className="product-title-heading">Category Not Found</h2>
        <p className="product-description">
          The requested commercial lighting category could not be found.
        </p>
        <div className="back-link">
          <Link to="/commercial-lighting">← Back to Commercial Lighting</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2 className="product-title-heading">{detail.title}</h2>

      {/* Photo Gallery */}
      <div className="product-gallery">
        {detail.gallery.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
          />
        ))}
      </div>

      <p className="product-description">{detail.description}</p>

      {detail.features && detail.features.length > 0 && (
        <div className="product-features">
          <h3 className="category-title">Key Features:</h3>
          <ul className="category-list">
            {detail.features.map((feature, index) => (
              <li key={index} className="category-list-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="back-link">
        <Link to="/products/led-lights/commercial-lighting">← Back to Commercial Lighting</Link>
      </div>
    </div>
  );
};

export default CommercialTypeDetail;