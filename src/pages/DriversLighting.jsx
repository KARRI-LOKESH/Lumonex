// src/pages/DriversLighting.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/DriversLighting.css";

// ✅ Import inner images for each driver type
// (Make sure you create these folders and images in assets/drivers/<driver-name>/)

import dali1 from "../assets/drivers/dali1.jpg";
import dali2 from "../assets/drivers/dali2.jpg";

import dmx1 from "../assets/drivers/dmx1.jpg";
import dmx2 from "../assets/drivers/dmx2.jpg";

import dim1 from "../assets/drivers/dimming1.jpg";
import dim2 from "../assets/drivers/dimming2.jpg";

import triac1 from "../assets/drivers/triac1.jpg";
import triac2 from "../assets/drivers/triac2.jpg";

import bt1 from "../assets/drivers/bluetooth1.jpg";
import bt2 from "../assets/drivers/bluetooth2.jpg";

import zig1 from "../assets/drivers/zigbee1.jpg";
import zig2 from "../assets/drivers/zigbee2.jpg";

// ✅ Map driver IDs to their details
const driverDetails = {
  "dali-drivers": {
    title: "DALI Drivers",
    description: "Advanced Digital Addressable Lighting Interface drivers for precise lighting control in commercial and architectural projects.",
    gallery: [dali1, dali2],
  },
  "dmx-drivers": {
    title: "DMX Drivers",
    description: "Drivers designed for stage, event, and architectural lighting where dynamic control is required.",
    gallery: [dmx1, dmx2],
  },
  "0-10v-drivers": {
    title: "0-10V / 1-10V Drivers",
    description: "Reliable drivers for smooth, analog dimming widely used in industry applications.",
    gallery: [dim1, dim2],
  },
  "triac-phase-cut-drivers": {
    title: "Triac / Phase Cut Drivers",
    description: "Simple phase-cut dimming drivers for residential and basic commercial lighting.",
    gallery: [triac1, triac2],
  },
  "bluetooth-ble-mesh-drivers": {
    title: "Bluetooth (BLE Mesh) Drivers",
    description: "Wireless smart lighting control drivers using Bluetooth Mesh technology.",
    gallery: [bt1, bt2],
  },
  "zigbee-drivers": {
    title: "Zigbee Drivers",
    description: "Smart home and IoT-compatible drivers that integrate with Zigbee-based ecosystems.",
    gallery: [zig1, zig2],
  },
};

const DriversLighting = () => {
  const { driverId } = useParams();
  const detail = driverDetails[driverId];

  if (!detail) return <h2 style={{ textAlign: "center" }}>Driver Not Found</h2>;

  return (
    <div className="driver-detail-page">
      <h2 className="driver-title">{detail.title}</h2>
      <p className="driver-description">{detail.description}</p>

      <div className="driver-gallery">
        {detail.gallery.map((img, i) => (
          <img key={i} src={img} alt={`${detail.title} ${i + 1}`} className="driver-image" />
        ))}
      </div>

      <div className="back-link">
        <Link to="/products/drivers">← Back to Drivers</Link>
      </div>
    </div>
  );
};

export default DriversLighting;
