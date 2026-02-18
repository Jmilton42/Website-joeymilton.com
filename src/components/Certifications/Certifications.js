import './Certifications.css';

function Certifications() {
  // Add new certifications here - just copy the object structure
  const certifications = [
    {
      id: 1,
      title: 'Security+',
      image: '/images/certifications/comptia.png', // Add your certification image in the public/images/certifications folder
      issuer: 'CompTIA',
      date: 'February 2026',
      verificationLink: 'https://cp.certmetrics.com/CompTIA/en/public/verify/credential/76697f98e1204d32983ad94867abf2db', // Add verification URL when available
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className={`cert-grid ${certifications.length === 1 ? 'cert-single' : ''}`}>
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card-large">
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
              {cert.verificationLink && (
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify"
                  aria-label={`Verify ${cert.title} certification`}
                >
                  ✓ Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
