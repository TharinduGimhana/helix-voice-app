import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
      <Link to="/product" style={{ color: "#fff" }}>Product</Link>
      <Link to="/about" style={{ marginRight: "15px", color: "#fff" }}>About Us</Link>
      <Link to="/testimonials" style={{ color: "#fff" }}>Testimonials</Link>
      <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
    </nav>
  );
};

export default Header;
