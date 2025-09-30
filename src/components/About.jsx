import React from 'react';
import '../styles/About.css'; // Link to the external stylesheet

function About() {
  return (
    <section id="about" className="about-us-section">

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h2 className="about-hero-title">
            Illuminating Your World, One Light at a Time
          </h2>
          <p className="about-hero-subtitle">
            At Lumonex, we are more than just a lighting company; we are innovators dedicated to creating a brighter, smarter, and more sustainable future. Our passion for light drives us to deliver solutions that not only illuminate but also inspire.
          </p>
        </div>
        <div className="about-hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop" 
            alt="Innovative team collaboration" 
            className="about-hero-image" 
          />
        </div>
      </div>

      <hr className="divider" />

      {/* Mission & Vision Section with Emojis */}
      <div className="mission-vision-container">
        <div className="mission-card">
          <h3 className="card-title">Our Mission ✨</h3>
          <p className="card-text">
            To empower our customers with state-of-the-art lighting technology that is energy-efficient, reliable, and tailored to their unique needs. We strive to be a global leader in lighting solutions, known for our quality and exceptional service.
          </p>
        </div>
        <div className="vision-card">
          <h3 className="card-title">Our Vision 💡</h3>
          <p className="card-text">
            To be the definitive choice for innovative lighting, setting new standards in design, functionality, and sustainability. We envision a world where light is a seamless extension of our daily lives, enhancing comfort and productivity.
          </p>
        </div>
      </div>

      <hr className="divider" />

      {/* Why Choose Us Section */}
      <div className="why-us-container">
        <h3 className="why-us-title">Why Choose Lumonex?</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">💡</div>
            <h4 className="benefit-title">Innovative Technology</h4>
            <p className="benefit-text">
              We stay ahead of the curve, offering the latest in LED and smart lighting systems.
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✅</div>
            <h4 className="benefit-title">Unmatched Quality</h4>
            <p className="benefit-text">
              Every product undergoes rigorous testing to ensure durability and top performance.
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌍</div>
            <h4 className="benefit-title">Sustainable Solutions</h4>
            <p className="benefit-text">
              Our energy-efficient products help reduce your carbon footprint and save on energy costs.
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Team Section */}
      <div className="team-container">
        <h3 className="team-title">Meet Our Team</h3>
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734b584?q=80&w=2876&auto=format&fit=crop" 
              alt="Team Member Jane Doe" 
              className="team-member-photo" 
            />
            <h4 className="team-member-name">Jane Doe</h4>
            <p className="team-member-role">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2874&auto=format&fit=crop" 
              alt="Team Member John Smith" 
              className="team-member-photo" 
            />
            <h4 className="team-member-name">John Smith</h4>
            <p className="team-member-role">Head of Engineering</p>
          </div>
          {/* Team Member 3 */}
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1544723795-3fb6469e0468?q=80&w=2940&auto=format&fit=crop" 
              alt="Team Member Sarah Chen" 
              className="team-member-photo" 
            />
            <h4 className="team-member-name">Sarah Chen</h4>
            <p className="team-member-role">Chief Designer</p>
          </div>
          {/* Team Member 4 */}
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2940&auto=format&fit=crop" 
              alt="Team Member Alex Johnson" 
              className="team-member-photo" 
            />
            <h4 className="team-member-name">KS REDDY</h4>
            <p className="team-member-role">Marketing Director</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;