import React from 'react';

const Nav = () => {
    const handleSearchClick = () => {
        console.log("Search button clicked");
    };

    return (
        <nav>
            <div className="nav__container">
                <a href="/">
    
                </a>
                <ul className="nav__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Movie Titles</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><button className="nav__button" onClick={handleSearchClick}>Search Movie</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;