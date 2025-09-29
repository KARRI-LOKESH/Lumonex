import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/Header.css";

// Import the logo image. This path should be correct based on your file structure.
import lumoLogo from '../assets/hero/lumo.jpg';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".mobile-panel") &&
        !e.target.closest(".mobile-menu-button")
      ) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo with image */}
        <div className="logo-container">
          <Link to="/">
            <img 
              src={lumoLogo} 
              alt="Lumonex Logo" 
              className="logo-image" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu" ref={menuRef}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About Us</Link>

          {/* Products Dropdown */}
          <div className={`dropdown ${openDropdown === "products" ? "open" : ""}`}>
            <button onClick={() => toggleDropdown("products")}>Products ▾</button>
            <div className="dropdown-content">
              <Link to="/products/led-lights" onClick={handleLinkClick}>Lighting</Link>
              <Link to="/products/poles" onClick={handleLinkClick}>Poles</Link>
              <Link to="/products/drivers" onClick={handleLinkClick}>Drivers</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className={`dropdown ${openDropdown === "services" ? "open" : ""}`}>
            <button onClick={() => toggleDropdown("services")}>Services ▾</button>
            <div className="dropdown-content">
              <Link to="/services/installation" onClick={handleLinkClick}>Installation</Link>
              <Link to="/services/consulting" onClick={handleLinkClick}>Consulting</Link>
              <Link to="/services/maintenance" onClick={handleLinkClick}>Maintenance</Link>
            </div>
          </div>

          <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link to="/designer" onClick={handleLinkClick}>Designer Content</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Side Panel */}
      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About Us</Link>

        {/* Mobile Products Dropdown */}
        <div className={`submenu ${openDropdown === "products" ? "open" : ""}`}>
          <p onClick={() => toggleDropdown("products")}>Products ▾</p>
          <div className="submenu-items">
            <Link to="/products/led-lights" onClick={handleLinkClick}>Lighting</Link>
            <Link to="/products/poles" onClick={handleLinkClick}>Poles</Link>
            <Link to="/products/drivers" onClick={handleLinkClick}>Drivers</Link>
          </div>
        </div>

        {/* Mobile Services Dropdown */}
        <div className={`submenu ${openDropdown === "services" ? "open" : ""}`}>
          <p onClick={() => toggleDropdown("services")}>Services ▾</p>
          <div className="submenu-items">
            <Link to="/services/installation" onClick={handleLinkClick}>Installation</Link>
            <Link to="/services/consulting" onClick={handleLinkClick}>Consulting</Link>
            <Link to="/services/maintenance" onClick={handleLinkClick}>Maintenance</Link>
          </div>
        </div>

        <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
        <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
        <Link to="/designer" onClick={handleLinkClick}>Designer Content</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;