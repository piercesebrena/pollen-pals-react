import React from 'react';

const Header=() => {
  return (
  <div>
    <h1>Header</h1>
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <img
            src="public/images/Simple Illustrative Cute Plant Notebook Book Cover.png"
            alt="pollen"
            width="250px"
          />
          <div className="header__logo-overlay"></div>
          <ul className="header__menu">
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="allersense.html">Allersense</a>
            </li>
            <li>
              <a href="hub.html">Hub</a>
            </li>
            <li>
              <a href="profile.html">Profile</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
    )
  }
  export default Header;




