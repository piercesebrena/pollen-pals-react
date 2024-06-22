import React from 'react';

const Home= () => {
    return (
      <div className="a-container">
      <span className="box-container">
        <span className="box1">
          <a href="about.html" target="_blank" className="box-link">
            <h1 className="heading">About</h1>
            <img src="public/images/About LOGOS.png" alt="About logo" />
            <p>My journey with Pollen Pals.</p>
            <span className="btn">Read More</span>
          </a>
        </span>
        <span className="box1">
          <a href="allersense.html" target="_blank" className="box-link">
            <h1 className="heading">Allersense</h1>
            <img src="public/images/Allersense LOGOS.png" alt="Allersense logo" />
            <p>Learn more about Allersense.</p>
            <span className="btn">Read More</span>
          </a>
        </span>
        <span className="box1">
          <a href="hub.html" target="_blank" className="box-link">
            <h1 className="heading">Hub</h1>
            <img src="public/images/Hub LOGOS.png" alt="Hub logo" />
            <p>Discover our hub of resources.</p>
            <span className="btn">Read More</span>
          </a>
        </span>
        <span className="box1">
          <a href="profile.html" target="_blank" className="box-link">
            <h1 className="heading">Profile/Login</h1>
            <img src="public/images/Profile LOGOS.png" alt="Profile logo" />
            <p>Access your profile or login.</p>
            <span className="btn">Read More</span>
          </a>
        </span>
        <span className="box1">
          <a href="contact.html" target="_blank" className="box-link">
            <h1 className="heading">Contact</h1>
            <img src="public/images/Contact LOGOS.png" alt="Contact logo" />
            <p>Get in touch with us.</p>
            <span className="btn">Read More</span>
          </a>
        </span>
      </span>
    </div>
  );
}


  export default Home;