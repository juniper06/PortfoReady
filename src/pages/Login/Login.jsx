import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

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
              <Link id="home-link" to="/home">Log in</Link>
            <h3>or</h3>
              <Link id="signup-link" to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
