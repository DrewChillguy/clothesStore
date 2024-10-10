import React from "react";
import "./Footer.css";
import footerLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={footerLogo} />
        <p className="footer-brand">SHOPPER</p>
      </div>
      <div className="footer-link">
        <ul className="footer-nav">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
