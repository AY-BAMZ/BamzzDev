import React from "react";
import "./Index.css";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="header">
          Contact <span>Me</span>
        </div>
        <div className="row">
          <div className="col" id="one">
            <a href="+2349066821545">
              <div className="link">
                <IoMdCall />
                <h5>+234906 682 1545</h5>
              </div>
            </a>
            <a href="aybamz181@gmail.com">
              <div className="link">
                <HiOutlineMail />
                <h5>aybamz181@gmail.com</h5>
              </div>
            </a>
            <a href="https://wa.me/2349066821545">
              <div className="link">
                <FaWhatsapp />
                <h5>+234906 682 1545</h5>
              </div>
            </a>
            <a href="https://twitter.com/BamzzDev">
              <div className="link">
                <AiOutlineTwitter />
                <h5>@BamzzDev</h5>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ayobami-paul-4bb370259/">
              <div className="link">
                <AiFillLinkedin />
                <h5>Ayobami Paul</h5>
              </div>
            </a>
            <a href="https://github.com/AY-BAMZ">
              <div className="link">
                <FaGithub />
                <h5>AY-BAMZ</h5>
              </div>
            </a>
            <a href="https://www.instagram.com/bamzzdev/">
              <div className="link">
                <AiOutlineInstagram />
                <h5>@bamzzdev</h5>
              </div>
            </a>
          </div>
          <div className="col">
            <h4>Or Send a message</h4>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" />
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
            <label>Your Message</label>
            <textarea type="text" placeholder="Enter your message" />
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
