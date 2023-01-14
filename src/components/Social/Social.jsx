import React from "react";
import "./Index.css";
import { FaGithub } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from "react-icons/ai";

function Social() {
  return (
    <div className="mySocials">
      <div className="links">
        <a href="https://github.com/AY-BAMZ">
          <FaGithub className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/ayobami-paul-4bb370259/">
          <AiFillLinkedin className="icons" />
        </a>
        <a href="https://www.instagram.com/bamzzdev/">
          <AiOutlineInstagram className="icons" />
        </a>
        <a href="https://twitter.com/BamzzDev">
          <AiOutlineTwitter className="icons" />
        </a>
        <a href="https://wa.me/2349066821545">
          <AiOutlineWhatsApp className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Social;
