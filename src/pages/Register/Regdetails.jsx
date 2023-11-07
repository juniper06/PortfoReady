import React from 'react'
import "./regdetails.css"

const Regdetails = () => {
  return (
    <div className="container">
      <div id="create-account-txt">
        <h1>Create New Account</h1>
      </div>
          <div className="register-container">
              <form action="#">
                  <input type="text" placeholder='Username'/>
              </form>
      </div>
    </div>
  );
}

export default Regdetails