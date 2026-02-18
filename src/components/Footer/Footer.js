import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Joey Milton. All rights reserved.</p>
        <p className="footer-tagline">CCDC National Finalist | Security+ Certified | Cyber Range Engineer</p>
      </div>
    </footer>
  );
}

export default Footer;
