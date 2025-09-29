// src/pages/Drivers.jsx

import React from "react";
import { Link } from "react-router-dom";

// Main image for the Drivers category (you'll need to update this path)
import driversCategoryImg from "../assets/sectorscar/drivers.webp";

// ✅ Import specific images for each driver type
// (You will need to create and place these images in your assets/drivers folder)
import daliDriverImg from "../assets/drivers/dali.webp";
import dmxDriverImg from "../assets/drivers/dmx.webp";
import dimmingDriverImg from "../assets/drivers/dimming.webp";
import triacDriverImg from "../assets/drivers/triac.webp";
import bluetoothDriverImg from "../assets/drivers/bluetooth.webp";
import zigbeeDriverImg from "../assets/drivers/zigbee.webp";

// Array of objects with content for each driver sub-category
const driverItems = [
  {
    to: "dali-drivers",
    name: "DALI Drivers",
    image: daliDriverImg,
    desc: "Digital Addressable Lighting Interface drivers for advanced control."
  },
  {
    to: "dmx-drivers",
    name: "DMX Drivers",
    image: dmxDriverImg,
    desc: "Drivers for dynamic lighting control, common in stage and theatrical setups."
  },
  {
    to: "0-10v-drivers",
    name: "0-10V / 1-10V Drivers",
    image: dimmingDriverImg,
    desc: "Industry-standard drivers for smooth, analog dimming functionality."
  },
  {
    to: "triac-phase-cut-drivers",
    name: "Triac/Phase Cut Drivers",
    image: triacDriverImg,
    desc: "Simple and common drivers for basic phase-cut dimming."
  },
  {
    to: "bluetooth-ble-mesh-drivers",
    name: "Bluetooth (BLE Mesh) Drivers",
    image: bluetoothDriverImg,
    desc: "Wireless drivers for smart lighting control via Bluetooth technology."
  },
  {
    to: "zigbee-drivers",
    name: "Zigbee Drivers",
    image: zigbeeDriverImg,
    desc: "Wireless drivers using Zigbee protocol for integrated smart home systems."
  },
];

const Drivers = () => {
  return (
    <div className="product-page">
      <h2 className="product-title-heading">DRIVERS</h2>
      <img src={driversCategoryImg} alt="Lighting Drivers" className="product-main-image" />
      <p className="product-description">
        Our range of high-performance drivers ensures optimal functionality for all lighting applications. From simple dimming to complex automation, our drivers provide the precise control you need for your lighting systems.
      </p>
      
      {/* Grid of product cards, similar to your other pages */}
      <div className="product-sub-categories-grid">
        {driverItems.map((item) => (
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

export default Drivers;