import React from 'react';
import flimlogo from "../components/flimlogo.png";


const Nav = () => {
    

    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={flimlogo} alt="Flim Logo" className="nav__logo" />
                </a>
                <ul className="nav__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Movie Titles</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;