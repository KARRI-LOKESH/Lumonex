// src/pages/SportApplicationDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductItems.css"; // Reuse your existing CSS

// Corrected import paths
// All imports should now use "../assets/sports/"

import cricketImg1 from "../assets/sports/cricket_field_1.jpg";
import cricketImg2 from "../assets/sports/cricket_field_2.jpg";
import cricketImg3 from "../assets/sports/cricket_field_3.jpg";
import cricketImg4 from "../assets/sports/cricket_field_4.jpg";

// Football Images
import footballImg1 from "../assets/sports/football_1.jpg";
import footballImg2 from "../assets/sports/football_2.jpg";

// Basketball Images
import basketballImg1 from "../assets/sports/basketball_1.jpg";
import basketballImg2 from "../assets/sports/basketball_2.jpg";

// Tennis Images
import tennisImg1 from "../assets/sports/tennis_1.jpg";
import tennisImg2 from "../assets/sports/tennis_2.jpg";

// Hockey Images
import hockeyImg1 from "../assets/sports/hockey_1.jpg";
import hockeyImg2 from "../assets/sports/hockey_2.jpg";

// Multi-purpose Fields Images
import multiPurposeImg1 from "../assets/sports/multi_1.jpg";
import multiPurposeImg2 from "../assets/sports/multi_2.jpg";

// Volley Ball Images
import volleyBallImg1 from "../assets/sports/volley_1.jpg";
import volleyBallImg2 from "../assets/sports/volley_2.jpg";

// Pickle Ball Images
import pickleBallImg1 from "../assets/sports/pickle_1.jpg";
import pickleBallImg2 from "../assets/sports/pickle_2.jpg";

// Badminton Court Images
import badmintonImg1 from "../assets/sports/badminton_1.jpg";
import badmintonImg2 from "../assets/sports/badminton_2.jpg";

// Squash Court Images
import squashImg1 from "../assets/sports/squash_1.jpg";
import squashImg2 from "../assets/sports/squash_2.jpg";

