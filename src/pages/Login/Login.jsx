import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div id="login-txt">
        <h1>Log in</h1>
      </div>
      <div className="login-container">
        <form action="#" id="login-form">
          <input type="text" placeholder="Username" className="input-bg" />
          <br />
          <br />
          <input type="password" placeholder="Password" className="input-bg" />
          <div className="btn-container">
            <button id="login-btn">Log in</button>
            <h3>or</h3>
            <button id="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
