// src/components/Footer.js
import React from "react";
import flimlogo from "../components/flimlogo.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={flimlogo} alt="Flim Logo" className="footer-logo" />
            <p>Copyright 2026 Movies App</p>
        </footer>
    );
}

export default Footer;
