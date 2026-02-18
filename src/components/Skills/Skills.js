import { useEffect } from 'react';
import './Skills.css';

function Skills() {
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

    document.querySelectorAll('.skill-category').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Security & SIEM',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
        </svg>
      ),
      skills: ['Wazuh, Splunk, Elastic', 'EDR/XDR, Threat Hunting', 'Suricata, Sysmon', 'Wireshark, Kali, Nmap'],
    },
    {
      title: 'DevOps & Automation',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"/>
        </svg>
      ),
      skills: ['OpenTofu, Terraform', 'SaltStack, Bash, PowerShell', 'HCL, Git/GitHub', 'GitKraken (Certified)'],
    },
    {
      title: 'Cloud & Virtualization',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18Z"/>
        </svg>
      ),
      skills: ['VMware, LXD', 'GCP, AWS', 'pfSense, IaC', 'Cyber Range Engineering'],
    },
    {
      title: 'Forensics & Tools',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9 13V19H7V13H9ZM15 15V19H17V15H15ZM11 11V19H13V11H11Z"/>
        </svg>
      ),
      skills: ['Ghidra, Binary Ninja', 'Autopsy, FTK Imager', 'SysInternals, Burp Suite', 'Python, C++, HTML/CSS'],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
