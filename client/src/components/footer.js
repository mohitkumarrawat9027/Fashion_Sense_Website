// Footer.jsx
import React from 'react';
// import './styling/Footer.css';

function Footer() {
  return (
    <footer
  style={{
    backgroundColor: "#f8f8f8",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    marginTop: "40px",
  }}
>
  <div style={{ marginBottom: "8px" }}>
    © 2025 Duxter Clothing. All rights reserved.
  </div>

  <div>
    <a href="/about" style={{ color: "#555", textDecoration: "none", margin: "0 8px" }}>
      About
    </a>
    |
    <a href="/contact" style={{ color: "#555", textDecoration: "none", margin: "0 8px" }}>
      Contact
    </a>
    |
    <a href="/privacy" style={{ color: "#555", textDecoration: "none", margin: "0 8px" }}>
      Privacy Policy
    </a>
  </div>
</footer>
  );
}

export default Footer;