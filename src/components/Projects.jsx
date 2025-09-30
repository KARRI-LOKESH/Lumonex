// src/pages/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

// Import your images
import annama from "../assets/projectpics/annama.jpg";
import cvr from "../assets/projectpics/cvr.jpg";
import garuda from "../assets/projectpics/garuda.jpg";
import pragathi from "../assets/projectpics/pragathi.jpg";
import owaisi from "../assets/projectpics/owaisi.jpg";
import pavilion from "../assets/projectpics/pavilion.jpg";
import playmakers from "../assets/projectpics/playmakers.jpg";
import scg from "../assets/projectpics/scg.jpg";
import vardhaman from "../assets/projectpics/vardhaman.jpg";

// **START OF NEW IMPORTS** // You must create these image files in src/assets/projectpics/
import ashwin from "../assets/projectpics/ashwin.jpg";
import dsa from "../assets/projectpics/dsa.jpg";
import greyhounds from "../assets/projectpics/greyhounds.jpg";
import waltair from "../assets/projectpics/waltair.jpg";
import worldone from "../assets/projectpics/worldone.jpg";
// **END OF NEW IMPORTS**

// Project Data
const projectsData = [
  // Existing Projects
  { id: "annama", name: "Annamacharya University", image: annama },
  { id: "cvr", name: "CVR Engineering College", image: cvr },
  { id: "garuda", name: "Garuda Cricket Ground", image: garuda },
  { id: "pragathi", name: "Pragathi Maidhan", image: pragathi },
  { id: "owaisi", name: "Owaisi Cricket Ground", image: owaisi },
  { id: "pavilion", name: "Pavilion Cricket Ground", image: pavilion },
  { id: "playmakers", name: "Playmakers Cricket Ground", image: playmakers },
  { id: "scg", name: "SCG Cricket Ground", image: scg },
  { id: "vardhaman", name: "Vardhaman College", image: vardhaman },
  
  // **START OF NEW PROJECTS**
  { id: "ashwin", name: "Ashwin Cricket Academy", image: ashwin },
  { id: "dsa", name: "DSA", image: dsa },
  { id: "greyhounds", name: "Greyhounds", image: greyhounds },
  { id: "waltair", name: "waltair railway ground", image: waltair },
  { id: "worldone", name: "World One School", image: worldone },
  // **END OF NEW PROJECTS**
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">OUR PROJECTS</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;