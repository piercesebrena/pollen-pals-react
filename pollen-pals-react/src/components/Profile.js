import React from 'react';

const Profile= () => {
    return (
      <div>Profile
        <div className="home-content">
  <div className="home-content-info">
    <div className="form">
      <h1>PROFILE</h1>
      <hr />
      <form action="action_page.php" method="post">
        <div className="container">
          <h1>PROFILE</h1>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required=""
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />
            Remember me
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
































      </div>
    )
  }



  export default Profile;