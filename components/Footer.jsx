import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2022 WaveKnox Electronics</p>
      <p className="icons">
        <AiFillGithub />
        <AiOutlineTwitter />
        <AiFillLinkedin/>
      </p>
    </div>
  )
}

export default Footer