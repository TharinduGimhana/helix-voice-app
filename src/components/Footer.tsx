import "./Footer.css";
import logo from "../assets/images/home/logo.png";
import { SocialIcon } from 'react-social-icons'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-top">
      <div className="footer-container-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="HelixVoice Logo" className="footer-logo-img" />
          </div>
        </div>


        <div className="footer-info">
          <p><strong>Find us:</strong><br /> 8918 Clarkson Ave, Black<br /> Creek, BC, Canada V9J1B1</p>
        </div>

        <div className="footer-info">
          <p><strong>Working Hours:</strong><br />
            Monday - Friday <span>&nbsp;   </span>  <span>&nbsp;   </span> 8.00 am - 6.00 pm <br />
            Saturday - Sunday <span>&nbsp;   </span>  Contact via email
          </p>
        </div>
      </div>

      <div className="footer-container-middle">
        <div className="footer-bottom footer-middle">
          <h1>Ready to discuss with you!</h1>
          <a href="#"> Lets Talk</a>
        </div>

      </div>

      <div className="footer-bottom footer-social">
        <p className="right-style">©2025 HelixVoice</p>
        <a className="privacy-p" href="#">Privacy Policy</a>
        <p className="social-w">Follow us on <span>&nbsp;   </span> <span className="social-icon"><FaXTwitter size={22} /></span></p>
      </div>
    </footer>
  );
};

export default Footer;
