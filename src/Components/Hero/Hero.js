/** @format */

import React from 'react';
import './Hero.css';
import Logo from '../img/Mylogoo.png';

const Hero = () => {
  return (
    <nav>
      <div className='container-fluid'>
        <div className='hero-wrap'>
          <div className='hero-content'>
            <h1>Hi, </h1>
            <h4>
              I'm a<span> Sachin</span> Singh
            </h4>
            <h3 className='designation'>Full Stack Developer</h3>
            <span>Let's Work Together </span>
          </div>
          <div className='img-section'>
            <img src={Logo} alt='mPic' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hero;
