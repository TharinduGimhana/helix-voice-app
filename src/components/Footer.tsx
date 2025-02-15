import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "10px", background: "#333", color: "#fff", textAlign: "center", marginTop: "20px" }}>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
