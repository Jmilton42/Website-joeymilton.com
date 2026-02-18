import { useEffect } from 'react';
import './Experience.css';

function Experience() {
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

    document.querySelectorAll('.timeline-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      date: 'Aug 2022 - Present',
      title: 'Jr. Cyber Range Engineer',
      company: 'Tennessee Tech - Cybersecurity Education, Research & Outreach Center',
      description: 'Building and maintaining large-scale cyber range infrastructure for cybersecurity education and training.',
      highlights: [
        'Integrating 400+ virtual machines into an Elastic stack to centralize logging and monitoring',
        'Building a Grafana dashboard to visualize and govern large-scale resource allocation and security telemetry',
        'Automating cyber range with LXD and OpenTofu for uniform security controls and repeatable validation',
        'Developing Go module for Windows to automate dynamic hostname/IP resolution',
        'Building reusable infrastructure templates supporting hands-on labs for 250+ students and 25+ faculty',
      ],
    },
    {
      date: 'Jan 2024 - Present',
      title: 'Lead SOC Analyst',
      company: 'Collegiate Cyber Defense Competition (CCDC)',
      description: 'Leading defensive security operations during live competition scenarios against professional Red Team engagements.',
      highlights: [
        '1st Place - 2026 Qualifier: Identified and neutralized malware during active Red Team attacks',
        'National Finalist - Competed as one of the top university teams in the U.S. (2025)',
        'Engineering Bash/PowerShell scripts to automate Wazuh, Suricata, and Sysmon deployment',
        'Performing real-time forensics and malware analysis to detect persistence and C2 callbacks',
        'Creating custom Sysmon configs and Wazuh decoders for high-fidelity monitoring',
      ],
    },
    {
      date: 'Jan 2023 - Present',
      title: 'Club Mentor',
      company: 'CyberEagles Club - Tennessee Tech',
      description: 'Leading and mentoring cybersecurity club members in technical skills and competition preparation.',
      highlights: [
        'Planning and leading regular club meetings balancing technical training with competition prep',
        'Designing and building hands-on labs for real-world cybersecurity skills',
        'Engineering and maintaining Cyber Range infrastructure for multi-team environments',
        'Mentoring peers in cybersecurity concepts across different skill levels',
      ],
    },
    {
      date: 'June 2022 - Oct 2024',
      title: 'Manager',
      company: 'Sonic Drive-In',
      description: 'Managed operations while providing on-site IT support for critical systems.',
      highlights: [
        'Resolved critical technical issues with POS systems, network connectivity, and digital displays',
        'Minimized downtime by rapidly diagnosing hardware/software issues under high-pressure conditions',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <ul>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
