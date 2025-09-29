import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductItems.css";

// Import images for detail gallery
import facade1 from "../assets/architectural/facade_1.jpg";
import facade2 from "../assets/architectural/facade_2.jpg";
import interior1 from "../assets/architectural/interior_1.jpg";
import interior2 from "../assets/architectural/interior_2.jpg";

const architecturalDetails = {
  "facade-lighting": {
    title: "Facade Lighting",
    description:
      "Enhance building exteriors with dynamic, elegant lighting that highlights architectural features.",
    features: [
      "Energy-efficient LED facades",
      "Customizable color and brightness",
      "Weather-resistant installation",
    ],
    gallery: [
      { src: facade1, alt: "Facade lighting example 1" },
      { src: facade2, alt: "Facade lighting example 2" },
    ],
  },
  "interior-lighting": {
    title: "Interior Architectural Lighting",
    description:
      "Highlight interior design elements with precision lighting that improves ambiance and aesthetics.",
    features: [
      "Accent and feature lighting",
      "Dimmable and tunable systems",
      "Integration with interior design themes",
    ],
    gallery: [
      { src: interior1, alt: "Interior lighting example 1" },
      { src: interior2, alt: "Interior lighting example 2" },
    ],
  },
};

const ArchitecturalLightingDetail = () => {
  const { categoryId } = useParams();
  const detail = architecturalDetails[categoryId];

  if (!detail) {
    return (
      <div className="product-page">
        <h2 className="product-title-heading">Category Not Found</h2>
        <p className="product-description">
          The requested architectural lighting category could not be found.
        </p>
        <div className="back-link">
          <Link to="/products/led-lights/architectural-lighting">← Back to Architectural Lighting</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2 className="product-title-heading">{detail.title}</h2>

      <div className="product-gallery">
        {detail.gallery.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="gallery-image" />
        ))}
      </div>

      <p className="product-description">{detail.description}</p>

      {detail.features && detail.features.length > 0 && (
        <div className="product-features">
          <h3 className="category-title">Key Features:</h3>
          <ul className="category-list">
            {detail.features.map((feature, index) => (
              <li key={index} className="category-list-item">{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="back-link">
        <Link to="/products/led-lights/architectural-lighting">← Back to Architectural Lighting</Link>
      </div>
    </div>
  );
};

export default ArchitecturalLightingDetail;
