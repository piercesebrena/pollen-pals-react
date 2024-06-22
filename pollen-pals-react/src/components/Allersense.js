import React from 'react';

const Allersense = () => {
    return (
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
}

export default Allersense;

