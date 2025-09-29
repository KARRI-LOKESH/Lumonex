import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SectorsCarousel from "./components/SectorsCarousel";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import SportApplicationDetail from "./pages/SportApplicationDetail.jsx";
import CommercialLighting from "./pages/CommercialLighting.jsx";
import SportLightings from "./pages/SportLightings.jsx";
import ArchitecturalLightingDetail from "./pages/ArchitecturalLightingDetail.jsx";
// Product and Service Page Imports
import Lighting from "./pages/Lighting";
import DriversLighting from "./pages/DriversLighting.jsx";
import Poles from "./pages/Poles";
import Contact from "./components/Contact";
import Designer from "./components/Designer";
import Drivers from "./pages/Drivers";
import PolesLighting from "./pages/PolesLighting.jsx";
import Blog from "./components/Blog";
import ProjectDetail from "./components/ProjectDetail.jsx";

// New Import: Assuming you have created this component for the detail page.
import CommercialTypeDetail from "./pages/CommercialTypeDetail.jsx";
import ArchitecturalLighting from "./pages/ArchitecturalLighting.jsx";

// Component to represent the full home page layout
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <SectorsCarousel />
      <Products />
      <Technology />
      <Projects />
      <Clients />
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Main Navigation Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/contact" element={<Contact />} />
                  {/* Product Detail Routes */}
          <Route path="/products/led-lights" element={<Lighting />} />
          <Route path="/products/poles" element={<Poles />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<div><h2>Blog Post Detail Page</h2><p>This is a placeholder for individual blog post details.</p></div>} />
          <Route path="/products/drivers" element={<Drivers />} />
          <Route path="/products/led-lights/sports-lighting" element={<SportLightings />} />
          <Route
            path="/products/led-lights/sports-lighting/:sportType"
            element={<SportApplicationDetail />}
          />

          {/* The correct order for commercial lighting routes */}
          <Route path="/products/led-lights/commercial-lighting" element={<CommercialLighting />} />
          <Route
            path="/products/led-lights/commercial-lighting/:commercialType"
            element={<CommercialTypeDetail />}
          />
          <Route path="/products/drivers/:driverId" element={<DriversLighting />} />
          <Route
    path="/products/led-lights/architectural-lighting"
    element={<ArchitecturalLighting />}
  />
  <Route
    path="/products/led-lights/architectural-lighting/:categoryId"
    element={<ArchitecturalLightingDetail />}
  />
  <Route path="/products/poles/:poleType" element={<PolesLighting />} />

  <Route path="/projects/:projectId" element={<ProjectDetail />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<div><h1>404 Not Found</h1><p>The page you're looking for does not exist.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;