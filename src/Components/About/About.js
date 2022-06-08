/** @format */

import React from 'react';
import './About.css';
import image from '../img/cara1.png';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-bootstrap';

const About = () => {
  return (
    <section className='right-section'>
      <div className='back-layer'>
        <div className='anchor' id='About'></div>
        <div className='container About'>
          <div className='row'>
            <div className='col-12 col-lg-6 '>
              <img src={image} alt='myPics' className='img-fluid' />
            </div>
            <div className='col-10 col-lg-6 about-content'>
              <h1 className='about-header'>About Me</h1>
              <p>
                I'm Sachin singh a full stack developer, currently i am learning
                backend technologies from skill safari, i have completed my BCA
                graduation from Yeshwantrao chavan maharashtra open university
                in 2018. I enjoy taking complex problems and turning them into
                simple and beautiful interface design and also strive to write
                elegant and effective code.
              </p>
              <p>
                About my interest i like to read and watch current affair
                articles in geology and defence diplomacy and also searching and
                analyze new technologies in computer science.
              </p>
              <h1 className='about-header '>Follow us</h1>
              <NavLink
                href='https://www.facebook.com/samroy24'
                target='_blank'
                className=' about-header social-Item'>
                <BsFacebook />
              </NavLink>
              <NavLink
                href='https://www.linkedin.com/in/sachin-singh-a2b641107'
                target='_blank'
                className=' about-header social-Item'>
                <BsLinkedin />
              </NavLink>
              <NavLink
                href='https://github.com/sachinsingh24'
                target='_blank'
                className=' about-header social-Item'>
                <BsGithub />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
