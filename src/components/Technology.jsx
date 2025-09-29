import React, { useState, useEffect } from "react";
import "../styles/Technology.css";

// Import images
import ledDrivers from "../assets/technology/leddriv1.webp";
import sswdImg from "../assets/technology/smarttrimg.jpg";
import solarWasteImg from "../assets/technology/slrwasteimg.webp";
import portableTowerImg from "../assets/technology/slrpowerimg.jpg";

const technologyItems = [
  {
    img: ledDrivers,
    title: "LED Drivers",
    content: "High-efficiency LED drivers for various applications.",
    detailImg: ledDrivers, // reuse main image
    fullContent: "Lumonex LED drivers are designed for optimal performance and energy savings. They feature a wide input voltage range, high power factor, and robust protection against over-voltage and short circuits. Ideal for both commercial and residential lighting solutions, our drivers ensure a long lifespan for your LED fixtures.",
  },
  {
    img: sswdImg,
    title: "Smart Sanitary Waste Disposal",
    content: "Automated and smart solutions for waste management.",
    detailImg: sswdImg, // reuse main image
    fullContent: "Our Smart Sanitary Waste Disposal system provides a hygienic and automated solution for waste management. Equipped with motion sensors, a sealed container, and odor-control technology, it is perfect for public restrooms, hospitals, and commercial spaces. The system reduces manual handling and promotes a cleaner environment.",
  },
  {
    img: solarWasteImg,
    title: "Solar Waste Management System",
    content: "Eco-friendly solar-powered waste disposal systems.",
    detailImg: solarWasteImg, // reuse main image
    fullContent: "The Solar Waste Management System uses renewable energy to power compactors and monitoring sensors, reducing the need for frequent collections. It is an intelligent, off-grid solution that helps municipalities and corporations manage waste more efficiently while reducing their carbon footprint.",
  },
  {
    img: portableTowerImg,
    title: "Solar Portable Mobile Lighting Tower",
    content: "Mobile solar lighting towers for industrial and outdoor use.",
    detailImg: portableTowerImg, // reuse main image
    fullContent: "Our Solar Portable Mobile Lighting Tower provides a powerful, temporary lighting solution for construction sites, emergency services, and remote locations. It's fully self-contained with high-efficiency solar panels and a battery bank, offering bright, reliable light without the need for a diesel generator.",
  },
];

const Technology = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  // This useEffect Hook is the solution to your problem.
  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedItem]);

  return (
    <section id="technology" className="technology-section">
      <h2 className="technology-heading">
        TECHNOLOGY <span className="highlight">FOR</span> PEOPLE
      </h2>
      <p className="technology-description">
        Lumonex Technologies Pvt. Ltd. is an Indian fast-growing company, specializing in Green Energy Products, headquartered in Bangalore, India.
      </p>

      <div className="technology-grid">
        {technologyItems.map((item, i) => (
          <div key={i} className="technology-card">
            <img src={item.img} alt={item.title} className="technology-image" />
            <h3 className="technology-title">{item.title}</h3>
            <p>{item.content}</p>
            <button className="technology-link" onClick={() => handleOpen(item)}>
              READ MORE
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>
              &times;
            </button>
            <img src={selectedItem.detailImg} alt={selectedItem.title} className="modal-image" />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.fullContent}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Technology;