import React, { useRef } from "react";
import { Link } from "react-router-dom"; // You might need this for future links
import "../styles/SectorsCarousel.css";

// ✅ Import all necessary images from assets
import residentialImg from "../assets/sectorscar/reslightimg.webp";
import commercialImg from "../assets/sectorscar/comlight.jpg";
import industrialImg from "../assets/sectorscar/industrialimg.jpg";
import outdoorImg from "../assets/sectorscar/outlight.webp";
import smartImg from "../assets/sectorscar/autolight.webp";
import ledTechImg from "../assets/products/ledimg1.jpg";
import energyImg from "../assets/sectorscar/landlight.jpg"; 
import retailImg from "../assets/sectorscar/decorlight.webp";
import hospitalityImg from "../assets/sectorscar/theatre.jpeg";
import healthcareImg from "../assets/sectorscar/arclight.png";
import turfImg from "../assets/sectorscar/stadlight.jpg";
import shuttleImg from "../assets/sectorscar/comlight.jpg"; // Using a placeholder for now
import stadiumImg from "../assets/sectorscar/stadlight.jpg";

const sectorsData = [
  { img: residentialImg, title: "Residential Lighting" },
  { img: commercialImg, title: "Commercial Lighting" },
  { img: industrialImg, title: "Industrial Lighting" },
  { img: outdoorImg, title: "Outdoor Lighting" },
  { img: smartImg, title: "Smart Lighting Solutions" },
  { img: ledTechImg, title: "LED Technology" },
  { img: energyImg, title: "Energy-Efficient Lighting" },
  { img: retailImg, title: "Retail Lighting" },
  { img: hospitalityImg, title: "Hospitality Lighting" },
  { img: healthcareImg, title: "Healthcare Lighting" },
  { img: turfImg, title: "Turf Lighting" },
  { img: shuttleImg, title: "Shuttle Court Lighting" },
  { img: stadiumImg, title: "Stadium Lighting" },
];

const SectorsCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sectors" className="sectors-carousel-section">
      <h2 className="sectors-carousel-heading">Our Sectors</h2>
      <div className="sectors-carousel-container">
        {/* Previous Button */}
        <button className="carousel-arrow carousel-arrow-left" onClick={scrollLeft}>
          &#8249;
        </button>

        {/* Carousel Content */}
        <div className="sectors-carousel-track" ref={carouselRef}>
          {sectorsData.map((sector, i) => (
            <div key={i} className="sectors-carousel-card">
              <img src={sector.img} alt={sector.title} className="sector-image" />
              <h3 className="sector-title">{sector.title}</h3>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button className="carousel-arrow carousel-arrow-right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default SectorsCarousel;