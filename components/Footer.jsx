import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link href="https://matthewdsouza.vercel.app">
        <a target={'_blank'} className='shoutout'>Built by Matthew Dsouza</a>
      </Link>
      <p className="icons">

        <Link href="https://github.com/matthew-dsouza">
          <a target="_blank">
            <AiFillGithub />
          </a>
        </Link>
        <Link href="https://twitter.com/mxtthxwdsxxzx">
          <a target="_blank">
            <AiOutlineTwitter />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/matthew-dsouza">
          <a target="_blank">
            <AiFillLinkedin />
          </a>
        </Link>
      </p>
    </div>
  )
}

export default Footer