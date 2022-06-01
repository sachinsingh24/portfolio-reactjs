/** @format */

import React from 'react';
import './Navbar.css';
import Logo from '../img/logo.png';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Connect } from './Connect_Link';

const Home_Navbar = () => {
  const [Active, setActive] = React.useState('#Home');
  const handleSelect = (selectedKey) => {
    setActive(selectedKey);
  };
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
            activeKey={Active}
            defaultActiveKey='#home'
            className='menu-Container my-lg-0'
            id='scrollbar-sunny-morning'
            style={{ maxHeight: '260px' }}
            navbarScroll
            onSelect={handleSelect}>
            {Connect.map((item, index) => {
              return (
                <div key={index}>
                  <Nav.Item>
                    <NavLink
                      href={item.id}
                      className={`menu-item`}
                      eventKey={item.id}>
                      {item.name}
                    </NavLink>
                  </Nav.Item>
                </div>
              );
            })}
          </Nav>
          <div className='social'>
            <Nav.Link
              href='https://www.facebook.com/samroy24'
              target={'_blank'}
              className='social-Item'>
              <BsFacebook />
            </Nav.Link>
            <Nav.Link
              href='https://www.linkedin.com/in/sachin-singh-a2b641107'
              target={'_blank'}
              className='social-Item'>
              <BsLinkedin />
            </Nav.Link>
            <Nav.Link
              href='https://github.com/sachinsingh24'
              target={'_blank'}
              className='social-Item'>
              <BsGithub />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home_Navbar;
