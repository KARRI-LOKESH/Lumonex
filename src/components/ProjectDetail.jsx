// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProjectDetail.css";

// 🔹 Import inner images for each project (Existing)
// Annamacharya
import ann1 from "../assets/projectpics/annama/1.jpg";
import ann2 from "../assets/projectpics/annama/2.jpg";
import ann3 from "../assets/projectpics/annama/3.jpg";
import ann4 from "../assets/projectpics/annama/4.jpg";

// CVR
import cvr1 from "../assets/projectpics/cvr/1.jpg";
import cvr2 from "../assets/projectpics/cvr/2.jpg";
import cvr3 from "../assets/projectpics/cvr/3.jpg";
import cvr4 from "../assets/projectpics/cvr/4.jpg";

// Garuda
import gar1 from "../assets/projectpics/garuda/1.jpg";
import gar2 from "../assets/projectpics/garuda/2.jpg";
import gar3 from "../assets/projectpics/garuda/3.jpg";
import gar4 from "../assets/projectpics/garuda/4.jpg";

// Pragathi
import pra1 from "../assets/projectpics/pragathi/1.jpg";
import pra2 from "../assets/projectpics/pragathi/2.jpg";
import pra3 from "../assets/projectpics/pragathi/3.jpg";
import pra4 from "../assets/projectpics/pragathi/4.jpg";

// Owaisi
import owa1 from "../assets/projectpics/owaisi/1.jpg";
import owa2 from "../assets/projectpics/owaisi/2.jpg";
import owa3 from "../assets/projectpics/owaisi/3.jpg";
import owa4 from "../assets/projectpics/owaisi/4.jpg";

// Pavilion
import pav1 from "../assets/projectpics/pavilion/1.jpg";
import pav2 from "../assets/projectpics/pavilion/2.jpg";
import pav3 from "../assets/projectpics/pavilion/3.jpg";
import pav4 from "../assets/projectpics/pavilion/4.jpg";

// Playmakers
import play1 from "../assets/projectpics/playmakers/1.jpg";
import play2 from "../assets/projectpics/playmakers/2.jpg";
import play3 from "../assets/projectpics/playmakers/3.jpg";
import play4 from "../assets/projectpics/playmakers/4.jpg";

// SCG
import scg1 from "../assets/projectpics/scg/1.jpg";
import scg2 from "../assets/projectpics/scg/2.jpg";
import scg3 from "../assets/projectpics/scg/3.jpg";
import scg4 from "../assets/projectpics/scg/4.jpg";

// Vardhaman
import vard1 from "../assets/projectpics/vardhaman/1.jpg";
import vard2 from "../assets/projectpics/vardhaman/2.jpg";
import vard3 from "../assets/projectpics/vardhaman/3.jpg";
import vard4 from "../assets/projectpics/vardhaman/4.jpg";


// 🔷 START OF NEW IMPORTS (Ashwin, DSA, Greyhounds, Waltair, World One)
// Ashwin Cricket Academy
import ash1 from "../assets/projectpics/ashwin/1.jpg";
import ash2 from "../assets/projectpics/ashwin/2.jpg";
import ash3 from "../assets/projectpics/ashwin/3.jpg";
import ash4 from "../assets/projectpics/ashwin/4.jpg";

// DSA
import dsa1 from "../assets/projectpics/dsa/1.jpg";
import dsa2 from "../assets/projectpics/dsa/2.jpg";
import dsa3 from "../assets/projectpics/dsa/3.jpg";
import dsa4 from "../assets/projectpics/dsa/4.jpg";

// Greyhounds
import grey1 from "../assets/projectpics/greyhounds/1.jpg";
import grey2 from "../assets/projectpics/greyhounds/2.jpg";
import grey3 from "../assets/projectpics/greyhounds/3.jpg";
import grey4 from "../assets/projectpics/greyhounds/4.jpg";

// Waltair Railway Ground
import wal1 from "../assets/projectpics/waltair/1.jpg";
import wal2 from "../assets/projectpics/waltair/2.jpg";
import wal3 from "../assets/projectpics/waltair/3.jpg";
import wal4 from "../assets/projectpics/waltair/4.jpg";

// World One School
import world1 from "../assets/projectpics/worldone/1.jpg";
import world2 from "../assets/projectpics/worldone/2.jpg";
import world3 from "../assets/projectpics/worldone/3.jpg";
import world4 from "../assets/projectpics/worldone/4.jpg";
// 🔷 END OF NEW IMPORTS


// 🔹 Map project IDs to their details
const projectDetails = {
    // Existing Projects
    annama: {
        title: "Annamacharya University",
        gallery: [ann1, ann2, ann3, ann4],
    },
    cvr: { title: "CVR Engineering College", gallery: [cvr1, cvr2, cvr3, cvr4] },
    garuda: { title: "Garuda Cricket Ground", gallery: [gar1, gar2, gar3, gar4] },
    pragathi: { title: "Pragathi Maidhan", gallery: [pra1, pra2, pra3, pra4] },
    owaisi: { title: "Owaisi Hospital Ground", gallery: [owa1, owa2, owa3, owa4] },
    pavilion: { title: "Pavilion Project", gallery: [pav1, pav2, pav3, pav4] },
    playmakers: {
        title: "Playmakers Academy",
        gallery: [play1, play2, play3, play4],
    },
    scg: { title: "SCG Cricket Ground", gallery: [scg1, scg2, scg3, scg4] },
    vardhaman: {
        title: "Vardhaman College",
        gallery: [vard1, vard2, vard3, vard4],
    },
    
    // 🔶 START OF NEW PROJECT DETAILS
    ashwin: {
        title: "Ashwin Cricket Academy",
        gallery: [ash1, ash2, ash3, ash4],
    },
    dsa: { 
        title: "DSA", 
        gallery: [dsa1, dsa2, dsa3, dsa4] 
    },
    greyhounds: {
        title: "Greyhounds",
        gallery: [grey1, grey2, grey3, grey4],
    },
    waltair: {
        title: "waltair railway ground",
        gallery: [wal1, wal2, wal3, wal4],
    },
    worldone: {
        title: "World One School",
        gallery: [world1, world2, world3, world4],
    },
    // 🔶 END OF NEW PROJECT DETAILS
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const detail = projectDetails[projectId];

    if (!detail) return <h2>Project Not Found</h2>;

    return (
        <div className="project-detail">
            <h2>{detail.title}</h2>
            <div className="gallery-grid">
                {detail.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${detail.title} ${i + 1}`} />
                ))}
            </div>
            <Link to="/projects" className="back-link">
                ← Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;