/** @format */

import React from 'react';
import './Navbar.css';
import Logo from '../img/logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Connect } from './Connect_Link';

const Home_Navbar = () => {
  return (
    <Navbar
      // sticky='top'
      expand='lg'
      variant='light'
      className={`color-nav sticky-top`}>
      <Container>
        <Navbar.Brand
          href='#'
          style={{ cursor: 'default', padding: '0', margin: 'auto 0' }}>
          <img src={Logo} alt='logo' className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='navbarScroll'
          to='scrollbar-sunny-morning'
        />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            activeKey='#home'
            defaultActiveKey='#home'
            className='menu-Container my-lg-0'
            id='scrollbar-sunny-morning'
            style={{ maxHeight: '260px' }}
            navbarScroll>
            {Connect.map((item, index) => {
              return (
                <div key={index}>
                  <Nav.Item>
                    <Nav.Link
                      href={item.id}
                      className='menu-item'
                      activeKey={item.id}>
                      {item.name}
                    </Nav.Link>
                  </Nav.Item>
                </div>
              );
            })}
          </Nav>
          <div className='social'>
            <Nav.Link href='#Facebook' className='social-Item'>
              <BsFacebook />
            </Nav.Link>
            <Nav.Link href='#Linkdin' className='social-Item'>
              <BsLinkedin />
            </Nav.Link>
            <Nav.Link href='#Github' className='social-Item'>
              <BsGithub />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default Home_Navbar;
