// import './App.css';
// import Header from "./components/Header";
import React from "react";
import React, { useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import Header from "./shared/Header";
import About from "./components/About";
import Home from "./components/Home";
import Allersense from "./components/Allersense";
import Contact from "./components/Contact";
import Hub from "./components/Hub";
import Profile from "./components/Profile";
import Footer from "./shared/Footer";



const Home = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/home';
          };
          const options = {
              method: 'GET',
              headers: {'Content-Type': 'application/json'}
          };
          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('The home data was fetched successfully:', data);
          } catch (error) {
              console.error('There was an error fetching home data:', error);
          }
        });

  return (
      <div className="home">
          <h1>Home Component</h1>
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
 
      </div>  
  );
}

export default Home;
 
const About = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/about';
      };
          const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('The about data was fetched successfully:', data);
          } catch (error) {
              console.error('There was an error fetching about data:', error);
          }
      };
  }, 
  );

  return (
      <div className="about">
          <h1>ABOUT</h1>
  <span className="about-container">
    <p>Tired of your allergies coming and going in your daily life? Me too. That's why I created Pollen Pals, a community for those fed up with the constant battle against seasonal allergies. Pollen Pals offers a supportive network where you can connect with others who understand your struggle, share experiences, and find comfort in knowing you're not alone. Get practical advice, tips, and access to the latest treatments, along with real-time pollen and weather alerts to help you manage your symptoms. Track your symptoms, log medications, and find personalized solutions. Join discussions, support groups, and local or virtual events to improve your quality of life. Pollen Pals is dedicated to making life easier for those with seasonal allergies. Join us today and take control of your allergy journey!</p>
  </span>
</div>

 
</div>  
);
}




const Allersense = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/allersense';
      }
          const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

          };
          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('Allersense data fetched successfully:', data);
          } catch (error) {
              console.error('Error fetching allersense data:', error);
          }
      };

      fetch();
  },
  );

  return (
      <div className="allersense">
          <h1>Allersense Component</h1>
          <div className="home-content">
      <span className="home-content-info">
        <span className="container-a">
          <h1>ALLERSENSE</h1>
          <hr />
          <p>
            Allersense is a real-life allergy tracker for individuals who are looking to take control of their seasonal allergies and improve their quality of life. Users using this tracker are able to track their symptoms, wherever they live, on a daily basis. The user can implement details such as potential triggers, severity of the symptoms, and what medications they used that day. Other users will be able to connect and share their symptoms as well in order to connect and find possible solutions. There are also doctor recommendations as well as over-the-counter medication recommendations.
          </p>
        </span>
        <h2>What would you like to do today?</h2>
        <a href="allersense.html" target="blank">
          <span className="tracker">
            <h1>MOOD CHECKER</h1>
            <span className="mood-icons">
              <button className="mood-icon happy" aria-label="Happy" title="Happy">
                <i className="far fa-smile"></i>
              </button>
              <button className="mood-icon neutral" aria-label="Neutral" title="Neutral">
                <i className="far fa-meh"></i>
              </button>
              <button className="mood-icon sad" aria-label="Sad" title="Sad">
                <i className="far fa-frown"></i>
              </button>
            </span>
            <span className="selected-mood">
              <p>Your current mood:</p>
              <span className="current-mood"></span>
            </span>
          </span>
        </a>
        <p>How are <u><b>YOU</b></u> and your allergies doing today?</p>
        <img src="public/images/MOOD 2.png" alt="Mood" />
        <span className="fa-regular">
          <i className="fa-face-smile"></i>
          <i className="fa-face-meh"></i>
          <i className="fa-face-angry"></i>
        </span>
        <br />
        <a href="allersense.html" target="blank">
          <span className="tracker">
            <h1>LOCATION</h1>
            <p>Where in the world are <b><u>YOU</u></b> today?</p>
            <img src="public/images/LOCAL design-2.png" alt="Location" />
            <p>Locate the same allergy symptoms people have.</p>
          </span>
        </a>
        <span className="tracker">
          <h2>Allergy Symptoms Checklist</h2>
          <ul>
            <li><label><input type="checkbox" /> Runny nose</label></li>
            <li><label><input type="checkbox" /> Sneezing</label></li>
            <li><label><input type="checkbox" /> Itchy eyes</label></li>
            <li><label><input type="checkbox" /> Coughing</label></li>
            <li><label><input type="checkbox" /> Wheezing</label></li>
            <li><label><input type="checkbox" /> Shortness of breath</label></li>
            <li><label><input type="checkbox" /> Skin rash</label></li>
            <li><label><input type="checkbox" /> Fatigue</label></li>
            <li><label><input type="checkbox" /> Headache</label></li>
            <li><label><input type="checkbox" /> Difficulty concentrating</label></li>
          </ul>
        </span>
      </span>
    </div>
  );
};

      </div>


const Contact = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/contact';
          const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

          }
          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('Contact data fetched successfully:', data);
          } catch (error) {
              console.error('Error fetching contact data:', error);
          }
      };

      fetch();
  }, []);

  return (
      <div className="contact">
          <div className="home-content">
      <div className="home-content-info">
      <div className="container-con">
        <h1>COME SAY HI!!!</h1>
      <h1>
        <strong>LOGIN</strong>
      </h1>
      <form action="#">
        <label htmlFor="name">First and Last Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your first and last name"
        />
        <br />
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <label htmlFor="bio">Bio:</label>
        <input
          type="text"
          id="bio"
          name="bio"
          placeholder="Tell me about yourself."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
    
  



      </div>
  );
}

export default Contact;



const Hub = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/hub';
          const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

          }
          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('Hub data fetched successfully:', data);
          } catch (error) {
              console.error('Error fetching hub data:', error);
          }
      };

      fetch();
  }, []);

  return (
    <div className="home-content">
        <span className="home-content-info">
          <span className="container-con">
            <h1>HUB</h1>
            <hr />
            <p>
              The hub of the website is where all of the curated collections of
              articles, research, thoughts, media, etc., go into this area of the
              website. Users will be able to find information about allergies, what
              they are, and how to understand them better. Users are able to
              congregate with other users to provide useful advice between each
              other.
            </p>
          </span>
        </span>
      </div>
  );
}
 
export default Hub;



const Profile  = () => {
  useEffect(() => {
      const fetch = async () => {
          const url = 'http://localhost:8080/profile';
          const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

          }
          try {
              const response = await fetch(url, options);

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              console.log('The profile data fetched successfully:', data);
          } catch (error) {
              console.error('There was an error fetching profile data:', error);
          }
      };

      fetch();
  }, []);

  return (
    <span className="container">
      <h1>Login</h1>
      <br />
      <form action="profile.html" method="post">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <br />
    </span>
  );
}


export default Profile;