const sportDetails = {
  "cricket-field": {
    title: "Cricket Field Lighting",
    description:
      "Experience unparalleled visibility on the cricket pitch with our state-of-the-art lighting systems. Designed to reduce glare and provide uniform illumination, ensuring every ball and player is clearly seen.",
    features: [
      "Glare-free illumination for players and spectators",
      "High color rendering for broadcast quality",
      "Weather-resistant and durable fixtures",
      "Energy-efficient LED technology",
      "Customizable layouts for various field sizes",
    ],
    gallery: [
      { src: cricketImg1, alt: "Cricket Field at Night" },
      { src: cricketImg2, alt: "Cricket Field Light Tower" },
      { src: cricketImg3, alt: "Close-up of Cricket Floodlight" },
      { src: cricketImg4, alt: "Cricketers Playing under Lights" },
    ],
  },
  "football": {
    title: "Football Stadium Lighting",
    description:
      "Our football lighting solutions deliver consistent, powerful light across the entire field. Optimized for high-speed play, they enhance player performance and spectator experience, meeting international broadcasting standards.",
    features: [
      "Uniform light distribution across the pitch",
      "Anti-glare design for clear vision",
      "Instant on/off and dimming capabilities",
      "Robust construction for extreme weather",
      "Compliance with FIFA lighting requirements",
    ],
    gallery: [
      { src: footballImg1, alt: "Football Stadium at Night" },
      { src: footballImg2, alt: "Football Field with Floodlights" },
    ],
  },
  "basketball": {
    title: "Basketball Court Lighting",
    description:
      "Bright and even lighting for indoor and outdoor basketball courts, ensuring precise visibility for fast-paced games.",
    features: ["Uniformity", "Low Glare", "Energy Saving"],
    gallery: [
      { src: basketballImg1, alt: "Indoor Basketball Court" },
      { src: basketballImg2, alt: "Outdoor Basketball Court" },
    ],
  },
  "tennis": {
    title: "Tennis Court Lighting",
    description:
      "Optimal lighting for tennis courts, providing clear visibility of the ball and lines for professional and recreational play.",
    features: ["Even Spread", "Shadow Reduction", "Player Comfort"],
    gallery: [
      { src: tennisImg1, alt: "Tennis Court at Night" },
      { src: tennisImg2, alt: "Tennis Player under Lights" },
    ],
  },
  "hockey": {
    title: "Hockey Rink Lighting",
    description:
      "Durable lighting solutions for ice hockey rinks and field hockey pitches, designed to handle extreme temperatures and provide consistent, high-intensity light.",
    features: [
      "Weather-resistant",
      "High Intensity",
      "Consistent Illumination",
    ],
    gallery: [
      { src: hockeyImg1, alt: "Ice Hockey Rink" },
      { src: hockeyImg2, alt: "Field Hockey Pitch" },
    ],
  },
  "multi-purpose-fields": {
    title: "Multi-purpose Field Lighting",
    description:
      "Flexible lighting systems for venues hosting various sports events, with adjustable settings to accommodate different sports from soccer to track and field.",
    features: [
      "Flexible Control",
      "Multi-sport Compatibility",
      "Adjustable Light Levels",
    ],
    gallery: [
      { src: multiPurposeImg1, alt: "Multi-purpose Field at Night" },
      { src: multiPurposeImg2, alt: "Running Track with Lights" },
    ],
  },
  "volley-ball": {
    title: "Volley Ball Court Lighting",
    description:
      "Focused lighting for volleyball courts, improving playability and spectator visibility. Our systems ensure minimal glare and uniform light distribution.",
    features: ["Uniform Lighting", "Low Glare", "Energy-Efficient"],
    gallery: [
      { src: volleyBallImg1, alt: "Volley Ball Court" },
      { src: volleyBallImg2, alt: "Beach Volley Ball at Night" },
    ],
  },
  "pickle-ball": {
    title: "Pickleball Court Lighting",
    description:
      "Efficient and clear lighting for pickleball courts, providing bright, flicker-free illumination critical for the fast-paced game.",
    features: ["Flicker-free", "Clear Visibility", "Durable"],
    gallery: [
      { src: pickleBallImg1, alt: "Pickleball Court" },
      { src: pickleBallImg2, alt: "Pickleball Court at Night" },
    ],
  },
  "badminton-court": {
    title: "Badminton Court Lighting",
    description:
      "Non-glare lighting for badminton courts, ensuring shuttlecock visibility against all backgrounds. Our solutions improve player comfort and reduce eye strain.",
    features: [
      "Non-glare",
      "Shuttlecock Visibility",
      "Eye Comfort",
    ],
    gallery: [
      { src: badmintonImg1, alt: "Badminton Court" },
      { src: badmintonImg2, alt: "Badminton Game under Lights" },
    ],
  },
  "squash-court": {
    title: "Squash Court Lighting",
    description:
      "Intense and even lighting for squash courts, critical for fast-paced action and ball tracking. Our systems minimize shadows and provide consistent illumination.",
    features: [
      "Even Lighting",
      "Shadow Reduction",
      "High Intensity",
    ],
    gallery: [
      { src: squashImg1, alt: "Squash Court" },
      { src: squashImg2, alt: "Squash Player under Lights" },
    ],
  },
};

const SportApplicationDetail = () => {
  const { sportType } = useParams();
  const detail = sportDetails[sportType];

  if (!detail) {
    return (
      <div className="product-page">
        <h2 className="product-title-heading">Sport Not Found</h2>
        <p className="product-description">
          The requested sport lighting detail could not be found.
        </p>
        <div className="back-link">
          <Link to="/products/led-lights/sports-lighting">
            ← Back to Sports Lighting
          </Link>
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
        <Link to="/products/led-lights/sports-lighting">
          ← Back to Sports Lighting
        </Link>
      </div>
    </div>
  );
};

export default SportApplicationDetail;