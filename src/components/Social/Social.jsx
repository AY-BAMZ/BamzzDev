import React from 'react'
import "./Index.css";
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

function Social() {
  return (
    <div className='mySocials'>
      <div className="links">
    <FaGithub className='icons'/>
    <AiFillLinkedin className='icons'/>
    <AiOutlineInstagram className='icons'/>
    <AiOutlineTwitter className='icons'/>
      </div>
    </div>
  )
}

export default Social