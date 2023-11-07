import React from "react";
import "./register.css";
import Studentimg from '../../assets/student-logo.png'
import Employerimg from '../../assets/employer-logo.png'

const Register = () => {
  return (
    <div className="container">
      <div id="select-user">
        <h1>Select User Type</h1>
      </div>
      <div className="register-container">
        <div className="select-btns">
          <div className="student-container">
            <div className="student-btn">
              <button><img src={Studentimg} alt="sutudent logo" /></button>
            </div>
            <h2>Student</h2>
          </div>
          <div className="employer-container">
            <div className="employer-btn">
              <button><img src={Employerimg} alt="employer logo" /></button>
            </div>
            <h2>Employer</h2>
          </div>
        </div>
        <div className="next-btn"><button>Next</button></div>
      </div>
    </div>
  );
};

export default Register;
