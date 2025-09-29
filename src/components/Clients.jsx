import React from "react";
import "../styles/Clients.css";

// Import your project images
import annama from "../assets/projectpics/annama.jpg";
import cvr from "../assets/projectpics/cvr.jpg";
import garuda from "../assets/projectpics/garuda.jpg";
import pragathi from "../assets/projectpics/pragathi.jpg";
import owaisi from "../assets/projectpics/owaisi.jpg";
import pavilion from "../assets/projectpics/pavilion.jpg";
import playmakers from "../assets/projectpics/playmakers.jpg";
import scg from "../assets/projectpics/scg.jpg";
import vardhaman from "../assets/projectpics/vardhaman.jpg";

const Clients = () => {
  // Use the same project data you used in Projects.jsx
  const projectsData = [
    { id: "annama", name: "Annamacharya University", image: annama },
    { id: "cvr", name: "CVR Engineering College", image: cvr },
    { id: "garuda", name: "Garuda Cricket Ground", image: garuda },
    { id: "pragathi", name: "Pragathi Maidhan", image: pragathi },
    { id: "owaisi", name: "Owaisi Cricket Ground", image: owaisi },
    { id: "pavilion", name: "Pavilion Project", image: pavilion },
    { id: "playmakers", name: "Playmakers Academy", image: playmakers },
    { id: "scg", name: "SCG Cricket Ground", image: scg },
    { id: "vardhaman", name: "Vardhaman College", image: vardhaman },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-heading">Our Valued Clients</h2>
        <div className="logo-carousel-container">
          <div className="logo-carousel">
            {/* Main set */}
            {projectsData.map((project, index) => (
              <div key={index} className="client-item">
                <img
                  src={project.image}
                  alt={project.name}
                  className="client-logo"
                />
                <p className="client-name">{project.name}</p>
              </div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {projectsData.map((project, index) => (
              <div key={index + projectsData.length} className="client-item">
                <img
                  src={project.image}
                  alt={project.name}
                  className="client-logo"
                />
                <p className="client-name">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
