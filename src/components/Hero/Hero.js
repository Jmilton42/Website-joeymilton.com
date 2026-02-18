import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Joey Milton</h1>
          <h2 className="hero-title">SOC Analyst & Cyber Range Engineer</h2>
          <p className="hero-description">
            Computer Science senior at Tennessee Tech specializing in Cybersecurity. CCDC National Finalist, 
            Security+ certified, and experienced in SIEM/EDR orchestration, incident response, and infrastructure automation.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cyber-animation">
            <div className="shield-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM12 11.99H18C17.47 15.11 15.72 17.77 12 18.93V12H6V6.3L12 4.19V11.99Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
