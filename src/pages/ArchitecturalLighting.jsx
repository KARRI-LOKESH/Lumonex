import React from "react";
import { Link } from "react-router-dom";

// General architectural lighting image for the main page header
import archlight from "../assets/sectorscar/arclight.png";

// Import specific thumbnail images
import facadeLightingThumb from "../assets/architectural/facade_thumb.webp";
import interiorLightingThumb from "../assets/architectural/interior_thumb.webp";

const architecturalApplicationsData = [
  { 
    id: "facade-lighting", 
    name: "Facade Lighting", 
    image: facadeLightingThumb, 
    desc: "Illuminate building exteriors and architectural features to enhance their appearance." 
  },
  { 
    id: "interior-lighting", 
    name: "Interior Architectural Lighting", 
    image: interiorLightingThumb, 
    desc: "Design-focused lighting for interior spaces that highlights a building's unique design elements." 
  },
];

const ArchitecturalLighting = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">ARCHITECTURAL LIGHTING</h2>
      <img
        src={archlight}
        alt="Architectural Lighting Overview"
        className="product-main-image"
      />
      <p className="product-description">
        Our architectural lighting solutions are crafted to accentuate the beauty and uniqueness of any structure. 
        We offer specialized and customizable lighting systems that bring facades and interior spaces to life, blending functionality with aesthetic design.
      </p>

      <div className="product-sub-categories-grid">
        {architecturalApplicationsData.map((application) => (
          <div key={application.id} className="product-card">
            <img
              src={application.image}
              alt={application.name}
              className="product-image"
            />
            <h3 className="product-title">{application.name}</h3>
            <p className="product-description-card">{application.desc}</p>
            <Link
              to={`/products/led-lights/architectural-lighting/${application.id}`}
              className="product-button"
            >
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

export default ArchitecturalLighting;
