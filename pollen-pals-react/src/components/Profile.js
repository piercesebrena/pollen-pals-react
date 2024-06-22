import React from 'react';

const Profile= () => {
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




























   
  