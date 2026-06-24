// src/components/Footer.js
import React from "react";
import ngflimlogo from "../components/ngflimlogo.jpg";

function Footer() {
    return (
        <footer className="footer">
            <img src={ngflimlogo} alt="NGFlim Logo" className="footer-logo" />
            <p>Copyright 2026 Movies App</p>
        </footer>
    );
}

export default Footer;
