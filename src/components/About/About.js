import './About.css';

function About() {
  const stats = [
    { number: 'Top 1%', label: 'NCL Team Games' },
    { number: '400+', label: 'VMs Integrated' },
    { number: '1st', label: 'CCDC Qualifier' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/images/assests/Avatar.png" alt="Joey Milton" className="avatar-img" />
            </div>
            <div className="certification-badge">
              <span className="cert-text">Open To Work</span>
            </div>
            <div className="education-card">
              <h3>Education</h3>
              <div className="edu-item">
                <span className="edu-degree">B.S. Computer Science</span>
                <span className="edu-school">Tennessee Technological University</span>
                <span className="edu-detail">Concentration: Information Assurance & Cyber Security</span>
                <span className="edu-date">Expected: May 2026</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a Computer Science senior at Tennessee Tech, specializing in Cybersecurity and SOC operations. 
              As a national CCDC finalist, I actively monitor, defend, and automate security telemetry across complex networks.
            </p>
            <p>
              I orchestrate Security Information and Event Management (SIEM) and Endpoint Detection and Response (EDR) tools,
              and lead incident response efforts, improving visibility through custom automation and centralized logging.
            </p>
            <p>
              Beyond cybersecurity, I served as a volunteer firefighter for 5+ years, logging over 400 service hours 
              in a single year and earning Rookie of the Year recognition. I succeed under pressure and bring discipline, 
              teamwork, and quick decision-making to every challenge.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
