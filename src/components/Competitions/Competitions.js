import { useEffect } from 'react';
import './Competitions.css';

function Competitions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.competition-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const competitions = [
    {
      featured: true,
      title: 'Collegiate Cyber Defense Competition',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
        </svg>
      ),
      description: (
        <>
           <strong>1st Place - 2026 Qualifier</strong><br />
           <strong>National Finalist 2025</strong> - One of the top university teams in the U.S.<br />
          Lead SOC Analyst defending against live Red Team engagements with automated SIEM/IDS deployment.
        </>
      ),
      tags: ['Wazuh', 'Suricata', 'sysmon', 'auditd', 'Incident Response'],
    },
    {
      featured: false,
      title: 'National Cyber League',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17ZM12 10C13.1 10 14 9.1 14 8S13.1 6 12 6 10 6.9 10 8 10.9 10 12 10ZM6 14V16H18V14C18 12 14 10.9 12 10.9S6 12 6 14Z"/>
        </svg>
      ),
      description: (
        <>
          <strong>Top 4%</strong> - Fall '24 Solo Games<br />
          <strong>Top 1%</strong> - Spring '23 Team Games<br />
          Solved challenges in Forensics, Cryptography, Password Cracking, and Network Traffic Analysis.
        </>
      ),
      tags: ['Forensics', 'Cryptography', 'Wireshark', 'Hashcat'],
    },
    {
      featured: false,
      title: 'DoD Cyber Sentinel CTF',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
        </svg>
      ),
      description: (
        <>
          <strong>Placed 88th of 2,100+</strong> participants nationwide<br />
          Department of Defense-sponsored competition covering OSINT, forensics, malware/RE, and web security.
        </>
      ),
      tags: ['OSINT', 'Reverse Engineering', 'Web Security'],
    },
  ];

  return (
    <section id="competitions" className="section competitions">
      <div className="container">
        <h2 className="section-title">Competitions & Achievements</h2>
        <div className="competitions-grid">
          {competitions.map((comp, index) => (
            <div className={`competition-card ${comp.featured ? 'featured' : ''}`} key={index}>
              <div className="competition-icon">{comp.icon}</div>
              <h3>{comp.title}</h3>
              <p>{comp.description}</p>
              <div className="competition-tags">
                {comp.tags.map((tag, tIndex) => (
                  <span className="tag" key={tIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competitions;
