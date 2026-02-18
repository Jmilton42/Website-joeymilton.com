import { useEffect } from 'react';
import './Projects.css';

function Projects() {
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

    document.querySelectorAll('.project-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: 'Cyber Range Infrastructure',
      tagline: 'Custom go modules and Terraform templates for large-scale cyber range deployment.',
      description: 'I developed Cyber Range Forge to automate the complex process of building and managing cybersecurity labs. Built primarily in Go, this project provides a framework for deploying programmable infrastructure across various platforms (Linux, Windows, OpenWrt). It serves as a central orchestrator for isolated network environments, making it an essential tool for rapid lab deployment, competition hosting, and security training.',
      tags: ['OpenTofu', 'LXD', 'Elastic', 'Grafana', 'Go', 'IaC'],
      badges: [
        { type: 'active', label: 'ACTIVE' },
        { type: 'category', label: 'Infrastructure' },
      ],
      link: 'https://github.com/Jmilton42/Cyber_Range',
    },
    {
      name: 'CCDC Automation Scripts',
      tagline: 'Automated SIEM/IDS deployment scripts for rapid defensive security setup.',
      description: 'Engineered Bash and PowerShell scripts to automate Wazuh (SIEM), Suricata (IDS), and Sysmon deployment across Linux and Windows fleets. Custom Sysmon configs and Wazuh decoders for high-fidelity monitoring during live competition scenarios.',
      tags: ['Bash', 'PowerShell', 'Wazuh', 'Splunk', 'Suricata', 'Sysmon'],
      badges: [
        { type: 'active', label: 'ACTIVE' },
        { type: 'category', label: 'Defense' },
      ],
      link: 'https://github.com/Jmilton42/SOC-scripts',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A curated selection of work reflecting my focus on security tooling, infrastructure design, and offensive security practices.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-badges">
                  {project.badges.map((badge, bIndex) => (
                    <span className={`badge badge-${badge.type}`} key={bIndex}>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="project-tagline">{project.tagline}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span className="tag" key={tIndex}>{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
