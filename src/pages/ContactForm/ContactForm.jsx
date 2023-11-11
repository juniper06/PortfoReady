import React from "react";
import {
  Box
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./contactForm.css";


const ContactForm = () => {

  return (
    <>
      <div className="contact-container">
        <div className="left-contact">
          <h1>PortfoReady</h1>
          <br />
          <h3 id="discover">
            Discover Your Dream Job, <br /> One Swipe at a Time <br /> Your
            Future, Your Choice!
          </h3>
          <br />
          <br />
          <br />
          <p id="small">
            Your feedback, inquiries, and ideas are the lifeblood of our
            progress. Send us a message today, and let's make great things
            happen together.
          </p>
        </div>
        <div className="right-contact">
          <Box sx={{ padding: "40px" }}>
            <form action="#" id="contact-form">
              <input
                type="text"
                id="name"
                name="fullname"
                placeholder="Complete name"
              />
              <br />
              <br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
              />
              <br />
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <br />
              <br />
              <textarea
                style={{ border: "2px solid #c1c1c1", paddingLeft: "5px", fontSize: "17px" }}
                placeholder="Message"
                name="message" id="message"></textarea>
              <br />
              <br />
              <button
              style={{width:"136px", height:"55px", backgroundColor:"#000000", color:"#FFFFFF", border:"none", cursor:"pointer"}}
              >Submit</button>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
