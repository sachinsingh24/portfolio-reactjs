/** @format */

import React from 'react';
import './Hero.css';
import Logo from '../img/multiflylogo.png';

const Hero = () => {
  return (
    <section>
      <div className='anchor' id='Home'></div>
      <div className='container-fluid'>
        <div className='hero-wrap'>
          <div className='hero-content'>
            <h1>Hi, </h1>
            <h4>
              I'm<span> Prince</span> Singh
            </h4>
            <h3 className='designation'>The Electrician</h3>
            <span>Let's build something amazing together! 🚀 </span>
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
