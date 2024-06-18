import React from 'react';

const Contact= () => {
    return (
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
    );
  }



  export default Contact;