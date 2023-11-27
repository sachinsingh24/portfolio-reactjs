/** @format */

import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-bootstrap';
import logo from '../img/multiflylogo.png';

const Footer = () => {
  const handleClick = (id) => {
    window.scrollTo({
      top: id,
      behavior: 'smooth',
    });
  };
  const validateSubmitForm = () => {};
  const handleSubmit = (e) => {};
  return (
    <footer>
      <section className='footer-section'>
        <div className='anchor' id='Contact'></div>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-md-4 pb-4'>
              <form id='contactForm' onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='fname'
                    aria-describedby='emailHelp'
                    placeholder='Enter First Name'
                  />
                  <small
                    className='text-danger font-weight-bold'
                    id='nameError'></small>
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='lname'
                    aria-describedby='emailHelp'
                    placeholder='Enter Last Name'
                  />
                </div>
                <div className='form-group mb-3'>
                  <textarea
                    className='form-control'
                    id='description'
                    rows='3'></textarea>
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    aria-describedby='emailHelp'
                    placeholder='Enter Email'
                  />
                  <small
                    className='text-danger font-weight-bold'
                    id='emailError'></small>
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='mobile'
                    aria-describedby='emailHelp'
                    placeholder='Enter Mobile No'
                  />
                  <small
                    className='text-danger font-weight-bold'
                    id='mobileError'></small>
                </div>
                <button
                  type='action'
                  id='submitBtn'
                  className='submit-button'
                  onClick={validateSubmitForm()}>
                  SUBMIT
                </button>
                <button type='reset' className='reset-button'>
                  RESET
                </button>
              </form>
            </div>
            <div className='col-md-8'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3 col-6 px-0 px-sm-3'>
                    <h5 className='text-left'>Contact</h5>
                    <ul className='list-unstyled text-left'>
                      <li className='txt-section text-left'>
                        <i
                          className='fa fa-volume-control-phone'
                          aria-hidden='true'></i>
                        <a
                          href='tel:+917447754388'
                          style={{ color: 'unset', fontSize: '17px' }}>
                          {' '}
                          +917447754388{' '}
                        </a>
                      </li>
                      <li className='txt-section text-left'>
                        <i className='fa fa-map-marker' aria-hidden='true'>
                          {' '}
                        </i>
                        &nbsp;
                        <a
                          href='https://goo.gl/maps/NFwAm54715apWy4VA'
                          target={'_blank'}
                          rel='noreferrer'
                          style={{ color: 'unset', fontSize: '17px' }}>
                          Location
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-3 col-6'>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60299.42506690141!2d73.16573148423485!3d19.163989542506723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed5c9bc71bbd%3A0x87d539b0621850f3!2sBadlapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701082921632!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  {/* <div className='col-md-3 col-6'>
                    <h5 className='text-center'>Graphical item</h5>
                    <ul className='list-unstyled text-center'>
                      <li className='txt-section'>
                        <button
                          className='menutabs'
                          onClick={() => handleClick(0)}>
                          Home
                        </button>
                      </li>
                      <li className='txt-section'>
                        <button
                          className='menutabs'
                          onClick={() => handleClick(255)}>
                          About Us
                        </button>
                      </li>
                      <li className='txt-section'>
                        <button
                          className='menutabs'
                          onClick={() => handleClick(700)}>
                          Portfolio
                        </button>
                      </li>
                      <li className='txt-section'>
                        <button
                          className='menutabs'
                          onClick={() => handleClick(1500)}>
                          Skills
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 px-5'>
                    <h2 className='txt-clr text-center'>SACHIN SINGH</h2>
                    <p className='text-center txt-section'>
                      The full-stack design who focuses on digital products
                      whatever the industry.
                    </p>
                    <div className='footer-social'>
                      <NavLink
                        href='https://www.facebook.com/samroy24'
                        target='_blank'
                        className='social-btn'>
                        <i className='fa fa-facebook'></i>
                      </NavLink>
                      <NavLink
                        href='https://github.com/sachinsingh24'
                        target='_blank'
                        className='social-btn'>
                        <i className='fa fa-github'></i>
                      </NavLink>
                      <NavLink
                        href='https://www.linkedin.com/in/sachin-singh-a2b641107'
                        target='_blank'
                        className='social-btn'>
                        <i className='fa fa-linkedin'></i>
                      </NavLink>
                      <NavLink
                        href='https://www.instagram.com/sachinsingh_24_01/'
                        target='_blank'
                        className='social-btn'>
                        <i className='fa fa-instagram'></i>
                      </NavLink>
                    </div>
                  </div>
                  <div className='col-md-12 d-flex'>
                    <img src={logo} alt='logo' className='footer-logo' />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='copy-right'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-7 text-sm-left'>
              <p>
                2022 © sachin singh a MERN Stack developer All Rights Reserved.
                v.1.0.0
              </p>
            </div>
            <div className='col-sm-5 text-sm-right'>
              <p className='dsn-by'>
                Designed & Developed by <i className='fa fa-heart pulse'></i>
                <a href='#home' rel='nofollow' target='blank'>
                  Sachin singh ®
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
