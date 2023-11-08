import React from "react";
import "./regdetails.css";
import { Link, useNavigate } from "react-router-dom";

const Regdetails = () => {
  return (
    <div className="container">
      <div id="create-account-txt">
        <h1>Create New Account</h1>
      </div>
      <div className="register-container">
        <form action="#" id="register-form">
          <input className="register-bg" type="text" placeholder="Username" />
          <input className="register-bg" type="text" placeholder="Email" />
          <div className="password-input">
            <input
              className="password-design"
              type="password"
              placeholder="Password"
            />
            <input
              className="password-design"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <Link
            to="/login"
            id="create-btn" >Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Regdetails;
