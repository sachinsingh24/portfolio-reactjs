/** @format */

import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <section className='footer-section'>
        <div className='anchor' id='Contact'></div>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-md-4 pb-4'>
              <form id='contactForm' onSubmit='return false'>
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
                  className='btn-sm btn-primary'
                  onClick='validateSubmitForm()'>
                  Submit
                </button>
                <button type='reset' className='btn-sm btn-primary'>
                  Reset
                </button>
              </form>
            </div>
            <div className='col-md-8'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-4 col-6 px-0 px-sm-3'>
                    <h5 className='text-left'>Contact</h5>
                    <ul className='list-unstyled text-left'>
                      <li className='txt-section text-left'>
                        <i
                          className='fa fa-volume-control-phone'
                          aria-hidden='true'></i>
                        <a href='tel:+917447754388' style={{ color: 'unset' }}>
                          {' '}
                          +917447754388{' '}
                        </a>
                      </li>
                      <li className='txt-section text-left'>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                        Contact Us
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-4 col-6'>
                    <h5 className='text-left'>Community</h5>
                    <ul className='list-unstyled text-left'>
                      <li className='txt-section text-left'> About Us</li>
                      <li className='txt-section text-left'> Our Clients</li>
                      <li className='txt-section text-left'> Legal notice</li>
                    </ul>
                  </div>
                  <div className='col-md-4'>
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
                        <i class='fa fa-facebook'></i>
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
