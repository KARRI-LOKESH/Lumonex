// src/pages/SportLightings.jsx

import React from "react";
import { Link } from "react-router-dom";

// General sports lighting image for the main page header
import sportsCategoryCardImg from "../assets/sectorscar/stadlight.jpg"; 

// ✅ Import all specific thumbnail images using the paths you provided
import volleyBallThumb from "../assets/sports/volley-ball_thumb.webp";
import tennisThumb from "../assets/sports/tennis_thumb.webp";
import squashThumb from "../assets/sports/squash_thumb.avif";
import pickleBallThumb from "../assets/sports/pickle-ball_thumb.webp";
import multiPurposeThumb from "../assets/sports/multi_thumb.jpeg";
import hockeyThumb from "../assets/sports/hockey_thumb.jpeg";
import footballThumb from "../assets/sports/football_jpg.jpg";
import cricketThumb from "../assets/sports/cricket_thumb.webp";
import basketballThumb from "../assets/sports/basketball_thumb.jpg";
import badmintonThumb from "../assets/sports/badminton_thumb.jpg";

const sportsApplicationsData = [
  { 
    id: "cricket-field", 
    name: "Cricket Field", 
    image: cricketThumb, 
    desc: "Specialized lighting for cricket pitches and entire fields." 
  },
  { 
    id: "football", 
    name: "Football", 
    image: footballThumb, 
    desc: "High-performance illumination for football stadiums and grounds." 
  },
  { 
    id: "basketball", 
    name: "Basketball", 
    image: basketballThumb, 
    desc: "Bright and uniform lighting for indoor and outdoor basketball courts." 
  },
  { 
    id: "tennis", 
    name: "Tennis", 
    image: tennisThumb, 
    desc: "Precision lighting to enhance visibility for tennis players and spectators." 
  },
  { 
    id: "hockey", 
    name: "Hockey", 
    image: hockeyThumb, 
    desc: "Durable lighting solutions for ice hockey rinks and field hockey pitches." 
  },
  { 
    id: "multi-purpose-fields", 
    name: "Multi-purpose Fields", 
    image: multiPurposeThumb, 
    desc: "Flexible lighting systems for venues hosting various sports events." 
  },
  { 
    id: "volley-ball", 
    name: "Volley Ball", 
    image: volleyBallThumb, 
    desc: "Focused lighting for volleyball courts, improving playability." 
  },
  { 
    id: "pickle-ball", 
    name: "Pickle Ball", 
    image: pickleBallThumb, 
    desc: "Efficient and clear lighting for pickleball courts." 
  },
  { 
    id: "badminton-court", 
    name: "Badminton Court", 
    image: badmintonThumb, 
    desc: "Non-glare lighting for badminton courts, ensuring shuttlecock visibility." 
  },
  { 
    id: "squash-court", 
    name: "Squash Court", 
    image: squashThumb, 
    desc: "Intense and even lighting for squash courts, critical for fast-paced action." 
  },
];

const SportLightings = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">SPORTS LIGHTING</h2>
      <img src={sportsCategoryCardImg} alt="Sports Lighting Overview" className="product-main-image" />
      <p className="product-description">
        Our sports lighting solutions are engineered to meet international standards for optimal performance. We provide powerful and precise illumination for a wide range of sports applications, ensuring excellent visibility for players, spectators, and broadcasts. Explore our specialized solutions below.
      </p>

      <div className="product-sub-categories-grid">
        {sportsApplicationsData.map((sport) => (
          <div key={sport.id} className="product-card">
            <img src={sport.image} alt={sport.name} className="product-image" />
            <h3 className="product-title">{sport.name} Lighting</h3>
            <p className="product-description-card">{sport.desc}</p>
            <Link to={sport.id} className="product-button">
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

export default SportLightings;