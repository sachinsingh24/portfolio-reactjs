/** @format */

import React from 'react';
import './Hero.css';
import Logo from '../img/logo.png';

const Hero = () => {
  return (
    <section>
      <div className='anchor' id='Home'></div>
      <div className='container-fluid'>
        <div className='hero-wrap'>
          <div className='hero-content'>
            <h1>Hi, </h1>
            <h4>
              I'm<span> Sachin</span> Singh
            </h4>
            <h3 className='designation'>Full Stack Developer</h3>
            <span>Let's Work Together </span>
          </div>
          <div className='img-section'>
            <img src={Logo} alt='mPic' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
