import "./Footer.css";
import logo from "../assets/images/home/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Logo */}
        <div className="footer-brand">
        <div className="footer-logo">
          <img src={logo} alt="HelixVoice Logo" className="footer-logo-img" />
        </div>
        </div>

        {/* Address and Working Hours */}
        <div className="footer-info">
          <p><strong>Find us:</strong><br /> 8918 Clarkson Ave, Black Creek, BC, Canada V9J1B1</p>
          <p><strong>Working Hours:</strong><br /> 
            Monday - Friday: 8.00 am - 6.00 pm <br />
            Saturday - Sunday: Contact via email
          </p>
        </div>

        {/* Contact Button */}
        <div className="footer-contact">
          <button className="contact-btn">Let's Talk</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>©2025 HelixVoice</p>
        <a href="#">Privacy Policy</a>
        <p>Follow us on <span className="social-icon">X</span></p>
      </div>
    </footer>
  );
};

export default Footer;
