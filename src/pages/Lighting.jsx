import React from "react";
import { Link } from "react-router-dom";
import "../styles/Lighting.css";
// Import all necessary images
import ledImg from "../assets/products/ledimg1.jpg";
import sportsImg from "../assets/sectorscar/stadlight.jpg"; 
import commercialImg from "../assets/sectorscar/comlight.jpg";
import residentialImg from "../assets/sectorscar/reslightimg.webp";
import industrialImg from "../assets/sectorscar/industrialimg.jpg";
import outlightImg from "../assets/sectorscar/outlight.webp";

// Updated imports with new paths
import theatreImg from "../assets/sectorscar/theatre.jpeg";
import landscapelight from "../assets/sectorscar/landlight.jpg";
import decorlight from "../assets/sectorscar/decorlight.webp";
import arclight from "../assets/sectorscar/arclight.png";
import autolight from "../assets/sectorscar/autolight.webp";

// Array of objects with detailed content for each sub-category
const lightingSubCategories = [
  { 
    to: "sports-lighting", 
    name: "Sports Lighting", 
    image: sportsImg, 
    desc: "Engineered for powerful and precise illumination of stadiums, arenas, and courts." 
  },
  { 
    to: "commercial-lighting", 
    name: "Commercial Lighting", 
    image: commercialImg, 
    desc: "High-efficiency solutions to brighten offices, retail spaces, and public buildings." 
  },
  { 
    to: "architectural-lighting", 
    name: "Architectural Lighting", 
    image: arclight, 
    desc: "Accentuate building features and create stunning visual appeal with custom lighting designs." 
  },
  { 
    to: "decorative-lighting", 
    name: "Decorative Lighting", 
    image: decorlight, 
    desc: "Enhance ambiance and interior design with elegant and stylish fixtures." 
  },
  { 
    to: "residential-lighting", 
    name: "Residential Lighting", 
    image: residentialImg, 
    desc: "Energy-efficient and long-lasting LED lights to create the perfect atmosphere in your home." 
  },
  { 
    to: "industrial-lighting", 
    name: "Industrial Lighting", 
    image: industrialImg, 
    desc: "Robust and powerful lights designed for warehouses, factories, and harsh environments." 
  },
  { 
    to: "street-outdoor-lighting", 
    name: "Street & Outdoor Lighting", 
    image: outlightImg, 
    desc: "Durable and reliable solutions for roads, pathways, and public outdoor areas." 
  },
  { 
    to: "landscape-lighting", 
    name: "Landscape Lighting", 
    image: landscapelight, 
    desc: "Subtly illuminate gardens, pathways, and outdoor spaces with beautiful landscape fixtures." 
  },
  { 
    to: "stage-theatrical-lighting", 
    name: "Stage/Theatrical Lighting", 
    image: theatreImg, 
    desc: "Specialized lighting for dynamic stage performances, concerts, and events." 
  },
  { 
    to: "smart-automated-lighting", 
    name: "Smart/Automated Lighting", 
    image: autolight, 
    desc: "Control your lighting with ease using automated systems, apps, and voice commands." 
  },
];

const Lighting = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">LED LIGHTING</h2>
      <p className="product-description">
        Our LED lights are engineered for maximum efficiency, providing bright, flicker-free illumination
        while significantly reducing energy consumption. With a lifespan of over 50,000 hours,
        they are a sustainable and cost-effective lighting solution for a wide range of applications.
      </p>

      <div className="product-sub-categories-grid">
        {lightingSubCategories.map((item) => (
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
    </div>
  );
};

export default Lighting;