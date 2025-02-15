import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/home/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="HelixVoice Logo" className="logo-img" />
        </div>

        {/* Toggle Button */}
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation Links & Contact Button Inside */}
        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/product" className={location.pathname === "/product" ? "active" : ""} onClick={() => setIsOpen(false)}>
                PRODUCT
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className={location.pathname === "/testimonials" ? "active" : ""} onClick={() => setIsOpen(false)}>
                TESTIMONIALS
              </Link>
            </li>
          </ul>

          {/* Contact Button - Shown Inside Toggle Menu on Mobile */}
          <Link to="/contact" className={`contact-btn ${location.pathname === "/contact" ? "active-btn" : ""}`} onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
